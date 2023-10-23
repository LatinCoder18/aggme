const request = require('supertest');
const app = require('../config/server');

describe('Productos', () => {
    let category;

    beforeAll(async () => {
        const response = await request(app).
            post('/categories/addCategorie').send({
                "shortName": "TEST",
                "categorieName": "Vinos",
                "description": "Vinos Azulados!!"
            })
        category = response.body.category

    });

    describe('POST /addProduct', () => {
        test('Debe agregar un nuevo producto', async () => {
            const res = await request(app)
                .post('/products/addProduct')
                .send({
                    sku: 'ABC',
                    productName: 'Producto ABC',
                    productDescription: 'Descripción del Producto ABC',
                    productPrice: 10.99,
                    productCategory: category.shortName
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body.product.sku).toEqual('ABC');
        });
    });

    describe('GET /getProductBySku/:sku', () => {
        test('Debe obtener un producto por su SKU', async () => {
            const res = await request(app)
                .get('/products/getProductBySku/ABC');

            expect(res.statusCode).toEqual(200);
            expect(res.body.product.sku).toEqual('ABC');
        });
    });

    describe('GET /getProducts', () => {
        test('Debe obtener todos los productos', async () => {
            const res = await request(app)
                .get('/products/getProducts');

            expect(res.statusCode).toEqual(200);
            expect(res.body.products.length).toBeGreaterThan(0);
        });
    });

    describe('PUT /updateProduct', () => {
        test('Debe actualizar un producto', async () => {
            const res = await request(app)
                .put('/products/updateProduct')
                .send({
                    sku: 'ABC',
                    productName: 'Producto ABC actualizado',
                    productDescription: 'Descripción del Producto ABC actualizada',
                    productPrice: 20.99,
                    productCategory: category.shortName
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body.product.productName).toEqual('Producto ABC actualizado');
        });
    });

    describe('DELETE /deleteProduct/:sku', () => {
        test('Debe eliminar un producto por su SKU', async () => {
            const res = await request(app)
                .delete('/products/deleteProduct/ABC');
            expect(res.statusCode).toEqual(200);
        });
    });
});