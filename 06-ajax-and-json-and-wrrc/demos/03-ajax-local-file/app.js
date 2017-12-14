'use strict'

$.getJSON('./data.json')
.then(
  function(data) {
    console.log(data);
    data.forEach(function(ele) {
      ele.topping.forEach(function(topping) {
        $('#result').append(`<h3>${topping.type}</h3>`)
      })
    })
  },
  function(err){
    console.error(err);
  }
)
