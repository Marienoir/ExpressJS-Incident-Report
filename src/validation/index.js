const Joi = require('joi')

const createUserSchema = {
    schema: Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }),
    message: "Error creating a user"
}

const logUserSchema = {
    schema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }),
    message: "Error logging a user"
}

const reportSchema = {
    schema: Joi.object().keys({
        client_id: Joi.number().required(),
        incident_desc: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required()
    }),
    message: "Error reporting an incident"
}

module.exports = {
    createUserSchema,
    logUserSchema,
    reportSchema
}