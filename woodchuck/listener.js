console.log("Woodchuck >> listener");

Woodchuck.prototype.addListeners = function() {
  console.log("Woodchuck >> listening for squawks...");

  var self = this;
  window.addEventListener("message", function(event) {
    if(event.source != window) return;
    if(!event.data.type) return;
    if(!/woodchuck/.test(event.data.type)) return;
    var eventName = event.data.type.substr(10);
    self.actions[eventName].apply(self, [event.data.data]);
  }, false);
};

Woodchuck.prototype.actions = {
  openEmail: function(data) {
    console.log("Woodchuck >> listener received: ", data.email);
    this.updateCustomer(data);
  }
};

