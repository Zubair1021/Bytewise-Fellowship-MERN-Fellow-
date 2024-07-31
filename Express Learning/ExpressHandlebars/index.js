//-----------------------Handlebars-----------------------

//Handle bar is used to orgnize the file nicely

//Express Handlebars is a template engine that allows users to build semantic HTML templates and render web pages from server-side data to the client side

//Express HandleBar Learning "https://github.com/express-handlebars/express-handlebars"

const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

// Create an instance of the Handlebars engine
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/home', (req, res) => {
    res.render('home'); // Ensure this matches a view file in your views directory
});

app.get('/About', (req, res) => {
    res.render('About'); // Ensure this matches a view file in your views directory
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
 