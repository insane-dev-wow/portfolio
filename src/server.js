// server.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


// Test API route
app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend is running successfully"
  });
});


// Example contact form API
// (stores data temporarily only)
// You can connect MongoDB later
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact received:");
  console.log({
    name,
    email,
    message
  });

  res.status(200).json({
    success: true,
    message: "Message received"
  });
});


// Serve React build files
app.use(
  express.static(
    path.join(__dirname, "../build")
  )
);


// React route fallback
app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../build/index.html"
    )
  );
});


const PORT = process.env.PORT || 3033;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});