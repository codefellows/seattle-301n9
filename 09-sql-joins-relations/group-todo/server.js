'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

const conString = 'postgres://localhost:5432/todos';

const client = new pg.Client(conString);

client.connect();

app.get('/todos', (request, response) => {
    client.query(`
    SELECT * FROM TODOLIST;
    `
    ).then(function(result){
        response.send(result.rows);
    });
});

app.listen(PORT, function(){
    console.log('server started on: ' + PORT);
});