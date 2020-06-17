require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        success: 1,
        message: "This is rest apis working"
    });
})

app.listen(process.env.PORT, () =>{
    console.log("Server up and running on PORT ", process.env.PORT);
});