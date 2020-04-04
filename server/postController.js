module.exports = {
  getPosts: async (req, res) => {
    console.log(req.query)
    const { string, userPostStatus } = req.query;
    const { user_id } = req.session.user;
    const db = req.app.get("db");
    const post = userPostStatus === "false" ? false : true;

    if (post && string !== "") {
      await db.posts
        .get_user_string(user_id, string)
        .then(posts => res.status(200).send(posts))
        .catch(err => console.log(err));
    }
    if (post === false && string === "") {
      await db.posts
        .get_non_user_posts(user_id)
        .then(posts => res.status(200).send(posts))
        .catch(err => console.log(err));
    }
    if (post === false && string !== "") {
      await db.posts
        .get_non_user_string(user_id, string)
        .then(posts => res.status(200).send(posts))
        .catch(err => console.log(err));
    }
    if (post && string === "") {
      await db.posts
        .get_user_posts(user_id)
        .then(posts => res.status(200).send(posts))
        .catch(err => console.log(err));
    }
  },
  getPost: (req, res) => {
    const { post_id } = req.params;
    const db = req.app.get("db");

    db.posts
      .get_post(post_id)
      .then(post => res.status(200).send(post))
      .catch(err => console.log(err));
  },
  createPost: (req, res) => {
    const { user_id } = req.session.user;
    const { title, img, content } = req.body;
    const db = req.app.get('db')

    db.posts.create_post(title, img, content, user_id)
    .then(post => res.sendStatus(200))
    .catch(err => console.log(err))
  },
  deletePost: (req, res) => {
    const {post_id} = req.params
    const db = req.app.get('db')

    db.posts.delete_post(post_id)
    .then(posts => res.status(200).send(posts))
    .catch(err => console.log(err))
  }
};
