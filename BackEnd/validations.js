const validEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

//password validation
const validPassword = (password) => {
    var validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (validRegex.test(password)) {
        return true;
    } else {
        return false;
    }
}

//mobile validation
const validUsername = (mobile) => {
    var validRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (validRegex.test(mobile)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {validEmail,validPassword,validUsername}