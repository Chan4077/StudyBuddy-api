import { Router } from 'express';
import { uptimeRoutes } from './uptime';
import { userRoutes } from './user';
import { sendFcmMessageRoutes } from './sendFcmMessage';

export const routes = Router();

routes.use('/uptime', uptimeRoutes);
routes.use('/user', userRoutes);
routes.use(['/send-fcm-message', '/send-notification-request'], sendFcmMessageRoutes);
