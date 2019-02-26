import * as admin from 'firebase-admin';

// This can be found from the service accounts tab in your Firebase app settings
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT ?
  JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT) :
  './service-account-key.json';

/**
 * An instance of the default Firebase app
 */
export const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://studybuddy-e5f46.firebaseio.com',
});
