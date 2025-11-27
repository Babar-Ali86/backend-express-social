import express from 'express';
import db from '../../config/db.js';

const router = express.Router();

// =====================================
// 🟦 GET ALL USERS
// =====================================
router.get('/', (req, res) => {
  db.query('select * from users limit 50', (err, data) => {
    if (err) throw res.json(err);
    return res.send(data);
  });
});
export default router;
