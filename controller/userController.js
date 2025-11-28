import db from '../config/db.js';

// =====================================
// 🟦 GET ALL USERS
// =====================================

export const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users LIMIT 50');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================================
// 🟦 GET User by param
// =====================================

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM users where id = ? ;', [id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================================
// 🟩 POST - CREATE NEW USER
// =====================================

export const addUser = async (req, res) => {
  const created_At = new Date();
  const {
    FirstName,
    LastName,
    City,
    Country,
    Email,
    PhoneNo,
    Password,
    UserName,
  } = req.body;
  try {
    const [result] = await db.query(
      'insert into users (FirstName, LastName,City,Country,Email,PhoneNo,Password,UserName,created_At) values (?,?,?,?,?,?,?,?,?)',
      [
        FirstName,
        LastName,
        City,
        Country,
        Email,
        PhoneNo,
        Password,
        UserName,
        created_At,
      ]
    );
    res.json({
      message: 'User Added Succesfully',
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

