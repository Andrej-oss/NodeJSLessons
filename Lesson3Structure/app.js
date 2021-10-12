const express = require('express');
const {userRouter} = require("./routes/user.routes");
const app = express();
const hbsExpress = require('express-handlebars');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', hbsExpress({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.use('/users', userRouter);

app.listen(5000, () => {
    console.log('Server listen port 5000');
})
