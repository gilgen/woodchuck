__woodchuck__ = {

  asyncInject: function(script, callback) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(script);
    console.log("injecting: ", s.src);
    s.onload = function() {
      this.parentNode.removeChild(this);
      if(callback) {
        callback.apply(window);
      }
    };
    (document.head||document.documentElement).appendChild(s);
  },

  injectjQuery: function() {
    __woodchuck__.asyncInject("vendor/jquery.js", __woodchuck__.injectGmailLibs);
  },

  injectGmailLibs: function() {
    __woodchuck__.asyncInject("vendor/gmail.js", __woodchuck__.injectSquawker);
  },

  injectSquawker: function() {
    __woodchuck__.asyncInject('squawker.js');
  },

  init: function() {
    __woodchuck__.injectjQuery();
  }

};

// TODO: Have the injector listening for the "start" event
__woodchuck__.init();
