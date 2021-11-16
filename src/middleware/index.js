const { getUserIncident } = require('../services')

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

const validateData =(data, type) => async(req,res,next) =>{
    try {
        const getType = {
            body: req.body,
            params: req.params,
            query: req.query,
            headers: req.headers
        }
        const options = {
            language:{key: "{{key}}"}
        }
        const result = getType[type]
        const isValid = await data.schema.validate(result,options)

        if (!isValid.error){
            req[type] = isValid.value;
            return next()
        }
        const {message} = isValid.error.details[0]
        return res.status(400).json({
            status:"Error",
            message:  message.replace(/[\"]/gi,""),
            error: data.message
        })
    } catch (error) {
        return next(error)
    }
}
module.exports = { validateUserById, validateData }