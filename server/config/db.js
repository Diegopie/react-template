const mongoose = require('mongoose');

async function db() {
    try {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hot-new-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log('Successfully Connected To DB');
        })
        .catch(err=> {
            console.log(err);
        })
    } catch (error) {
        console.log('Error Connecting to DB');
        console.log(error);
    }
}

module.exports = db;
