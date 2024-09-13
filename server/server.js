const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"], // port that vite services run 
}

app.use(cors(corsOptions));

// Route for backend api
app.get("/api", (req, res) => {
    // send data from backend api to frontend to fetch
    res.json({blood_types: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]}); // sends responce that contains the array of blood types
});

// access app instance and ensure app is running on port 8080
// localhost:8080/api
app.listen(8080, () => {
    console.log("Server started on port 8080"); 
})