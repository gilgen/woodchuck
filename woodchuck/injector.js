console.log("Woodchuck >> injector");

Woodchuck.prototype.inject = function() {

  // This little block of code injects the required libraries directly
  // into Gmail. This is how we get around the fact that extensions do not
  // have access to variables and APIs on the host page.
  yepnope({
    load: [
      chrome.extension.getURL("vendor/jquery.js"),
      chrome.extension.getURL("vendor/sugar.min.js"),
      chrome.extension.getURL("vendor/gmail.js"),
      chrome.extension.getURL("assets/css/style.css"),
      chrome.extension.getURL("squawker.js")
    ]
  });

};
