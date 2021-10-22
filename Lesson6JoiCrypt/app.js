const express = require('express');
const {userRouter} = require("./routes/user.routes");
const hbsExpress = require('express-handlebars');
const path = require('path');

const app = express();
const db = require('./database/index').getInstance();
const authMiddleware = require('./middleware/auth/auth.middleware')

db.setModels();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', hbsExpress({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.use('/users', userRouter);
app.post('/auth', authMiddleware, (req, res) => res.json(req.user))
app.use('*', (err, req, res, next) => {
    res.status(err.code)
        .json({
            message: err.message,
            code: err.code,
            isOk: false
        })
})

app.listen(5000, () => {
    console.log('Server listen port 5000');
})
