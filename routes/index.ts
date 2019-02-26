import { Router } from 'express';
import { uptimeRoutes } from './uptime';
import { userRoutes } from './user';

export const routes = Router();

routes.use('/uptime', uptimeRoutes);
routes.use('/user', userRoutes);
