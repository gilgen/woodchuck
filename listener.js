console.log("Woodchuck: listening...");

var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  if(event.source != window) return;
  if(!event.data.type) return;
  if(!/woodchuck/.test(event.data.type)) return;

  console.log("Listener received: ", event.data.data);
}, false);
