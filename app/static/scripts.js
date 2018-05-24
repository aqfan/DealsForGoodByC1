window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oops! Something went wrong.');
    });

    //TODO get accountID from form data
    var accountID =

    var postURl =  (
      "http://api.reimaginebanking.com/accounts/"
      + accountID
      + "/purchases"
    );

    // Set up our request
    XHR.open("POST", postURL);

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Access the form element...
  var form = document.getElementById("customerIDform");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});

// function getAccountID(accountIDformData) {
//   var request = new XMLHttpRequest();
//   request.open("GET", "http://api.reimaginebanking.com/customers", true);
//   request.onload = function () {
//
//   }
//   request.send();
// }
