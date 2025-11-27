import express from 'express';
import db from '../../config/db.js';

const router = express.Router();

// =====================================
// 🟦 GET USER BY ID
// =====================================
router.get('/:id', (req, res) => {
  const para = req.params.id;
  db.query('select * from users where id = ?', [para], (err, data) => {
    if (err) throw res.json(err);
    return res.json(data);
  });
});

export default router;
