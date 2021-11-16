const {
    registerUser,
    reportAnIncident,
    getIncident
} = require("../services")
const axios = require('axios')

const createUser = async (req, res, next) => {
    try {
        const { body } = req
        const [newUser] = await registerUser(body)
        res.status(201).json({
            status: "Created",
            message: "User Registered Successfully",
            data: newUser
        })
    } catch (error) {
        return next(error)
    }
}

const userLogin = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "User Login Successfully"
        })
    } catch (error) {
        return next(error)
    }
}

const incidentReport = async (req, res, next) => {
    try {
        const {body} = req
        const {city} = body
        const {data: weather_report} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`)
        
        body.weather_report = weather_report
        const data = await reportAnIncident(body)

        res.status(200).json({
            status: "Success",
            message: "Incident Reported Successfully",
            data
        })

    } catch (error) {
        return next(error)
    }
}

const getAllIncidents = async (req, res, next) => {
    try {
        const report = await getIncident()
        res.status(200).json({
            status: "Success",
            message: "All Incidents gotten Successfully",
            data: report
        })
    } catch (error) {
       return next(error)
    }
}

const getUserIncidents = async (req, res) => {
    try {
        const {user,id} = req

        res.status(200).json({
            status: 'Success',
            message: `User ${id} Incident reports fetched successfully`,
            data: user
        })
    } catch (error) {
       return next(error)
    }
}
module.exports = { createUser, userLogin, incidentReport, getAllIncidents, getUserIncidents }