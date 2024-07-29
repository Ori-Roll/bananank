import express from 'express';
import healthCheck from './healthCheck';
import users from './users';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Bananank! (Root API!)' });
});

router.use('/health', healthCheck);
router.use('/users', users);

export default router;
