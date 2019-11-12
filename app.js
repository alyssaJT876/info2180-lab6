window.onload = function() {

  var sBtn = document.querySelector('#Search');
  var httpRequest;

  sBtn.addEventListener('click', function(element) {
    element.preventDefault();

    http_Request = new XMLHttpRequest();

    var input=document.getElementById("searchbar").value;
    var url = "superheroes.php?query="+input;
    httpRequest.onreadystatechange = loadSuperheroes;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

  function loadSuperheroes() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var output = document.querySelector('#output');
        output.innerHTML = response;
      } else {
        alert('Problem with the request.');
      }
    }
  }

};