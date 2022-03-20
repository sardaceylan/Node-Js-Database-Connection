// const connection = require('../utility/database');

// module.exports = class Product {

//     constructor(name, price, imageUrl, description, categoryid) {
//         this.name = name;
//         this.price = price;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.categoryid = categoryid;
//     }

//     saveProduct() {
//         return connection.execute('INSERT INTO PRODUCTS (name, price, imageUrl, description, categoryid) VALUES (?, ?, ?, ?, ?)', [this.name, this.price, this.imageUrl, this.description, this.categoryid]);
//     }

//     static getAll() {
//         return connection.execute('SELECT * FROM PRODUCTS');
//     }

//     static getById(id) {
//         return connection.execute("SELECT * FROM PRODUCTS WHERE PRODUCTS.id=?", [id]);
//     }

//     static getProductsByCategoryId(categoryid) {
//     }

//     static Update(product) {
//         return connection.execute("UPDATE PRODUCTS SET PRODUCTS.name=?,PRODUCTS.price=?,PRODUCTS.imageUrl=?,PRODUCTS.description=?, PRODUCTS.categoryid=? WHERE PRODUCTS.id=?", [product.name, product.price, product.imageUrl, product.description, product.categoryid, product.id])
//     }

//     static DeleteById(id) {
//         return connection.execute("DELETE FROM PRODUCTS WHERE PRODUCTS.id=?", [id]);
//     }

// }

const Sequelize = require("sequelize");
const sequelize = require("../utility/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Product;
