require('dotenv').config();
const mongoose = require('mongoose')

const uri = 'mongodb+srv://TestDB:TestDB123@cluster0.eherm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

console.log(uri)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String, 
    paid: Boolean
});

const Payment = mongoose.model('Payment',paymentSchema);

module.exports = {
    Payment
};
