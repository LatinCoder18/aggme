const ApiError = require('../utils/ApiError');
const Lang = require('../utils/Lang');
const jwt = require('jsonwebtoken');
const User = require('../services/UserService');
class Authorize {
    static authorizeRol([...roles]) {
        return (req, res, next) => {
            if (roles.includes(req.user.role)) {
                next();
            } else {
                res.status(403).json(new ApiError({ clientErrorMessage: Lang.UNAUTHORIZED, debugErrorMessage: Lang.UNAUTHORIZED }));
            }
        };
    }
    static authorizeJWT = async (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(403).json(new ApiError({ clientErrorMessage: Lang.INVALID_TOKEN, debugErrorMessage: Lang.INVALID_TOKEN }));
        }
        try {
            const { uid } = jwt.verify(token, process.env.SECRET);
            const user = await User.findById(uid);
            if (!user) {
                return res.status(403).json(new ApiError({ clientErrorMessage: Lang.INVALID_TOKEN, debugErrorMessage: Lang.INVALID_TOKEN }));
            }
            req.uid = uid;
            req.user = user
            next();
        } catch (error) {
            return res.status(403).json(new ApiError({ clientErrorMessage: Lang.INVALID_TOKEN, debugErrorMessage: Lang.INVALID_TOKEN }));
        }
    }
}
module.exports = Authorize;