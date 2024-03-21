const mongoose = require('mongoose');

const contactFormBelow720Schema = new mongoose.Schema({

  name : {type : String , required : true} ,
  mobile : {type : String , required : true} , 
  email : {type : String , required : true} ,
  state :  { type : String , required : true} ,
  pincode :  { type : String , required : true} ,
  isDeleted: {type: Boolean, default: false},


},
{
  timestamps: true,
}
);
const ContactFormBelow720Schema = mongoose.model('ContactFormBelow720Schema', contactFormBelow720Schema);
module.exports = ContactFormBelow720Schema;