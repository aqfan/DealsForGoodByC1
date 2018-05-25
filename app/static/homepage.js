var app = angular.module("homepage", []);

app.controller("ListController", function($scope, $http) {
  $scope.iconGroup = [];

  // $.ajax({
  //     type: "GET",
  //     dataType: 'json',
  //     url: "http://deals-api.herokuapp.com/deals/",
  //     crossDomain : true
  // })
  //     .done(function( data ) {
  //         console.log(data);
  //     });

  var req = new XMLHttpRequest();
  req.responseType = "json";
  req.open("GET", "http://deals-api.herokuapp.com/deals/", true);
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        var companyInfo = req.response;
        console.log(companyInfo);
      }
    }
  };
  req.send();
});
