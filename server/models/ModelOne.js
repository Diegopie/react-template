const mongoose = require('mongoose');

const ModelOneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    present: {
        type: Boolean,
        default: false,
        required: false,
    },
    groups: {
        type: Array,
        required: false,
    },
});

const ModelOne = mongoose.model('ModelOne', ModelOneSchema);

module.exports = ModelOne;
