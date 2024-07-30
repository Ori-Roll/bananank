import { HealthCheckResponse } from '../interfaces/HealthCheckResponse';
import { Request, Response } from 'express';

export const healthCheck = async (req: Request, res: Response) => {
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
};
