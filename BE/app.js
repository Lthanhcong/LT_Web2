const authMiddleware = require('./src/middlerwares/admin');
const cookieSession = require('cookie-session');
const bodyParser= require('body-parser');
const db =require('./src/model/db');
const express = require('express');
const passport=require('passport');
const User=require('./src/model/user');
require('dotenv').config();


const defaultRouter=require('./src/routers/default');
const adminRouter=require('./src/routers/admin');
const authRouter=require('./src/routers/auth');
const moviesRouter=require('./src/routers/movies');
const emailRouter=require('./src/routers/email');
const categoryRouter=require('./src/routers/category');


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


app.use ('/', defaultRouter);
app.use ('/admin', adminRouter);
app.use ('/auth', authRouter);
app.use ('/email', emailRouter);
app.use ('/category', categoryRouter);
app.use ('/movies', moviesRouter);


db.sync().then(function(){
  const port = process.env.PORT||3000;
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  });
}).catch(console.error);
