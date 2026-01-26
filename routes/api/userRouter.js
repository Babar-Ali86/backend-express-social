import {
  addUser,
  getUser,
  getUsers,
  updateUser,
<<<<<<< HEAD
  DelUser
=======
  delUser
>>>>>>> 5a4ac8940849df7629872d9e1b3e3745aa4332cb
} from '../../controller/userController.js';
import express from 'express';

const router = express.Router();

// =====================================

router.route('/users').get(getUsers).post(addUser);

<<<<<<< HEAD
router.route('/users/:id').get(getUser).put(updateUser).delete(DelUser);
=======
router.route('/users/:id').get(getUser).put(updateUser).delete(delUser);;
>>>>>>> 5a4ac8940849df7629872d9e1b3e3745aa4332cb

export default router;
    