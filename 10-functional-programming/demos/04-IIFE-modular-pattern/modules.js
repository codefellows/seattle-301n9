'use strict';

// REVIEW: IIFE module pattern for creating local scope within the file, and
// handling data back out to a higher level of scope
(function(module) {


  // below is just an example of assigning methods to an object, and then handing that object out to the global scope
  let articleView = {}
  articleView.method1 = function() {}
  articleView.method2 = function() {}
  articleView.method3 = function() {}
  articleView.method4 = function() {}
  articleView.method5 = function() {}
  articleView.method6 = function() {}

  module.articleView = articleView

})(window)
