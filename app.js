var express = require('express');
var admin = require('firebase-admin');
var port = process.env.PORT || 3000;
var app = express();
// This can be found from the service accounts tab in your Firebase app settings
var serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT || require('./service-account-key.json');

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
  console.log(`Example app listening on port ${port}!`);
});
