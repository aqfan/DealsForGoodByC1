$(function () {
  var req = new XMLHttpRequest();
  req.responseType = "json";
  req.open("GET", "http://deals-api.herokuapp.com/deals/" + localStorage['store_name'], true);
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        var companyInfo = req.response;
        console.log(companyInfo);
        $('#charity_img').attr('src', companyInfo["image-link"]);
        $('#percentage').text(companyInfo.percent_off);
        $('#icon').attr('src','http://logo.clearbit.com/' + companyInfo["store-link"]);
        $('#charity_url').attr('href', companyInfo["charity-link"])
        $('#name').text(companyInfo["store-formal"])
      }
    }
  };
  req.send();

  $('#acceptButton').click(function() {
    chrome.windows.create({
      url: "http://deals-for-good.herokuapp.com/" + localStorage['store_name'],
      type: "popup"
    }, function(win) {
      // win represents the Window object from windows API
      // Do something after opening
    });
  });
});
