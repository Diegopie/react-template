const mongoose = require('mongoose');

const ModelTwoSchema = new mongoose.Schema({
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

const ModelTwo = mongoose.model('ModelTwo', ModelTwoSchema);

module.exports = ModelTwo;
