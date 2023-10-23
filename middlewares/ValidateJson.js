const ApiError = require('../utils/ApiError')
const Lang = require('../utils/Lang')
const validarJSON = (err, req, res, next) => {
    // This check makes sure this is a JSON parsing issue, but it might be
    // coming from any middleware, not just body-parser:

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json(new ApiError({ clientErrorMessage: Lang.INVALID_JSON, debugErrorMessage: Lang.INVALID_JSON })); // Bad request
    }

    next();
}
module.exports = validarJSON;