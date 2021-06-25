const authMiddleware = require('./middlerwares/admin');
const cookieSession = require('cookie-session');
const bodyParser= require('body-parser');
const db =require('./model/db');
const express = require('express');
const passport=require('passport');
const User=require('./model/user');
require('dotenv').config();


const indexRouter=require('./routers/index');


const app = express();


app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY||'serect'],

  maxAge: 24 * 60 *60 *1000
}));

app.use(authMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use ('/', indexRouter);


db.sync().then(function(){
  const port = process.env.PORT||3000;
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  });
}).catch(console.error);
