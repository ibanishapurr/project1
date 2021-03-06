function template(thing) {
  var str = thing.toString();
  return function (obj) {
    return str.replace(/\{\{\s*(\w+)\s*\}\}/g, function (chunk, word) {
      return obj[word];
    });
  }
}

module.exports = template;
