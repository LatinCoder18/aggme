const { users } = require('../database/database');
class UserService {
    static async findById(id){
        return users.find(user => user.id === id);
    }
}

module.exports = UserService;