const { products } = require('../database/database');
const CategorieService = require('./CategorieService');
class ProductService {
    static getProducts() {
        return products;
    }

    static getProductBySku(sku) {
        return products.find(p => p.sku === sku);
    }
    static getProductByName(productName) {
        return products.find(p => p.productName.includes(productName));
    }
    static createProduct(product) {
        products.push(product);
        return product;
    }

    static updateProduct(updateProduct) {
        const productIndex = products.findIndex(p => p.sku === updateProduct.sku);
        products[productIndex] = updateProduct;
        return updateProduct;
    }

    static deleteProduct(sku) {
        const productIndex = products.findIndex(p => p.sku === sku);
        products.splice(productIndex, 1);
    }
    static exportProductToCSV() {
        const products = ProductService.getProducts();
        let productsToExport = [];
        let structure = {
            sku: "",
            productName: "",
            productDescription: "",
            productPrice: "",
            productCategory: "",
            categoryName: "",
            categoryDescription: ""
        }
        products.forEach(product => {
            let productToExport = { ...structure };
            productToExport.sku = product.sku;
            productToExport.productName = product.productName;
            productToExport.productDescription = product.productDescription;
            productToExport.productPrice = product.productPrice;
            productToExport.productCategory = product.productCategory;
            let categorie = CategorieService.getCategoryByshortName(product.productCategory);
            productToExport.categoryName = categorie.categorieName;
            productToExport.categoryDescription = categorie.description;
            productsToExport.push(productToExport);
        })
        return productsToExport;

    }
}

module.exports = ProductService;