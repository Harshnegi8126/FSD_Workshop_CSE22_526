const express = require("express");
const app = express();

app.use(express.json());

let student = {
    id: 1,
    name: "Rohan",
    rollno: 20,
    email: "abc@google.com",
    course: "B.Tech"
};

// GET - Display
app.get("/student", (req, res) => {
    res.json(student);
});

// POST - Insert
app.post("/student", (req, res) => {
    student = req.body;

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

// PUT - Update
app.put("/student", (req, res) => {
    student = { ...student, ...req.body };

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE - Delete
app.delete("/student", (req, res) => {
    student = null;

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});