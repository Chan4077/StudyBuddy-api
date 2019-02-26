import { Router } from 'express';

export const uptimeRoutes = Router();

uptimeRoutes.get('/', (req, res) => {
  res.json(process.uptime());
});
