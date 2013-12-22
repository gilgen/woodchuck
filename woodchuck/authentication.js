console.log("Woodchuck >> authentication");

Woodchuck.prototype.loginEndpoint = 'https://es-uat.precisionnutrition.com/users/sign_in';

Woodchuck.prototype.isLoggedIn = function() {
  return !!this.bearerToken();
};

Woodchuck.prototype.bearerToken = function() {
  return localStorage.pn_bearer_token;
};

Woodchuck.prototype.login = function(email, password) {
  var xhr = $.ajax({
    url: this.loginEndpoint,
    type: 'POST',
    dataType: 'json',
    data: {
      user: { email: email, password: password }
    }
  });

  return xhr;
};
