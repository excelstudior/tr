import WebServer from './web.server'
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');
const users = require('./routes/api/users');
const profile=require('./routes/api/profile');
const posts=require('./routes/api/posts');
const admin=require('./routes/api/admin');

let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });

webServer.app.get('/XForward', (req, res) => {
  // let XForward=req.headers;
  // res.send(JSON(XForward));
  let ip = req.headers['x-forwarded-for'] || 'No proxy'

  let allHeaders = (req.headers)
  console.log(allHeaders); 3
  console.log(JSON.stringify(allHeaders))
  console.log(typeof (allHeaders))
})

webServer.app.use(bodyParser.urlencoded({ extended: false }));
webServer.app.use(bodyParser.json());

mongoose
  .connect(keys.url + keys.Name)
  .then(() => console.log(`MongoDB connected!`))
  .catch(err => console.log);
console.log(mongoose.connection.readyState)
//Passport middleware
webServer.app.use(passport.initialize());
//Passport config
require('./config/passport')(passport);

// Use Routes
webServer.app.use('/api/users', users);
webServer.app.use('/api/profile',profile);
webServer.app.use('/api/posts',posts);
webServer.app.use('/api/admin',admin)


const port = process.env.port || 5000;
webServer.app.listen(port, () => console.log(`Server running on port ${port}`));