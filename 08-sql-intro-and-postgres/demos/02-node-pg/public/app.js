'use strict'

$(pageLoad)

$('#user-form').on('submit', function(e) {
  e.preventDefault()
  let data = {
    name: e.target.name.value,
    age: e.target.age.value,
    ninja: e.target.ninja.value
  }

  $.post('/db/person', data)
  .then(function() {
    pageLoad()
  })
})


function pageLoad() {
  $.get('/db/person')
  .then(
    function(data) {
      console.log(data)
      $('#results').empty()

      data.rows.forEach(function(item) {
        let content = `
          <h2>${item.name}</h2>
          <p>age: ${item.age}</p>
          <p>ninja: ${item.ninja}</p>
        `
        $('#results').append(content)
      })
    },
    function(err) {
      console.error(err)
    }
  )
}
