module.exports = {
    getPosts: async (req, res) => {
        const { string, userPostStatus } = req.query;
        const { user_id } = req.params;
        console.log(req.query)
        const db = req.app.get('db');

        if(userPostStatus && string !== ''){
            await db.posts.get_user_string(user_id, string)
            .then(posts => res.status(200).send(posts))
            .catch(err => console.log(err))
        } else if(userPostStatus === 'false' && string === ''){
            await db.posts.get_non_user_posts(user_id)
            .then(posts => res.status(200).send(posts))
            .catch(err => console.log(err))
        } else if(userPostStatus === 'false' && string !== ''){
            await db.posts.get_non_user_string(user_id, string)
            .then(posts => res.status(200).send(posts))
            .catch(err => console.log(err))
        } else if(userPostStatus && string === ''){
            await db.posts.get_user_posts(user_id)
            .then(posts => res.status(200).send(posts))
            .catch(err => console.log(err))
        }
    }
}