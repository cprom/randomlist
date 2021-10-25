const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        }
    }
);

const Item = mongoose.model('item', itemSchema);
module.exports =Item;