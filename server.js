//----------------------------------
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const moment = require('moment');
const helmet = require('helmet');
const PORT = process.env.PORT || 8081;
const app = express();
const db = require('./models');
const path = require('path');
const fs = require('fs');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

if (app.get('env') !== 'test') {
  app.use(morgan('dev')); // Hook up the HTTP logger
}

//-------------------------------------------------
// Print Working Directory - Root
//-------------------------------------------------

// Base Directory Path
const directoryPath = path.join(__dirname);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    console.log ("** Root Directory **");
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
    console.log ("** END Root Directory **");
});

//-------------------------------------------------
// Print Working Directory - /client/
//-------------------------------------------------

// Base Directory Path
const directoryPathClient = path.join(__dirname, "client");
//passsing directoryPath and callback function
fs.readdir(directoryPathClient, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    console.log ("** /client/ Directory **");
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
    console.log ("** END /client/ Directory **");
});

//-------------------------------------------------
// Print Working Directory - /client/build/
//-------------------------------------------------

// Base Directory Path
const directoryPathBuild = path.join(__dirname, "client/build");
//passsing directoryPath and callback function
fs.readdir(directoryPathBuild, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    console.log ("** /client/build/ Directory **");
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
    console.log ("** END /client/build/ Directory **");
});

// End Print Working Directory


app.use(express.static('public'));

require('./config/passport')(db, app, passport); // pass passport for configuration

// Define our routes
app.use('/api', require('./routes/apiRoutes')(passport, db));

// Secure express app
app.use(helmet.hsts({
  maxAge: moment.duration(1, 'years').asMilliseconds()
}));

///////////////////////////////////////////////////
// TESTING NEW OPTIONS FOR AwS ELASTIC BEANSTALK //
///////////////////////////////////////////////////

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  // app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    // res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

  });
}

///////////////////////////////////////////
// ORIGINAL CODE THAT WORKED WITH HEROKU //
///////////////////////////////////////////

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   // app.use(express.static(path.join(__dirname, 'client/build')));
//   app.use(express.static(path.join(__dirname, 'build')));

// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     // res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

//   });
// }

// GOOGLE SIGN-IN //

// app.get("/google", function(req, res) {
//     res.sendFile(path.join(__dirname, "./google-test.html"));
//   })

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

const syncOptions = {
  force: process.env.FORCE_SYNC === 'true'
};


if (app.get('env') === 'test') {
  console.log("is True Should Reset")
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(() => {
  if (app.get('env') !== 'test' || syncOptions.force) {
    console.log("is True Should Reset")

    require('./db/seed')(db);
  }
  
  
// catch 404 and forward to error handler
if (app.get('env') !== 'development') {
  app.use((req, res, next) => {
    const err = new Error('Not Found: ' + req.url);
    err.status = 404;
    next(err);
  });
}

  app.listen(PORT, () => {
    console.log(`----------------------------------\n
    --------App listening on port: ${PORT}\n
    process.env.NODE_ENV: ${process.env.NODE_ENV}\n
    ----------------------------------\n`);
  });
});

module.exports = app;