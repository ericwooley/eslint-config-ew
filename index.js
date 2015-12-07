var fs = require('fs')
var rules = JSON.parse(fs.readFileSync('./.eslintrc'))
module.exports = rules
