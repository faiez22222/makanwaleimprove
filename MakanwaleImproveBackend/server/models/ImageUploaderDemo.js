
const mongoose = require('mongoose');
const formDataSchema = new mongoose.Schema({
  projectcode : {type :String} ,
    client: {type :String} ,
    location : {type :String}  ,
    area : {type :String}  ,
    floors : {type :String}  ,
    packages : {type :String}  ,
    status : {type :String}  ,
    category : {type : String} ,
    imagePath1:[{type :String}] ,
    imagePath2 : [{type : String}]
});

const FormDataModel = mongoose.model('FormData', formDataSchema);
module.exports = FormDataModel;
