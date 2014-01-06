window.Squawker = function() {

  this.gmail = Gmail();
  var self = this;

  this.start = function() {
    this.addObservers();
    if(this.isInEmail()) this.emailOpened();
  };

  this.isInEmail = function() {
    return this.gmail.check.is_inside_email();
  };

  this.addObservers = function() {
    console.log("Woodchuck >> initializing squawker observers");
    this.gmail.observe.on('open_email', function(id) {
      setTimeout(function() { self.emailOpened(); }, 200);
    });
  };

  this.eventNameFor = function(eventName) {
    return "woodchuck:" + eventName.camelize(false);
  };

  this.emailOpened = function() {
    var data = this.gmail.get.email_data();

    if (data && data.threads) {
      var currentUserEmail = this.gmail.get.user_email();
      var userToLookUp = Object.values(data.threads)
        .sortBy('datetime')
        .exclude(function(value) {
          return value.from_email === currentUserEmail;
         })
        .first();
      if(userToLookUp) {
        var name = userToLookUp.from || userToLookUp.from_email;
        var email = userToLookUp.from_email;

        window.postMessage({
          type: this.eventNameFor('open_email'),
          data: { name: name, email: email }
        }, "*");
      }
    }
  };
  return this;
};

$(function() {
  console.log("Woodchuck >> initializing squawker");
  var squawker = new Squawker();
  squawker.start();
});
