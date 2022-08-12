const secondRouter = require('express').Router();

const { ModelOne } = require('../models');

// * Print Errors and Create Response Object 
// arg 1 & 2 can be null if no error
// arg 3 is true if error occurs
const handleError = (message, route, err, msgError) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            msgBody: message,
            msgError: msgError
        }
    };
};

secondRouter.post('/new', async ({ body }, res) => {
    
});



module.exports = secondRouter;
