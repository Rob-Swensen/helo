module.exports = {
    getPosts: (req, res) => {
        const {user_id} = req.params;
        const db = req.app.get('db');
        console.log('hit')
    };