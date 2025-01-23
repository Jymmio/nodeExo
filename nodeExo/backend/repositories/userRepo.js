const User = require('../models/User');

const findByEmail = async (email) => {
    return await User.findOne({ email });
};

const create = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

module.exports = { findByEmail, create };