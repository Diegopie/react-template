const firstRouter = require('express').Router();

const { ModelOne, ModelTwo } = require('../models');

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


firstRouter.post('/route-one', async ({ body }, res) => {
 

});

module.exports = firstRouter;
