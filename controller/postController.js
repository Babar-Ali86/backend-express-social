import db from '../config/db.js';

// =====================================
// 🟦 GET ALL Posts
// =====================================

export const getPosts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================================
// 🟦 GET User by param
// =====================================

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await db.query('SELECT * FROM posts where id = ? ;', [id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =====================================
// 🟩 POST - CREATE NEW USER
// =====================================

export const addPost = async (req, res) => {
  const created_At = new Date();
  const {
    userID,
    created_at,
    PostTitle,
    PostDescrip,
    Likes,
    Comment,
    Share,
    HashTags,
  } = req.body;
  try {
    const [result] = await db.query(
      'insert into posts (FirstName, LastName,City,Country,Email,PhoneNo,Password,UserName) values (?,?,?,?,?,?,?,?,?)',
      [
        userID,
        created_at,
        PostTitle,
        PostDescrip,
        Likes,
        Comment,
        Share,
        HashTags,
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

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const {
    userID,
    created_at,
    PostTitle,
    PostDescrip,
    Likes,
    Comment,
    Share,
    HashTags,
  } = req.body;

  try {
    await db.query(
      'UPDATE posts SET userID = ?, created_at =?, PostTitle=?, PostDescrip=?, Likes=?,Comment=?, Share=?, HashTags=? where id = ?',
      [
        userID,
        created_at,
        PostTitle,
        PostDescrip,
        Likes,
        Comment,
        Share,
        HashTags,
        id,
      ],
    );
    res.json({ message: 'user Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  s;
};

// =====================================
// 🟥 DELETE - Delete USER
// =====================================

export const Delpost = async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('Delete FROM posts where id = ? ;', [id]);
    // res.json(`UserDeleted Succssfuly ${req.params.id}`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
