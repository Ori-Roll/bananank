import express from 'express';
import { notFound, errorHandler } from './errorMiddleware';

const router = express.Router();

router.use(notFound, errorHandler);

export default router;
