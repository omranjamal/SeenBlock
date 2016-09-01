// ==UserScript==
// @name           SeenBlock
// @icon           https://raw.githubusercontent.com/Hedronium/SeenBlock/master/icon32.png
// @namespace      cf.hedronium.seenblock
// @description    Block Facebook Seen notifications
// @include        https://www.facebook.com/*
// @version        1
// @grant          none
// @run-at         document-end
// @downloadURL    https://raw.githubusercontent.com/Hedronium/SeenBlock/master/SeenBlock.user.js
// ==/UserScript==

var internal = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function () {
  var url = arguments[1];
  var pieces = url.split('/');
  var last = pieces[pieces.length - 1];
  var endpoint = last.substr(0, 22);

  if (endpoint === 'change_read_status.php') {
    console.log('Blocked request to ' + url);
    return;
  }

  internal.apply(this, arguments);
}
