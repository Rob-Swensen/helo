require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const ctrl = require("./controller");
const postCtrl = require("./postController");

const app = express();
const PORT = SERVER_PORT;

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  app.set("db", db);
  console.log("db connected");
});
// register, login, logout endpoints
app.post("/api/register", ctrl.register);
app.post("/api/login", ctrl.login);
app.post("/api/auth/logout")
app.get( '/api/auth/me', ctrl.findUser)

// user post endpoints
app.get("/api/posts/", postCtrl.getPosts);
app.get("/api/post/:post_id", postCtrl.getPost);
app.post("/api/post/", postCtrl.createPost);
app.delete("/api/post/:post_id", postCtrl.deletePost);
