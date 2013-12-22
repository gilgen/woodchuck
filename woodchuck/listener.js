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
    var address = data.recipients[0][1];
    var name = data.recipients[0][0] || address;
    console.log("Woodchuck >> listener received: ", address);
    this.updateCustomer({ name: name, address: address});
  }
};

