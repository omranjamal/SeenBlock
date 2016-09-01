// ==UserScript==
// @name           SeenBlock
// @icon           https://raw.githubusercontent.com/Hedronium/SeenBlock/master/icon32.png
// @namespace      cf.hedronium.seenblock
// @description    Block Facebook Seen notifications
// @include        https://www.facebook.com/*
// @version        1
// @grant          none
// @run-at         document-start
// @downloadURL    https://raw.githubusercontent.com/Hedronium/SeenBlock/master/SeenBlock.user.js
// ==/UserScript==

var internal_ajax_method_call = XMLHttpRequest.prototype.open;

console.log('SeenBlock running.');

XMLHttpRequest.prototype.open = function (method, url) {
  if (typeof url === 'string') {
    var pieces = url.split('/');

    var last = pieces[pieces.length - 1];
    var endpoint = last.substr(0, 22);

    if (endpoint == 'change_read_status.php') {
      console.log('Blocked request to ' + url);
      return;
    }
  }
  
  return internal_ajax_method_call.apply(this, arguments);
};
