Woodchuck.prototype.insertionSelector = '.Bu.y3';
Woodchuck.prototype.logoPath = chrome.extension.getURL("images/logo.jpg");

Woodchuck.prototype.updateCustomer = function(opts) {
  $(this.insertionSelector).html(
    '<div class="precision-nutrition">' +
      '<img class="logo" src="' + this.logoPath + '"></img>' +
      '<p>Pulling data for ' + opts.name + '</p>' +
    '</div>'
  );
  // $.ajax({
  //   url: 'https://www.google.ca',
  //   type: 'GET',
  //   success: function(data) {
  //     // Update the view with the HTML that comes back
  //     console.log("customer data came back: ", data);
  //   },
  //   dataType: 'html'
  // });
};

