import {
  addUser,
  getUser,
  getUsers,
  updateUser,
} from '../../controller/userController.js';
import express from 'express';

const router = express.Router();

// =====================================

router.route('/users').get(getUsers).post(addUser);

router.route('/users/:id').get(getUser).put(updateUser);

export default router;
    