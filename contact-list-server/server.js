const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
app.use(cors());
app.use(express.json());
app.use("/user",userRoute);

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});


app.get('/ping', (req,res)=>{
  res.send("Pong")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(` Your server is running on port ${PORT}`)
);
