const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const cookieSession = require('cookie-session');
const expressLayouts = require('express-ejs-layouts');
const authMiddleware = require('./src/middlerwares/auth');
const db =require('./src/model/db')


const userRouter=require('./src/routers/user');
const authRouter=require('./src/routers/auth');
const sumRouter=require('./src/routers/sum');
const todoRouter=require('./src/routers/todo');




app.set('view engine','ejs');



app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY||'serect'],

  maxAge: 24 * 60 *60 *1000
}));

app.use(authMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);

app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/sum',sumRouter);
app.use('/todo',todoRouter);

app.get('/', (req, res) => {
  res.render('index', { title: 'Trang Chủ'});
});

db.sync().then(function(){
  const port = process.env.PORT||3000;
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  });
}).catch(console.error);
