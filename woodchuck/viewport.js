console.log("Woodchuck >> viewport");

Woodchuck.prototype.rootElement = '.Bu.y3';
Woodchuck.prototype.logoPath = chrome.extension.getURL("images/logo.jpg");
Woodchuck.prototype.$el = $(Woodchuck.prototype.rootElement);
Woodchuck.prototype.userData = {};

Woodchuck.prototype.updateCustomer = function(opts) {
  if(!this.isLoggedIn()) {
    this.showLoginForm();
    return false;
  }

  if(this.userData.email == opts.email) {
    this.updateCustomerView();
  }
  else {
    // TODO: Make the setting of userData and
    // updateCustomerView part of a success handler
    this.userData = {
      name: opts.name,
      email: opts.email
    };
    this.updateCustomerView();

    // $.ajax({
    //   url: 'https://www.google.ca',
    //   type: 'GET',
    //   success: function(data) {
    //     // Update the view with the HTML that comes back
    //     console.log("customer data came back: ", data);
    //   },
    //   dataType: 'html'
    // });
  }
};

Woodchuck.prototype.updateCustomerView = function() {
  console.log("Woodchuck >> updating customer view");
  $(this.rootElement).html(
    '<div class="precision-nutrition">' +
      '<img class="logo" src="' + this.logoPath + '"></img>' +
      '<p>Pulling data for ' + this.userData.name + '</p>' +
    '</div>'
  );
};

Woodchuck.prototype.showLoginForm = function() {
  console.log("Woodchuck >> rendering login form");
  var self = this;
  $(this.rootElement).html(
    '<div class="precision-nutrition">' +
      '<img class="logo" src="' + this.logoPath + '"></img>' +
      '<div class="errors"></div>' +
      '<form class="login">' +
        '<label for="pn-email" class="clearfix">Email</label><br />' +
        '<input id="pn-email"" type="text"></input>' +
        '<br />' +
        '<label for="pn-password">Password</label><br />' +
        '<input id="pn-password" type="password"></input><br />' +
        '<input type="submit" value="Login"></input>' +
      '</form>' +
    '</div>'
  );
  $(self.rootElement).find('form.login').submit(function(event) {
    self.loginFormSubmitted(event);
  });
};

Woodchuck.prototype.loginFormSubmitted = function(event) {
  var email = $('#pn-email').val(),
    password = $('#pn-password').val(),
    self = this;

  event.preventDefault();
  event.stopPropagation();

  $('#pn-email').removeClass('error');
  $('#pn-password').removeClass('error');
  $('.precision-nutrition .errors').empty();
  if(!email) $('#pn-email').addClass('error');
  if(!password) $('#pn-password').addClass('error');
  if(!email || !password) return false;

  this.login(email, password).then(
    function(data, status, xhr) {
      console.log("Woodchuck >> login submit came back successful", data);
    },
    function(xhr, status, error) {
      'https://es-uat.precisionnutrition.com/users/sign_in'
      $(self.rootElement).find('.errors').text('Login failed :(');
    }
  );

  console.log("Woodchuck >> submitted login form", email, password);
};
