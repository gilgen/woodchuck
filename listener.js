console.log("Woodchuck >> listening for squawks...");

window.addEventListener("message", function(event) {
  if(event.source != window) return;
  if(!event.data.type) return;
  if(!/woodchuck/.test(event.data.type)) return;

  console.log("Woodchuck >> listener received: ", event.data);
}, false);
