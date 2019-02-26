import { Router } from 'express';

import { firebaseApp } from '../../firebase-app';
import { Utils } from '../utils';

const auth = firebaseApp.auth();
export const userRoutes = Router();

userRoutes.route('/')
  .get((req, res) => {
    if (req.query.id) {
      auth.getUser(req.query.id)
        .then((result) => {
          res.send(result.toJSON());
        })
        .catch((error) => Utils.sendJsonError(res, error));
    } else if (req.query.email) {
      auth.getUserByEmail(req.query.email)
        .then((result) => {
          res.send(result.toJSON());
        })
        .catch((error) => Utils.sendJsonError(res, error));
    } else if (req.query.phoneNumber || req.query.number) {
      auth.getUserByPhoneNumber(req.query.phoneNumber || req.query.number)
        .then((result) => {
          res.send(result.toJSON);
        })
        .catch((error) => Utils.sendJsonError(res, error));
    } else {
      Utils.sendJsonError(res, {
        message: 'Please specify a user ID, email or phone number!',
      });
    }
  });
