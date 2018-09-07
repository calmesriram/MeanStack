var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = Schema({

name:{
    type:String 
     },
capital:{ 
    type:String
     },
});

var User = mongoose.model('country',countrySchema);
module.exports = User;
// module.exports = mongoose.model('country',countrySchema);