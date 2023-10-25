const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../../utils/ValidatorMiddleware');
const { secureAsync } = require('../../middlewares/ErrorValidator').getErrorInstance();
const AuthController = require('../../controllers/AuthController');
const Lang = require('../../utils/Lang');

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).render('portal/index');
});

router.get('/profile', (req, res, next) => {
    res.status(200).render('profile/profile');
});

module.exports = router; 