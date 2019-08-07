const express = require('express');
const GraphQLLD = require('./graphQLLDOutput.js');
const PipeModules = require('./pipeModules');

const app = express();

app.get('/movies/brad_pitt', function(req, res, next) {
    // Callback body
    GraphQLLD.executeQuery(GraphQLLD.comunicaConfig, GraphQLLD.getmoviesbradpitt).then( (data) => {
        const pipeResult = PipeModules.pipe(
        )(data);

        res.send(pipeResult);

    }).catch(error => {
        res.send(error.message)
    })
});

app.get('/developers/belgian', function(req, res, next) {
    // Callback body
    GraphQLLD.executeQuery(GraphQLLD.comunicaConfig, GraphQLLD.getdevelopersbelgian).then( (data) => {
        const pipeResult = PipeModules.pipe(
        )(data);

        res.send(pipeResult);

    }).catch(error => {
        res.send(error.message)
    })
});

app.listen(5656, () => {
    console.log('Listening on http://localhost:5656')
});