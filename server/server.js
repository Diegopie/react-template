// Import Packages
const express = require('express');
const path = require('path');

require('./config/db')();
const routes = require('./routes');

// Set Port
const PORT = process.env.PORT || 3070;

// Create Express App and Middleware
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log('Server Running on PORT: ' + PORT);
});
