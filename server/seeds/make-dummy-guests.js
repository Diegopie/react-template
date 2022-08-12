require('../config/db')();

const { ModelOne } = require('../models');

const makeAsync = async () => {
    try {
        await ModelOne.insertMany([
            {
                "name": "Diego",
                "present": True,
            },
            {
                "name": "Diego",
                "present": True,
            },
            {
                "name": "Diego",
                "present": True,
            },
            {
                "name": "Diego",
                "present": True,
            },
            {
                "name": "Diego",
                "present": True,
            },
            {
                "name": "Diego",
                "present": True,
            },
            {
                "name": "Diego",
                "present": True,
            },
        ])
    } catch (err) {
        console.log(err);
    }
}


makeAsync();