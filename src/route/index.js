const express = require('express')
const {
    createUser,
    userLogin,
    incidentReport,
    getAllIncidents,
    getUserIncidents
} = require('../controller')
const {
    validateUser,
    validateUserById
} = require('../middleware')
const router = express.Router()

router.post("/register", createUser)
router.get("/login", validateUser, userLogin)
router.post("/report", incidentReport)
router.get("/incidents", getAllIncidents)
router.get("/incidents/:id", validateUserById, getUserIncidents)

module.exports = router