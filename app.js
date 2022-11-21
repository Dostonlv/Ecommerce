const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose");
const expressValidator = require("express-validator")
// import routes
const authRoutes = require("./routes/auth");
//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(expressValidator())


//routes middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
