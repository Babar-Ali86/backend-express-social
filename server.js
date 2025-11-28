import express from 'express';
// import cors from 'cors';
import userRoute from './routes/api/userRouter.js';

const app = express();
const Port = 3000;
// process.env.TZ = 'Asia/Karachi';

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form-data (if you use forms)

// app.use(cors());

app.use('/api', userRoute);

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
  console.log(`Server Running on: http://localhost:${Port}`);
});
