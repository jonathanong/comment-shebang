
var assert = require('assert')

var comment = require('./')

assert.equal('// #!node', comment('#!node'))

console.log('tada')
