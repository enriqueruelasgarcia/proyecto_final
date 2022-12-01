/*const bycrypt = require('bycryptjs');
const helpers = {};


helpers.encryptPassword = async(password) => {
    const salt = await bycrypt.gentSalt(10);
    const hash = await bycrypt.hash(password, salt)
    return salt;
};
helpers.matchPassword = async(password, savePassword) => {
    try {
        await bycrypt.compare
    } catch (e) {
        console.log(e);
    }
};
module.exports = helpers;*/