const mongoose = require('mongoose');
const architectureDataSchema = new mongoose.Schema({
  projectcode : {type :String} ,
    client: {type :String} ,
    location : {type :String}  ,
    area : {type :String}  ,
    floors : {type :String}  ,
    service : {type :String}  ,
    type : {type :String}  ,
    status : {type :String}  ,
    category : {type : String} ,
    imagePath:[{type :String}] ,

});

const ArchitectureDataModel = mongoose.model('Architecture', architectureDataSchema);
module.exports = ArchitectureDataModel;
