const {User} = require("../model");

const userController = {
    async create(req, res) {
        const {name, bio, website, tokens} = req.body;
        try {
            const user = await User.create({name, bio, website, tokens});
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    //find all user with token
    async findAll(req, res) {
        try {
            const users = await User.find({}).populate('tokens');
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = userController;