import express from 'express';
import { HealthCheckResponse } from '../interfaces/HealthCheckResponse';

//TODO: Implement more complex health check logic

const router = express.Router();

router.get('/', (req, res) => {
  const healthcheck: HealthCheckResponse = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (e: unknown) {
    if (e instanceof Error) {
      healthcheck.message = e;
    }
    res.status(503).send(healthcheck);
  }
});

export default router;
