const mongoose = require('mongoose');

const { DB_QUEARYSTRING } = require('./env');

exports.dbInit = () => {
    mongoose.connection.on('open', () => console.log('DB is connected!'));
    mongoose.set("strictQuery", false);

    return mongoose.connect(DB_QUEARYSTRING);
}