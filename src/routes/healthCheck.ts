import express from 'express';
import { healthCheck } from '../controllers/healthCheck';
//TODO: Implement more complex health check logic

const router = express.Router();

router.get('/', healthCheck);

export default router;
