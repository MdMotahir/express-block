const {Token} = require("../model");

const tokenController = {
    //create token
    async create(req, res) {
        const {title, subtitle, user} = req.body;
        try {
            const token = await Token.create({title, subtitle, user});
            res.status(200).send(token);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    //find all user with token
    async findAll(req, res) {
        try {
            const tokens = await Token.find({}).populate('user');
            res.status(200).send(tokens);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = tokenController;