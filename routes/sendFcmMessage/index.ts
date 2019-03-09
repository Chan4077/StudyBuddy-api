import { Router } from 'express';
import { firebaseApp } from '../../firebase-app';
import { messaging } from 'firebase-admin';
import { Utils } from '../utils';

export const sendFcmMessageRoutes = Router();

sendFcmMessageRoutes.post('/', (req, res) => {
  let missingKeys = true;
  if (req.body) {
    for (const validKey of ['token', 'topic', 'condition']) {
      console.log('Current key:', validKey);
      console.log('Does body have the key?', req.body.hasOwnProperty(validKey));
      if (req.body.hasOwnProperty(validKey) && missingKeys) {
        missingKeys = false;
      }
    }
  }
  console.log('Missing keys?', missingKeys);
  if (!missingKeys) {
    firebaseApp.messaging()
      .send(req.body)
      .then(result => {
        res.status(202)
          .send({
            id: result
          });
      })
      .catch(error => {
        Utils.sendJsonError(res, error);
      });
  } else {
    Utils.sendJsonError(res, {
      errorCode: 'missingRequiredKeys',
      message: 'Please specify a valid registration token/topic/condition!'
    });
  }
})
