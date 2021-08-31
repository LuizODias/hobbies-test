const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

let port = 5000;

mongoose.connect('mongodb+srv://testPaketa:<PASSWORD>@cluster0.ruplx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('connected', function () {
    console.log('Connected to Database '+'test');
});

mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
});

app.listen(process.env.port || port, () =>{
    console.log('Server running on port: '+ port);
});

app.get('/', function(req, res){
    res.send('INVALID ENDPOINT');
});

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const routes = require('./routes/api');
app.use('/api', routes);

app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});
