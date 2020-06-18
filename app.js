require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const userRouter = require("./api/users/user.router");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        success: 1,
        message: "This is rest apis working"
    });
})

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () =>{
    console.log("Server up and running on PORT ", process.env.PORT);
});