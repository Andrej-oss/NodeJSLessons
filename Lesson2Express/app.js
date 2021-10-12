const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');

const users = [{name: 'sad', age: 123}, {name: 'sj', age: 18}, {name: 'dsf', age: 13}]

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', hbs({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

// app.get('/', (req, res) => {
//     console.log(req);
//     res.send("Test Server");
// });
app.get('/logs', (req, res) => {
    res.write('1');
    res.write('111');
    res.write('123123');
    res.write('12');
    res.write('1213');
    res.end();
});
app.get('/users', (req, res) => {
    // res.json({name: 'Huj', age: 22});
    res.render('users', {users: users});
});
app.get('/', (req, res) => {
    res.render('main', {isOk: false, username: 'Ivan'})
});
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send({name: 'xxx', age: 34247});
});
app.post('/login', (req, res ) => {
    console.log(req.body);

    // res.json('GOOD');
    users.push({name: req.body.name, age: 38});
    res.redirect('/users');
})
app.listen(5000, () => console.log('App listen port 5000'));

// console.log(app);
