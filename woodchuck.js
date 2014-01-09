window.Woodchuck = function() {
  this.start = function() {
    this.addListeners();
    this.inject();
  };

  this.defaultHostUrl = "https://crm.precisionnutrition.com";
  var hostname = localStorage.getItem('es_hostname');

  if (!hostname) {
    console.log("Woodchuck >> I couldn't find hostname in localStorage, so i set it to " + this.defaultHostUrl);
    localStorage.setItem('es_hostname', this.defaultHostUrl);
    this.hostUrl = this.defaultHostUrl;
  } else {
    console.log("Woodchuck >> I grabbed " + hostname + " from localStorage");
    this.hostUrl = hostname;
  }

  console.log("Woodchuck >> I'm going to talk to " + this.hostUrl + " for my data");
  return this;
};

$(function() {
  var woodchuck = new Woodchuck();
  woodchuck.start();
});
