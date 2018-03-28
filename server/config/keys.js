//Check to see which env we are operating in.
if(process.env.NODE_ENV === "production") {
//return production set of keys
module.exports = require('./prod');
} else {
//return development set of keys
module.exports = require('./div');
}