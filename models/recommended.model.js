const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recoSchema = new Schema({
    name: String,
    author: String,
    idiom: String,
    url: String,
    imgUrl: String

})

const recoModel = mongoose.model('Reco', recoSchema);

module.exports = recoModel;  