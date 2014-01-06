function save_options() {
  var hostname = document.getElementById("hostname").value;
  localStorage.setItem("es_hostname", hostname);

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var es_hostname = localStorage.getItem("es_hostname");
  if (!es_hostname) {
    localStorage.setItem('es_hostname', 'https://es-uat.precisionnutrition.com');
    es_hostname = localStorage.getItem("es_hostname");
  }
  document.getElementById("hostname").value = es_hostname;
}


document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
