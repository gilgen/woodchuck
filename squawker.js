window.Woodchuck = function() {

  this.gmail = Gmail();

  this.startObserving = function() {
    console.log("Woodchuck >> initializing observers");
    var _this = this;
    this.gmail.observe.on('open_email', function(id) {
      setTimeout(function() { _this.emailOpened(); }, 200);
    });
  };

  this.eventNameFor = function(eventName) {
    return "woodchuck:" + eventName.camelize();
  };

  this.emailOpened = function() {
    var data = this.gmail.get.email_data();
    if(!data || !data.people_involved) {
    } else {
      window.postMessage({
        type: this.eventNameFor('open_email'),
        data: data.people_involved
      }, "*");
    }
  };

  return this;
};

$(function() {
  console.log("Woodchuck >> initializing squawker");
  var woodchuck = new Woodchuck();
  woodchuck.startObserving();
});
