import db from '../config/db.js';

// =====================================
// 🟦 GET ALL USERS
// =====================================

export const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users LIMIT 1000');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================================
// 🟦 GET User by param
// =====================================

export const getUser = async (req, res) => {
  // const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM users where id = ? ;', [
      req.params.id,
    ]);
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
      ],
    );
    res.json({
      message: 'User Added Succesfully',
      id: result.insertId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================================
// 🟧 PUT - UPDATE USER
// =====================================

export const updateUser = async (req, res) => {
  // const id = req.params.id;
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

  const update_at = new Date();

  try {
    await db.query(
      'UPDATE users SET FirstName = ?, LastName =?, City=?, Country=?, Email=?,PhoneNo=?, Password=?, UserName=?,updated_at = ? where id = ?',
      [
        FirstName,
        LastName,
        City,
        Country,
        Email,
        PhoneNo,
        Password,
        UserName,
        update_at,
        req.params.id,
      ],
    );
    res.json({ message: 'user Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// =====================================
// 🟦 GET User by param
// =====================================

export const DelUser = async (req, res) => {
  // const { id } = req.params;
  try {
     await db.query('Delete FROM users where id = ? ;', [
      req.params.id,
    ]);
    // res.json(`UserDeleted Succssfuly ${req.params.id}`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};