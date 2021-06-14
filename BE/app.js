const authMiddleware = require('./middlerwares/admin');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session');
const bodyParser= require('body-parser');
const db =require('./model/db');
const flash =require('connect-flash');
const express = require('express');
const path= require('path');
const passport=require('passport');
const User=require('./model/user');

const FacebookStrategy = require('passport-facebook').Strategy;

const userRouter=require('./routers/user/user');
const authRouter=require('./routers/auth/admin');
const profileRouter=require('./routers/user/profile');
const loginRouter=require('./routers/login');
const homeRouter=require('./routers/home');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(expressLayouts);
app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY||'serect'],

  maxAge: 24 * 60 *60 *1000
}));

app.use(authMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use((req, res, next) =>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});


const FACEBOOK_APP_ID = '378262160286546'; 
const FACEBOOK_APP_SECRET = '58995181af9da0e32d83665dc98bb45e';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/facebook/callback",
    profileFields: ['id', 'emails', 'name','displayName'],
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      where: {
        facebookID: profile.id,
      }
    }).then(async (user) => {
      if(!user){
        user = await User.create({
          display: profile.displayName,
          facebookID: profile.id,
          email: profile.emails[0].value,
        })
      }
      user.accessToken = accessToken;
      await user.save();
      done(null, user);
    }).catch(done);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then(function (user) {
    done(null, user);
  }).catch(done);
});



app.use('/admin',authRouter);
app.use('/user',userRouter);
app.use('/profile',profileRouter);
app.use('/',loginRouter);
app.use('/',homeRouter);

db.sync().then(function(){
  const port = process.env.PORT||3000;
  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  });
}).catch(console.error);
