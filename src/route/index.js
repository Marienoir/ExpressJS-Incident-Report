const express = require('express')
const {createUserSchema, logUserSchema, reportSchema} = require('../validation')
const {
    createUser,
    userLogin,
    incidentReport,
    getAllIncidents,
    getUserIncidents
} = require('../controller')
const {
    validateUser,
    validateUserById,
    validateData
} = require('../middleware')
const router = express.Router()

router.post(
    "/register",
    validateData(createUserSchema, "body"),
    createUser)
router.post(
    "/login", 
    validateData(logUserSchema, "body"),
     userLogin)
router.post(
    "/report",
    validateData(reportSchema, "body"),
     incidentReport)
router.get("/incidents", getAllIncidents)
router.get("/incidents/:id", validateUserById, getUserIncidents)

module.exports = router