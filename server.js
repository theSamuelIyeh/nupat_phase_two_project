if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");
const indexRouter = require("./routes/indexRoute");
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/api/v1/index", indexRouter);
app.use("/api/v1", userRouter);


app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
