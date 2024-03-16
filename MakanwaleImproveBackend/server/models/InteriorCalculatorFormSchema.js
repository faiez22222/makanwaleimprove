const mongoose = require('mongoose');

const interiorFormSchema = new mongoose.Schema({

  Name : {type : String , required : true} ,
  Number : {type : String , required : true} , 
  Emailid : {type : String , required : true} ,
  Checked : {type : Boolean , required : true} ,
  bhk : {type : String , required : true} ,
  package : {type : String , required : true} ,
  room : {type :Object, required : true },
  PropertyName : {type : String , required : true} ,
  isDeleted: {type: Boolean, default: false},


},
{
  timestamps: true,
}
);
const InteriorFormSchema = mongoose.model('InteriorFormSchema', interiorFormSchema);
module.exports = InteriorFormSchema;