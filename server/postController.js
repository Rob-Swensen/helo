module.exports = {
  getPosts: async (req, res) => {
    const { string, userPostStatus } = req.query;
    const { user_id } = req.params;
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
    console.log(req.params);
    const { post_id } = req.params;
    const db = req.app.get("db");

    db.posts
      .get_post(post_id)
      .then(post => res.status(200).send(post))
      .catch(err => console.log(err));
  }
};