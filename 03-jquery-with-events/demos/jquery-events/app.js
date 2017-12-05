'use strict';

//nav handler
$('nav a').on('click', function() {
  let $whereToGo = $(this).data('tab');
  // what is $whereToGo
  //gives us 'delegation' or 'attributes'
  console.log('$where to go', $whereToGo);
  $('.tab-content').hide();
  // debugger;
  //we want $('#delegation')
  $('#' + $whereToGo).fadeIn(750)
})

//event logger
function logTarget() {
  console.log('this', this);
  console.log('$(this)', $(this));

  let $target = $(this).text();
  let $newFeedback = $('#feedback p:first-child').clone();

  $newFeedback.text('You clicked on ' + $target);
  $('#feedback').append($newFeedback);
}

//not delegated - event bound to all the 'li's
//no selector specified in .on() method
$('#menu1 li').on('click', logTarget)

//delegated - event is bound to parent
//'li' is specified in .on()
$('#menu2').on('click', 'li', logTarget)

//button handlers
$('button[name=adder1]').on('click', function() {
  let $newLi1 = $('#menu1 li:first').clone();
  $newLi1.text('newLi1');
  $('#menu1').append($newLi1);
});

$('button[name=adder2]').on('click', function() {
  let $newLi2 = $('#menu2 li:first').clone();
  $newLi2.text('newLi2');
  $('#menu2').append($newLi2);
});

$('button[name=clear]').on('click', function() {
  $('.log-item:first').siblings().remove();
});

//checkbox handler - change event.
//shows difference between attr & prop
$('input[name=check]').on('change', function() {
  let $checkbox = $(this);

  $('#checked-state').html('.attr("checked"): ' + $checkbox.attr('checked') + '<br>.prop( "checked" ): ' + $checkbox.prop('checked'));

}).change();

//select box filtering
$('select[name="icecream"]').on('change', function() {
  let $selection = $(this).val();
  $('img').hide()
  $('img[data-flavor="' + $selection + '"]').show()
})

//DOM-ready function
$(document).ready(function() {
  $('.tab-content').hide()
})
