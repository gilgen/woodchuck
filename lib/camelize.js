String.prototype.camelize = function () {
  return this.replace(/(\-|_|\.|\s)+(.)?/g, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match, separator, chr) {
    return match.toLowerCase();
  });
};
