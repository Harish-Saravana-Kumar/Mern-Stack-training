const mongse = require('mongoose');

const stuSchema = mongse.Schema( {
    stuName : String,
    stuId : Number
});

const stdModel = mongse.model('StudentModel', stuSchema, 'StudentModel');

module.exports = stdModel;