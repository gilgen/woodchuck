window.Woodchuck = function() {
  this.start = function() {
    this.addListeners();
    this.inject();
  };

  return this;
}

$(function() {
  var woodchuck = new Woodchuck();
  woodchuck.start();
});

