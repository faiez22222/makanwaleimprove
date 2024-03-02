const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({

  name : {type : String , required : true} ,
  mobile : {type : String , required : true} , 
  email : {type : String , required : true} ,
  location :  { type : String , required : true} ,
  city : {type : String , required : true } ,
  state : {type : String , required : true} ,
  category :  { type : String , required : true} ,
  message : {type : String , required : true} , 
  acceptTerms : {type : Boolean , required : true} ,
  isDeleted: {type: Boolean, default: false},


},
{
  timestamps: true,
}
);
const ContactFormSchema = mongoose.model('ContactFormSchema', contactFormSchema);
module.exports = ContactFormSchema;