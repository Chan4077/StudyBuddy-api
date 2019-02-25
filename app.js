var express = require('express');
var responseTime = require('response-time');
var favicon = require('serve-favicon');
var path = require('path');
var admin = require('firebase-admin');
var port = process.env.PORT || 3000;
var app = express();
// This can be found from the service accounts tab in your Firebase app settings
var serviceAccount = require('./service-account-key.json') || JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Sets the document title
// See https://stackoverflow.com/a/54356269/6782707 for more info
app.set('title', 'StudyBuddy API');

// Adds the X-Response-Time header to indicate how long a request took
// See https://github.com/expressjs/response-time for more info
app.use(responseTime());

// Add a favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Initialise a Firebase Admin SDK app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://studybuddy-e5f46.firebaseio.com'
});

/**
 * Send a JSON error payload
 * @param {any} error The error payload
 * @param {Response} res The response payload
 */
function throwJsonError(error, res) {
  return res.json({
    error: error
  });
}

require('./routes/user')(app, admin, throwJsonError);
require('./routes/uptime')(app);
require('./routes/list')(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
