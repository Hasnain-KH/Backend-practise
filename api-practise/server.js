import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

import userRouter from './routes/user.js';

app.use('/api', userRouter);


// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/users', (req, res) => {
//     res.send(users);
// });

// app.post('/users/', (req, res) => {

//     const { name, email } = req.body;

//     if (!name || !email || name.trim() === "" || email.trim() === "") {
//         return res.status(400).send("Name and Email are required");
//     }

//     if (!email.endsWith("@gmail.com")) {
//         return res.status(400).send("Email must be a valid Gmail address");
//     }

//     const newUser = { id: users.length + 1, ...req.body };

//     users.push(newUser);
//     res.send(`User ${newUser.name} with email ${newUser.email} added Successfully`);

// });


// app.delete('/users/:id', (req, res) => {
//     const userId = Number(req.params.id);
//     users = users.filter(user => user.id !== userId);
//     res.send(`User with ID ${userId} deleted successfully`);
// });

// app.put('/users/:id', (req, res) => {
//     const userId = Number(req.params.id);

//     const user = users.find(usser => usser.id === userId);

//     if (!user) {
//         return res.send("User not Found!");
//     }

//     user.name = req.body.name;
//     user.email = req.body.email;

//     res.send("User updated Successfully!");
// });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
