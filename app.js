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

const Category = require("./models/category");
const Product = require("./models/product");
const User = require("./models/user");

// Product.hasOne(Category);

Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
  },
});
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    User.findByPk(1)
      .then((user) => {
        if (!user) {
          return User.create({
            name: "sardaceylan",
            email: "ardaceylan@yahoo.com",
          });
        }
        return user;
      })
      .then((user) => {
        Category.count().then((count) => {
          if (count === 0) {
            Category.bulkCreate([
              { name: "Telefon", description: "telefon" },
              { name: "Bilgisayar", description: "bilgisayar" },
              { name: "Elektronik", description: "elektronik" },
            ]);
          }
        });
      });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
// routes
app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
