import {
  addPost,
  getPost,
  getPosts,
  updatePost,
  Delpost,
} from '../../controller/postController.js';
import express from 'express';

const router = express.Router();

// =====================================

router.route('/posts').get(getPosts).post(addPost);

router.route('/posts/:id').get(getPost).put(updatePost).delete(Delpost);

export default router;
