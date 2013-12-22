window.Woodchuck = function() {

  var self = this;

  this.start = function() {
    self.inject();
    self.addListeners();
  };

  this.inject = function() {
    // This little block of code injects the required libraries directly
    // into Gmail. This is how we get around the fact that extensions do not
    // have access to variables and APIs on the host page.
    yepnope({
      load: [
        chrome.extension.getURL("lib/camelize.js"),
        chrome.extension.getURL("vendor/jquery.js"),
        chrome.extension.getURL("vendor/gmail.js"),
        chrome.extension.getURL("squawker.js"),
        chrome.extension.getURL("style.css")
      ],
      complete: function() {
        self.wasInjected();
      }
    });
  };

  // Just a hook implement as needed
  this.wasInjected = function() {};

  return this;
}

$(function() {
  var woodchuck = new Woodchuck();
  woodchuck.start();
});

