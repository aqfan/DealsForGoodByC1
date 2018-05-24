$(function () {

    // Event listening code goes here.
    // Be sure to check popup.html to learn the `id` attributes of the apply/remove filter
    // buttons and the username input box - you'll need those to listen for events!
    // HINT: You can't access window.parser here. You'll have to use chrome.tabs.executeScript
    // to call window.parser.filter and window.parser.parse.
    // Get the event page
    $('#store-name').text(localStorage['store_name']);
    $('#icon').attr('src','https://plus.google.com/_/favicon?domain=' + localStorage['host_name'])

    $('#username').on('keydown', function (e) {
        chrome.tabs.executeScript({
          code: 'window.parser.parse(' + $('#username').val() + ');'
        });
       $('#username').text(window.location.href);
    });

    $('#filter-off').click(function (e) {
      // chrome.tabs.executeScript({
      //   code: 'window.parser.filter(false);'
      // });
    });

    $('#filter-on').click(function (e) {
      // chrome.tabs.executeScript({
      //   code: 'window.parser.filter(true);'
      // });
    });

});
