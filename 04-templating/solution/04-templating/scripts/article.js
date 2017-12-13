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
  // TODO: Use Handlebars to render your articles. Get your template from the DOM and "compile" your template with Handlebars.
  let template = Handlebars.compile($('#article-template').html());
  // console.log('html', $('#article-template').html());
  // console.log('text', $('#article-template').text());
  // REVIEW: If your template will use properties that aren't on the object yet, add them.
  // Since your template can't hold any JS logic, we need to execute the logic here.
  // The result is added to the object as a new property, which can then be referenced by key in the template.
  // For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  if(this.publishedOn) {
    this.publishStatus = `published ${this.daysAgo} days ago`;
  } else {
    this.publishStatus = '(draft)';
  }


  // DONE: Use the method that Handlebars gave you to return your filled-in html template for THIS article.
  return template(this);
};

// COMMENT: Why are there parentheses around "(a,b)" in the .sort() method, but not around the "articleObject" or "article" arguments in the .forEach() methods?
// PUT YOUR RESPONSE HERE
rawData.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));

rawData.forEach(articleObject => {
  articles.push(new Article(articleObject));
});

articles.forEach(article => {
  $('#articles').append(article.toHtml());
});
