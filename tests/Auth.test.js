const request = require('supertest');
const app = require('../config/server');


describe('Login de usuarios', () => {

    describe('POST /auth/login first user', () => {

        it('should return 400 when username is missing', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ password: '123123' });
            expect(res.status).toBe(400);
            expect(res.body.inputValidationErrors[0].param).toBe('username');
        });
        it('should return 400 when password is missing', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'admin' });
            expect(res.status).toBe(400);
            expect(res.body.inputValidationErrors[0].param).toBe('password');
        });
        it('should return 401 when email and password are incorrect', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'tester', password: 'wrongpassword' });
            expect(res.status).toBe(401);
            expect(res.body).toEqual({
                "clientErrorMessage": "Usuario / Password no son correctos",
                "debugErrorMessage": "Usuario / Password no son correctos"
            });
        });
        it('should return 200 with a token when email and password are correct', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'admin', password: '4321' });
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('user');
            expect(res.body).toHaveProperty('token');

        });
    });

    describe('POST /auth/login second user', () => {

        it('should return 400 when username is missing', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ password: '123123' });
            expect(res.status).toBe(400);
            expect(res.body.inputValidationErrors[0].param).toBe('username');
        });
        it('should return 400 when password is missing', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'admin' });
            expect(res.status).toBe(400);
            expect(res.body.inputValidationErrors[0].param).toBe('password');
        });
        it('should return 401 when email and password are incorrect', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'tester', password: 'wrongpassword' });
            expect(res.status).toBe(401);
            expect(res.body).toEqual({
                "clientErrorMessage": "Usuario / Password no son correctos",
                "debugErrorMessage": "Usuario / Password no son correctos"
            });
        });
        it('should return 200 with a token when email and password are correct', async () => {
            const res = await request(app)
                .post('/auth/login')
                .send({ username: 'user', password: '1234' });
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('user');
            expect(res.body).toHaveProperty('token');

        });
    });
});
