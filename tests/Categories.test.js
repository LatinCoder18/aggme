const request = require('supertest');
const app = require('../config/server');

describe('Categorias', () => {
    let category;
    beforeAll(async () => {
        const res = await request(app).
            post('/categories/addCategorie').send({
                "shortName": "TEST",
                "categorieName": "Vinos",
                "description": "Vinos Azulados!!"
            })
        category = res.body.category;
    });
    describe('POST /addCategorie', () => {
        test('Debe agregar una nueva categoría', async () => {
            const res = await request(app)
                .post('/categories/addCategorie')
                .send({
                    "shortName": "TEST2",
                    "categorieName": "Cervezas",
                    "description": "Cervezas Artesanales"
                });
    
            expect(res.statusCode).toEqual(201);
            expect(res.body.category.shortName).toEqual('TEST2');
        });
    });
    
    describe('GET /getCategorie/:shortName', () => {
        test('Debe obtener una categoría por su shortName', async () => {
            const res = await request(app)
                .get(`/categories/getCategorie/${category.shortName}`);
    
            expect(res.statusCode).toEqual(200);
            expect(res.body.category.shortName).toEqual(category.shortName);
        });
    });
    
    describe('GET /getCategories', () => {
        test('Debe obtener todas las categorías', async () => {
            const res = await request(app)
                .get('/categories/getCategories');
    
            expect(res.statusCode).toEqual(200);
            expect(res.body.categories.length).toBeGreaterThan(0);
        });
    });
    
    describe('PUT /updateCategorie', () => {
        test('Debe actualizar una categoría', async () => {
            const res = await request(app)
                .put('/categories/updateCategorie')
                .send({
                    "shortName": category.shortName,
                    "categorieName": "Vinos actualizados",
                    "description": "Nueva descripción"
                });
    
            expect(res.statusCode).toEqual(200);
            expect(res.body.category.categorieName).toEqual('Vinos actualizados');
        });
    });
    
    describe('DELETE /deleteCategorie/:shortName', () => {
        test('Debe eliminar una categoría por su shortName', async () => {
            const res = await request(app)
                .delete(`/categories/deleteCategorie/${category.shortName}`);
    
            expect(res.statusCode).toEqual(200);
        });
    });

})