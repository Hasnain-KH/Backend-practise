import express from "express";

const router = express.Router();


let myusers = [
    {
        id: 1,
        name: "ali",
        email: "ali@example.com"
    },
    {
        id: 2,
        name: "ahmed",
        email: "ahmed@example.com"
    }
];


//all users
router.get('/users', (_req, res) => {
    res.status(200).send({ status: '200', message: 'Users fetched successfully', data: myusers });
});

//By Specific ID
router.get('/users/:id', (req, res) => {
    const userID = Number(req.params.id);

    const user = myusers.find((u) => userID === u.id);
    if (!user) {
        return res.status(404).send({
            status: '404',
            message: 'User not found'
        });
    }
    res.status(200).send({
        status: '200',
        message: 'User fetched successfully',
        data: user
    });
})



router.post('/users', (req, res) => {
    const { name, email } = req.body;


    if (!name || !email) {
        return res.status(400).send({
            status: 400,
            message: 'Name and email are required'

        })
    }

    if (!email.endsWith("@gmail.com")) {
        return res.status(400).send({
            status: 400,
            message: 'Email must be a valid Gmail address'
        });
    }



    const user = {
        ...req.body,
        id: myusers.length + 1
    }

    myusers.push(user);
    res.status(201).send({
        status: '201',
        message: 'User created successfully',
        data: user
    });
})


router.delete('/users/:id', (req, res) => {
    const userID = Number(req.params.id);
    const userIndex = myusers.findIndex((usser) => userID === usser.id);
    if (userIndex === -1) {
        return res.status(404).send({ status: 404, message: 'User not found' });
    }
    myusers.splice(userIndex, 1);
    res.status(200).send({ status: 200, message: 'User deleted successfully' });
})


export default router;