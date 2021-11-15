const {
    getUser,
    getUserIncident
} = require('../services')
//const bcrypt = require('bcrypt')

const validateUser = async (req, res, next) => {
    const {
        body: {
            email,
            password
        }
    } = req
    const user = await getUser(email, password)
    // const isValid = await bcrypt.compare(password, encryptedPassword)
    // console.log(isValid);
    //console.log(password, encryptedPassword, user);
    if (user.length < 1) {
        return res.status(404).json({
            status: "Not Found",
            message: "Invalid email or password"
        })
    }
    return next()
}

const validateUserById = async (req, res, next) => {
    const {
        params: {
            id
        }
    } = req
    const user = await getUserIncident(id)

    if (user.length < 1) {
        return res.status(404).json({
            status: "Not Found",
            message: "User Not Found"
        })
    }
    req.user = user
    req.id = id
    return next()
}

module.exports = {
    validateUser,
    validateUserById
}