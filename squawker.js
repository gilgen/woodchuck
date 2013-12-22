window.WoodchuckSquawker = function() {

  this.gmail = Gmail();
  var self = this;

  this.start = function() {
    self.addObservers();
    if(self.isInEmail()) self.emailOpened();
  };

  this.isInEmail = function() {
    return self.gmail.check.is_inside_email();
  };

  this.addObservers = function() {
    console.log("Woodchuck >> initializing squawker observers");
    self.gmail.observe.on('open_email', function(id) {
      setTimeout(function() { self.emailOpened(); }, 200);
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
        data: { recipients: data.people_involved }
      }, "*");
    }
  };

  return this;
};

$(function() {
  console.log("Woodchuck >> initializing squawker");
  var squawker = new WoodchuckSquawker();
  squawker.start();
});
