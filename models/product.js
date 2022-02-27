const connection = require('../utility/database');

module.exports = class Product {

    constructor(name, price, imageUrl, description, categoryid) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct() {
        return connection.execute('INSERT INTO PRODUCTS (name, price, imageUrl, description) VALUES (?, ?, ?, ?)', [this.name, this.price, this.imageUrl, this.description]);
    }

    static getAll() {
        return connection.execute('SELECT * FROM PRODUCTS');
    }

    static getById(id) {
        return connection.execute("SELECT * FROM PRODUCTS WHERE PRODUCTS.id=?", [id]);
    }

    static getProductsByCategoryId(categoryid) {
    }

    static Update(product) {
        return connection.execute("UPDATE PRODUCTS SET PRODUCTS.name=?,PRODUCTS.price=?,PRODUCTS.imageUrl=?,PRODUCTS.description=? WHERE PRODUCTS.id=?", [product.name, product.price, product.imageUrl, product.description, product.id])
    }

    
    
    static DeleteById(id) {
    }

}
