const express = require("express");
const todos = require("./api/todo");
const cors = require("cors");
const Auth = require("./api/auth");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
// Connect Database

app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api/todos", todos);
app.use("/api/auth", Auth);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
