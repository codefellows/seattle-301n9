'use strict';

let articles = [];

function Article (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  // STRETCH: Pass the article body into the marked.js library to format our Markdown input

  return template(this);
};

// REVIEW: We can write an arrow function in one line, without the code block, making the code easier to read. With an arrow function, the 'return' is implicit, we can remove it as well.
// The .sort() method will rearrange the order of elements in the array and return the original array. This method does not make a copy. See the MDN docs for more details.
rawData.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)))

rawData.forEach(articleObject => articles.push(new Article(articleObject)))
