$.ajax({
  // low level ajax call; more often used for PUT and DELETE or for more complex
  // options required in the ajax call
  url: 'http://pokeapi.co/api/v2/pokemon/44',
  type: 'GET', // optionally can use `method`
  success: function(data, message, xhr) {
    console.log(data)
  },
  fail: function(err) {
    console.error(err)
  }
})

// Shorthand ajax request for GET
$.get('http://pokeapi.co/api/v2/pokemon/44')
.done(function(data) {
  console.log('On success:', data)
})
.fail(function(err) {
  console.error('On error:', err)
})
.always(function() {
  console.log('I run regardless of result')
})

// Shorthand ajax request for POST
$.post('http://pokeapi.co/api/v2/pokemon', {id: 44, name: 'babysaur'})
.then(function(data) {
  console.log('Succeeded', data)
}, function(err) {
  console.error('Error', err)
})

// Shorthand ajax request for GET; specific for JSON Resources
$.getJSON('http://pokeapi.co/api/v2/pokemon/44')
.then(function(data) {
  console.log('Succeeded', data)
}, function(err) {
  console.error('Error', err)
})
