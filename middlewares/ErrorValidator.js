const ApiError = require('../utils/ApiError');
//const Database = require('../database/config').getPrismaInstance();
class ErrorMiddleware {
    /**
     * Middleware to try and catch all errors in my endpoints
     * @param {*} endpoint 
     * @returns 
     */
    constructor() {
        //this.prisma = Database;
        ErrorMiddleware.instance = null;
    }


    secureAsync(endpoint) {
        return async (req, res, next) => {
            try {
                await endpoint(req, res, next);
            } catch (error) {
                // console.log(error)
                next(error);
                //res.send(new ApiError(error.message, error.statusCode));
            }
        }
    }
    /**
     * Send the error to the client
     * @param {*} error 
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     */
    errorResponder(error, request, response, next) {
        response.status(500).json(new ApiError({ debugErrorMessage: error.message }));
        next(error);
    }
    /**
     * Record the error in the database
     * @param {*} error 
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     */
    errorLogger(error, request, response, next) {
        try {
            next(error);
        } catch (error) {
            console.log(error);
            console.log('Error in the logger module')
        }

    }
    static getErrorInstance() {
        if (!ErrorMiddleware.instance) {
            ErrorMiddleware.instance = new ErrorMiddleware();
        }
        return ErrorMiddleware.instance;
    }
}

module.exports = ErrorMiddleware;