import { addUser, getUser, getUsers } from '../../controller/userController.js';
import express from 'express';

const router = express.Router();

// =====================================

router.route('/users').get(getUsers).post(addUser);

router.route('/users/:id').get(getUser);

export default router;
