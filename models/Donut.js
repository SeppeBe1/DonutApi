const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonutSchema = new Schema({
    donutname: String,
    topping: String,
    glaze: String,
    dough: String,

    companyname: String,
    streetname: String,
    housenumber: String,
    city: String,
    postalcode: String,

    orderAmount: Number,
    orderStatus: Boolean

    
});

const Donut = mongoose.model("Donut", DonutSchema);

module.exports = Donut;