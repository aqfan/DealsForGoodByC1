/*global CommentParser */

var $url = window.location.href;
var $hostname = window.location.hostname;
console.log($url+" "+$hostname);
var $store = $hostname.split(".")[1];
console.log($store);
var $comments = $('.Discount, .order-summary-price, .text-right').eq(4).text();
console.log($comments);

// var op = $('#siteTable').find('a.author')[0];
//
// window.parser = new CommentParser($comments, $(op).text());
// window.parser.parse();
