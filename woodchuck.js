window.Woodchuck = function() {
  this.start = function() {
    this.addListeners();
    this.inject();
  };

  var hostname = localStorage.getItem('es_hostname')
  if (!hostname)
  {
    localStorage.setItem('es_hostname', 'https://es-uat.precisionnutrition.com');
  }
  this.host_url = localStorage.getItem('es_hostname');

  return this;
}

$(function() {
  var woodchuck = new Woodchuck();
  woodchuck.start();
});

