import { Router } from 'express';
import { NOTIFICATION_REQUEST_VALID_KEYS, NOTIFICATION_REQUEST_REQUIRED_KEYS } from './interfaces';
import { Utils } from '../utils';
import { firebaseApp } from '../../firebase-app';

export const sendNotificationRequestRoutes = Router();

sendNotificationRequestRoutes.post('/', (req, res) => {
  let invalidKeys = [];
  let missingRequiredKeys = [];
  if (req.body) {
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        if (!NOTIFICATION_REQUEST_VALID_KEYS.includes(key)) {
          console.log('Invalid key:', key);
          invalidKeys.push(key);
        }
      }
    }
  } else if (req.params) {
    for (const key in req.params) {
      if (req.body.hasOwnProperty(key)) {
        if (!NOTIFICATION_REQUEST_VALID_KEYS.includes(key)) {
          console.log('Invalid key:', key);
          invalidKeys.push(key);
        }
      }
    }
  }
  for (const key of NOTIFICATION_REQUEST_REQUIRED_KEYS) {
    console.log(key);
    if (!req.body.hasOwnProperty(key)) {
      console.log('Missing required key:', key);
      missingRequiredKeys.push(key);
    }
  }
  if (missingRequiredKeys.length > 0) {
    Utils.sendJsonError(res, {
      errorCode: 'missingRequiredKeys',
      message: 'The request body specified does not contain the list of required keys (see the missingRequiredKeys array for more info on which keys are needed).',
      missingRequiredKeys: missingRequiredKeys,
      validKeys: NOTIFICATION_REQUEST_VALID_KEYS,
      keys: Object.keys(req.body)
    }, 400);
  } else if (invalidKeys.length > 0) {
    Utils.sendJsonError(res, {
      errorCode: 'invalidKeys',
      message: 'Invalid keys specified (see the invalidKeys array for more info on which keys specified are invalid).',
      invalidKeys: invalidKeys,
      validKeys: NOTIFICATION_REQUEST_VALID_KEYS,
      keys: Object.keys(req.body)
    }, 400);
  } else {
    firebaseApp.firestore()
      .collection('notificationRequests')
      .add(req.body)
      .then(result => res.json({
        id: result.id
      }))
      .catch(error => Utils.sendJsonError(res, error));
  }
});
