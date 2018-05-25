window.addEventListener("load", function () {
	function sendData() {
		var XHR = new XMLHttpRequest();

		// Define what happens on successful data submission
		XHR.addEventListener("load", function(event) {
			if ("Created" === event.target.responseText.slice(12, 19)) {
				alert("Success! Your coupon code is " + makeid()
				      + '\n\n' + "Nessie confirmation: "
				      + event.target.responseText
				     );
			} else {
				alert("Something went wrong! Please try again with a different Account ID.");
			}
		});

		// Define what happens in case of error
		XHR.addEventListener("error", function(event) {
			alert('Something went wrong! Please try again with a different Account ID.');
		});

		// var key = '6c8ac0ed9c3bdb249bbe32d61526f18a'
		var key = 'f641226f00870093c6ef5085ba09f6f0'

		var formData = new FormData(form)
		var accountID = formData.get("accountID");
		var postURL =  (
			"http://api.reimaginebanking.com/accounts/"
			+ accountID + "/purchases"
			+ "?key=" + key
		);

		// Set up our request
		XHR.open("POST", postURL);

		XHR.setRequestHeader("Content-Type", "application/json");
		XHR.send(JSON.stringify({
		  "merchant_id": formData.get("merchant_id"),
		  "medium": "balance",
		  "purchase_date": formData.get("purchase_date"),
		  "amount": parseInt(formData.get("amount")),
		  "status": "pending",
		  "description": formData.get("description"),
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
