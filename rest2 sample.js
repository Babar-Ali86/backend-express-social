// =====================================
// EXPRESS REST API WITH CHANGE LOG
// Shows all changes on /changes route
// No MongoDB / No Mongoose
// =====================================

const express = require("express");
const app = express();

app.use(express.json());

// Fake database
let users = [
    { id: 1, name: "Ali", email: "ali@gmail.com" },
    { id: 2, name: "Sara", email: "sara@gmail.com" }
];

// Change log array
let changeLog = [];


// =====================================
// 🟦 GET ALL USERS
// =====================================
app.get("/users", (req, res) => {
    res.json(users);
});


// =====================================
// 🟦 GET USER BY ID
// =====================================
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
});


// =====================================
// 🟩 POST - CREATE NEW USER
// =====================================
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    // Save change in log
    changeLog.push({
        action: "CREATE",
        user: newUser,
        time: new Date()
    });

    res.status(201).json(newUser);
});


// =====================================
// 🟧 PUT - UPDATE USER
// =====================================
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const oldUser = { ...user }; // backup old

    user.name = req.body.name;
    user.email = req.body.email;

    // Save change log
    changeLog.push({
        action: "UPDATE",
        userBefore: oldUser,
        userAfter: user,
        time: new Date()
    });

    res.json({ message: "User updated", user });
});


// =====================================
// 🟥 DELETE USER
// =====================================
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove user
    users = users.filter(u => u.id !== id);

    // Save delete log
    changeLog.push({
        action: "DELETE",
        deletedUser: user,
        time: new Date()
    });

    res.json({ message: "User deleted" });
});


// =====================================
// 🟨 NEW ROUTE: SHOW ALL CHANGES
// =====================================
app.get("/changes", (req, res) => {
    res.json(changeLog);
});


// =====================================
// START SERVER
// =====================================
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
