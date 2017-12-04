//*****basic selectors*****//

//element
  // vanillaJS
  document.getElementsByTagName('li');
  // jQuery
jQuery('li');
$('li');

//class
  // vanillaJS
document.getElementsByClassName('container');
  // jQuery
$('.container');

//id
  // vanillaJS
document.getElementById('main');
  // jQuery
$('#main');

//parent descendent
$('.container ul');
$('header ul');

$('body p');
$('main p');

// parent > child
$('header > p');

//attribute
$('input[name="whatever"]');
$('input[type="number"]');

//get text of the matched element(s)
let $headerText = $('h2').text();

//set text of the matched element(s)
$('h2').text('New header');

//get the html of the matched element(s)
$('p').html();

//set the html of the matched element(s)
$('p').html('New paragraph content');

//set the data attribute of a p
$('p').attr('data-category', 'Lorem');

//get the data attribute of a p
let $pData = $('p').data();

//make a new <li> and append it to the <ul>
  // vanillaJS
// 1. create element
// 2. give it content
// 3. append to the parent
  // jQuery
$('ul').append('<li>One</li>');
$('ul').append('<li>Two</li>');
$('ul').append('<li>Three</li>');

//make a clone
let $clonedUL = $('ul').clone();
$('header').append($clonedUL);

//remove an element from the DOM, returns the removed element
$('h2').remove();

//empty out the contents of the element
$('main').empty();

//run a command as soon as the DOM loads
// $(document).ready(function() {
//   alert('DOM is ready');
// })

//shorthand
// $(function() {
//   alert('DOM is ready');
// })