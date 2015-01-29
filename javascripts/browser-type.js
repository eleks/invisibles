'use strict';

eleks.browserType = {};

(function (ns) {
  var userAgent = navigator.userAgent.toLowerCase();

  var agentContains = function() {
    var result = true;
    for (var i = 0; i < arguments.length; i++)
    {
      var subString = arguments[i].toLowerCase();
      result = result && userAgent.indexOf(subString) >= 0
    }
    return result;
  };

  ns.isMobile = function () {
    return agentContains('iphone') || agentContains('ipod') || agentContains('android', 'mobile')|| ns.isMobileOpera();
  };

  ns.isWindowsPhone = function () {
    return agentContains('iemobile') || agentContains('windows phone');
  };

  ns.isMobileOpera = function () {
    return agentContains('opera', 'mini')|| agentContains('opera', 'mobi');
  };

  ns.isOperaMini = function () {
    return agentContains('opera', 'mini');
  };

  ns.isMobileFirefox = function () {
    return agentContains('mobile', 'firefox');
  };

  ns.isTablet = function () {
    return agentContains('ipad') || agentContains('android') && !ns.isMobile();
  };

  ns.isChrome = function () {
    return agentContains('chrome') && !agentContains('opr') && !ns.isMobile() && !ns.isTablet();
  };

  ns.isSafari = function () {
    return agentContains('safari') && !ns.isChrome() && !ns.isMobile() && !ns.isTablet();
  };

  ns.isOldIE = function () {
    return agentContains('msie 7.') || agentContains('msie 8.') ;
  };

  ns.isIE = function() {
    return agentContains('msie') || agentContains('trident');
  };

  ns.isIE9 = function() {
    return agentContains('msie 9.0');
  };

  ns.supportsParallax = function () {
    return !ns.isMobile() && !ns.isTablet() && !ns.isOldIE();
  };
}(eleks.browserType));

