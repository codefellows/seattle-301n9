// Load Express
const express = require('express')

// Instantiate Express so that we can use its functionality
const app = express()

// Designate a port to serve our app on
const PORT = 3000


// Define which directory we will serve files from
app.use(express.static('./public'))


// Here is one way to set up a route... bats...
app.get('/bats', (request, response) => {
    response.sendFile('imgs/bats.png', {root: './public'})
})

// Here is our sneaky secret 'weasels' route...
app.get('/weasels', (req, res) => res.status(200).send('SECRET WEASELS!!!'))


// Let's 404 everything except for our routes and index.html
app.use((request, response) => response.status(404).sendFile('404.html', { root: './public'}))


// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
