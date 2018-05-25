var app = angular.module("homepage", []);

app.controller("ListController", function($scope, $http) {
  $scope.iconGroup = [];

  var req = new XMLHttpRequest();
  req.responseType = "json";
  req.open("GET", "http://deals-api.herokuapp.com/deals/" + localStorage['store_name'], true);
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        var companyInfo = req.response;
        console.log(companyInfo);
        $('#charity_img').attr('src',companyInfo["image-link"]);
        $('#percentage').text(companyInfo.percent_off);
      }
    }
  };
  req.send();
});
