const db = require('../db')
const queries = require('../db/queries')
const bcrypt = require('bcrypt')
const salt = 5

const registerUser = async (data) => {
    const encryptedPassword = await bcrypt.hash(data.password, salt)
    const payload = [data.email, encryptedPassword, data.first_name, data.last_name]
    return db.any(queries.registerNewUser, payload)
}

const getUser = (email, password) => db.any(queries.loginUser, [email, password])

const reportAnIncident = (data) => {
    const payload = [data.client_id, data.incident_desc, data.city, data.country, data.weather_report]
    return db.any(queries.reportIncident, payload)
}

const getIncident = () => db.any(queries.getIncidents)

const getUserIncident = (id) => db.any(queries.getUserIncident, [id])

module.exports = {
    registerUser,
    reportAnIncident,
    getIncident,
    getUser,
    getUserIncident
}