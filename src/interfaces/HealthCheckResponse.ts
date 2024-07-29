export type HealthCheckResponse = {
  uptime: number;
  message: string | Error;
  timestamp: number;
};
