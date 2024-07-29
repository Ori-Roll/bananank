import express from 'express';
import healthCheck from './healthCheck';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Bananank! (Root API!)' });
});

router.use('/health', healthCheck);

export default router;
