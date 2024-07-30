import express from 'express';

const router = express.Router();

const mockUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

router.get('/', (req, res) => {
  res.send({ users: mockUsers });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = mockUsers.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  res.send({ user: user });
});

export default router;
