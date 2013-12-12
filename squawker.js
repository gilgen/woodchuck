(function() {

  var gmail = Gmail();

  console.log("Im the squawker and I'm squawking for: ", gmail.get.user_email());

  gmail.observe.on("open_email", function(id, url, body) {
    console.log(gmail.get.email_data());
    console.log("email opened", id, url, body);
    // var data = Gmail().get.email_data();
    // if(data && data.people_involved) {
    //   console.log("postMessage: ", data.people_involved);
    //   window.postMessage({
    //     type: "woodchuck:open_email",
    //     data: data.people_involved
    //   }, "*");
    // }
  });

  // window.setInterval(function() {
  //   console.log("is inside email?", gmail.check.is_inside_email());
  //   if(!gmail.check.is_inside_email()) return;
  //   var data = gmail.get.email_data();
  //   if(!data.people_involved) return;
  //   console.log("In an email with people involved!", data.people_involved);
  // }, 1000);

})();
