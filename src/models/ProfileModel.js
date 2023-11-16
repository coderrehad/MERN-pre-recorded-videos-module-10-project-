const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        FirstName: {type: String, require: true},
        ListName: {type: String, require: true},
        Email: {type: String, require: true, unique: true},
        Number: {type: String, require: true},
        City: {type: String, require: true},
        UserName: {type: String, require: true},
        Password: {type: String, require: true}
    },
    {
        versionKey:false,
        timeStamp:true,
    }
)

const ProfileModel = mongoose.model('profiles',DataSchema);

module.exports = ProfileModel;