import { Request, Response } from 'express';
import { getAllUsers, getUserById } from '../services/users';

// const mockUsers = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
// ];

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.send({ users: users });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: 'Missing id' });
  }

  const user = getUserById(parseInt(id));

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  res.send({ user: user });
};
