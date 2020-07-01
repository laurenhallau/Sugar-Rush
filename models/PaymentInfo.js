const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    name: { type: String, required: true },
    creditCardNum: {type: Number, required: true},
    expDate: {type: Number, required: true},
    cvcNum: {type: Number, required: true},
    streetAddress:{
        streetNum: {type:Number, required:true},
        streetName: {type: String, required:true}
    },
    city:{type: String, required:true},
    state:{type:String, required:true},
    zipCode:{type:Number, required: true}

}) 

const PaymentInfo = mongoose.model("PaymentInfo", paymentSchema);

module.exports = PaymentInfo;