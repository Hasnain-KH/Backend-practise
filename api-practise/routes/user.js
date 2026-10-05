import express from "express";

const router = express.Router();


let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
];


router.get('/users', (req, res) => {
    res.status(200).send({ status: 200, message: "Users fetched successfully", data: users });
});

export default router;
