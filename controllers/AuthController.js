const bcryptjs = require('bcryptjs');
const ApiError = require('../utils/ApiError');
const { generateJWT } = require('../utils/GenerateJWT');
const Lang = require('../utils/Lang');
const { users } = require('../database/database');
const Clone = require('../utils/ObjectCopy')
class AuthController {
    static login = async (req, res) => {
        const { username, password } = req.body;
        const user = users.find((u) => u.username === username && u.password === password);
        if (!user) {
            return res.status(401).json(new ApiError({ clientErrorMessage: Lang.INVALID_USER_PASS, debugErrorMessage: Lang.INVALID_USER_PASS }));
        }
        const token = await generateJWT(user.id);
        const copyUser = Clone.clone(user);
        delete copyUser.password;
        return res.status(200).json({
            user: copyUser, token
        })

    }
    static register = async (req, res) => {
        // const { name, email, password } = req.body;
        // const user = new User({ name, email, password });
        // // Buscamos el usuario por el correo:
        // const validate = await User.findOne({ email });
        // if(validate){
        //     return res.status(400).json(new ApiError({ clientErrorMessage: Lang.USER_EXISTS, debugErrorMessage: Lang.USER_EXISTS }))
        // }
        // //Encriptar la contraseña
        // const salt = bcryptjs.genSaltSync();
        // user.password = bcryptjs.hashSync(password, salt);
        // //Guardar en la base de datos
        // await user.save();
        // delete user.password;
        // // generar JWT
        // //const uid = ObjectId(user._id);
        // const token = await generateJWT(user._id.toString());
        // res.status(201).json({
        //     user, token
        // })
        return res.stauts(201).json({
            msg: "ToOK"
        })
    }
}

module.exports = AuthController;