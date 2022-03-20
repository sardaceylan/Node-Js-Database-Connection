// const connection = require("../utility/database");

// module.exports = class Category {
//     constructor(name, description) {
//         this.id = (categories.length + 1).toString();
//         this.name = name;
//         this.description = description;
//     }

//     saveCategory() {
//         return connection.execute("INSERT INTO CATEGORIES(name, description) VALUES(?,?)", [this.name, this.description]);
//     }

//     static getAll() {
//         return connection.execute("SELECT * FROM CATEGORIES");
//     }

//     static getById(id) {
//         return connection.execute("SELECT * FROM CATEGORIES WHERE id=?", [id]);
//     }

//     static update(category) {
//         return connection.execute("UPDATE CATEGORIES SET CATEGORIES.name=?,CATEGORIES.description=?", [category.name, category.description]);
//     }

//     static deleteById(id) {
//         return connection.execute("DELETE FROM CATEGORIES WHERE id=?", [id]);
//     }
// }

const Sequelize = require("sequelize");
const sequelize = require("../utility/database");

const Category = sequelize.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Category;
