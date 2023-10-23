const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../../utils/ValidatorMiddleware');
const { secureAsync } = require('../../middlewares/ErrorValidator').getErrorInstance();
const AuthController = require('../../controllers/AuthController');
const Lang = require('../../utils/Lang');

const router = Router();

router.get('/login', (req, res, next) => {
    res.status(200).render('portal/login/auth');
});
router.get('/register', (req, res, next) => {
    res.status(200).render('portal/login/register');
});

module.exports = router; 