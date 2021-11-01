const express = require('express');
const {userRouter, authRouter} = require("./routes/index");
const hbsExpress = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();
const db = require('./database/index').getInstance();
const authMiddleware = require('./middleware/auth/auth.middleware')

db.setModels();
app.use(fileUpload());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', hbsExpress({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.use('/users', userRouter);
app.use('/auth', authRouter);
//app.post('/auth', authMiddleware, (req, res) => res.json(req.user))
app.use('*', (err, req, res, next) => {
    res.status(err.code || 500)
        .json({
            message: err.message,
            code: err.code || 500,
            isOk: false
        })
})

app.listen(5000, () => {
    console.log('Server listen port 5000');
})
