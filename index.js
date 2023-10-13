const express = require("express");
const app = express();
const port = 3000;

// enable cors express
const cors = require("cors");
app.use(cors());

app.get("/api/v1/messages", (req, res) => {
    res.json({
        status: "success",
        message: "GET all messages",
        data: [],
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
