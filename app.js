const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "pug");
app.set("views", "./views");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const errorController = require("./controllers/errors");
const sequelize = require("./utility/database");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
