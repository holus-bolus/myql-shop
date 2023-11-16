const User = require('../models/user.js');

exports.registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = await User.create({username, email, password});
        res.json(newUser);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}