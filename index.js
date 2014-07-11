
module.exports = function (string) {
  return string.replace(/^#!.*/, function (_) {
    return '// ' + _
  })
}
