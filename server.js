import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
<<<<<<< HEAD
=======

>>>>>>> 5a4ac8940849df7629872d9e1b3e3745aa4332cb
import userRoute from './routes/api/userRouter.js';
import postRoute from './routes/api/postsRouter.js';
import env from 'dotenv';

env.config();

dotenv.config();
const app = express();
<<<<<<< HEAD
const Port = process.env.PORT || 3000;
=======
const Port =  process.env.PORT || 3000;
>>>>>>> 5a4ac8940849df7629872d9e1b3e3745aa4332cb
// process.env.TZ = 'Asia/Karachi';



app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form-data (if you use forms)
app.use(cors());

<<<<<<< HEAD
app.use('/api', userRoute, postRoute);
=======
app.use(cors());

app.use('/api', userRoute);
>>>>>>> 5a4ac8940849df7629872d9e1b3e3745aa4332cb

// app.post('/api/user', (req, res) => {
//   const { name, email } = req.body;
//   const q = 'insert into users (name , email) values (  ? , ?)';
//   db.query(q, [name, email], (err, data) => {
//     if (err) throw err;
//     return res.json('User add Success fully');
//   });
// });

// app.delete('/api/user/:id', (req, res) => {
//   const userId = req.params.id;
//   db.query('delete from users where id = ?', [userId], (err, data) => {
//     if (err) throw err;
//     return res.json('User Delected Successfully');
//   });
// });

app.listen(Port, () => {
  console.log(`Server Running on: http://localhost:${Port}/api/users`);
});
