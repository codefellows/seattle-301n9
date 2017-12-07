'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects, and is helpful when you have a lot of keys or want to easily add more properties later.
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  let template = $('#neighborhood-template').html();
  // 2. Use Handlebars to "compile" the HTML, returns a function
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject) {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
