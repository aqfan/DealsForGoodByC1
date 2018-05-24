window.addEventListener("load", function () {
	function sendData() {
		var XHR = new XMLHttpRequest();

		// Define what happens on successful data submission
		XHR.addEventListener("load", function(event) {
			if ("Created" === event.target.responseText.slice(12, 19)) {
				alert("Your Coupon Code Is: " + makeid());
			} else {
				alert("Something went wrong! Please try again with a different Account ID.");
			}
		});

		// Define what happens in case of error
		XHR.addEventListener("error", function(event) {
		  alert('Oops! Something went wrong.');
		});

		// var key = '6c8ac0ed9c3bdb249bbe32d61526f18a'
		var key = 'f641226f00870093c6ef5085ba09f6f0'

		var accountID = new FormData(form).get("accountID");
		var postURL =  (
			"http://api.reimaginebanking.com/accounts/"
			+ accountID + "/purchases"
			+ "?key=" + key
		);

		// var postURL = "hello";

		// Set up our request
		XHR.open("POST", postURL);

		XHR.setRequestHeader("Content-Type", "application/json");
		XHR.send(JSON.stringify({
		  "merchant_id": "5b06fa43f0cec56abfa40c8a",
		  "medium": "balance",
		  "purchase_date": "10",
		  "amount": 0,
		  "status": "pending",
		  "description": "string"
	  	}));

  	}

	// Access the form element...
	var form = document.getElementById("accountIDform");

	// ...and take over its submit event.
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		sendData();
  	});

});

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
