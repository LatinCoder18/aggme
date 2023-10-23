const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../../utils/ValidatorMiddleware');
const { secureAsync } = require('../../middlewares/ErrorValidator').getErrorInstance();
const AuthController = require('../../controllers/AuthController');
const Lang = require('../../utils/Lang');

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).render('portal/index', {
        title: 'Error 404',
        message: 'La página que estás buscando no se ha encontrado.'
    });
});

module.exports = router; 