const cors = require("cors");
const express = require("express");

require("dotenv").config();

const { connect } = require("./common/config/db");
const { userRouter } = require("./routes/userRoute");
const { authRouter } = require("./routes/authRoute");
const { categoryRouter } = require("./routes/categoryRoute");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

connect();

app.use(authRouter);
app.use(userRouter);
app.use(categoryRouter);

app.get("/", async (req, res) => {
  res.send("Hello world !");
});

app.listen(port, () => {
  console.log("Server is running at: http://localhost:" + port);
});
