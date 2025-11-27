import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import user from './routes/api/user.js';
import users from './routes/api/users.js';
import posts from './routes/api/posts.js';
import post from './routes/api/post.js';

const app = express();

const Port = 3000;

app.use(express.json());
app.use(cors());

//define routes
app.use('/api/user', user);
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/post', post);

app.post('/api/user', (req, res) => {
  const { name, email } = req.body;
  const q = 'insert into users (name , email) values (  ? , ?)';
  db.query(q, [name, email], (err, data) => {
    if (err) throw err;
    return res.json('User add Success fully');
  });
});

app.delete('/api/user/:id', (req, res) => {
  const userId = req.params.id;

  db.query('delete from users where id = ?', [userId], (err, data) => {
    if (err) throw err;
    return res.json('User Delected Successfully');
  });
});

app.listen(Port, () => {
  console.log(`Server Running on: http://localhost:${Port}`);
});
