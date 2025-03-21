const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Route đơn giản
app.get("/", (req, res) => {
    res.send("Hello Express.js Backend!");
});

// Lắng nghe cổng
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});