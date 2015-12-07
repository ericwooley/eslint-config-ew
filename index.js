const fs = require('fs')
const rules = JSON.parse(fs.readFileSync(__dirname + '/.eslintrc'))
module.exports = rules
