const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        email: {type: String, unique: true},
        password: {type: String, required: true},
        image: String,
        userType: String,
        phone: String,
    },
    {timestamps: true}
);
module.exports = mongoose.model("User", userSchema);
