const mongooes = require('mongoose');

const userSchema = new mongooes.Schema(
    {
        name: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
    },
    {
        timestamps: true
    }
);

const userModel = mongooes.model('users', userSchema);

module.exports = userModel;