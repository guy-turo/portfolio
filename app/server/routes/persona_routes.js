const { upload } = require('../utility/helper')
const isAuth = require("./authMiddleware")
const {
    createMe,
    updateMe,
    deleteMe,
    fetchMe,
    createTestimonials,
    updateTestimonials,
    deleteTestimonials,
    fetchTestimonials,
    createProject,
    updateProject,
    deleteProject,
    fetchProject,
    createExperiences,
    updateExperiences,
    deleteExperiences,
    fetchExperiences,
    sendEmail,
    createSocials,
    updateSocials,
    deleteSocials,
    fetchSocials,
    createServices,
    updateServices,
    deleteServices,
    fetchServices,
} = require('../controllers/persona_info')

const personRoutes = require('express').Router()

personRoutes.post('/testimonials', isAuth, upload.single('file'), createTestimonials)
personRoutes.route('/testimonials').get(fetchTestimonials)
personRoutes.put("/testimonials/:id", isAuth, upload.single('file'), updateTestimonials)
personRoutes.delete('/testimonials/:id', isAuth, deleteTestimonials)
    // experiences
personRoutes.post("/experiences", isAuth, createExperiences)
personRoutes.get("/experiences", fetchExperiences)
personRoutes.put("/experiences/:id", isAuth, updateExperiences)
personRoutes.delete("/experiences/:id", isAuth, deleteExperiences)

// socials
personRoutes.post('/socials', isAuth, createSocials)
personRoutes.get('/socials', fetchSocials)
personRoutes.route("/sendEmail").post(sendEmail)
personRoutes.put("/socials/:id", isAuth, updateSocials)
personRoutes.delete("/socials/:id", deleteSocials)

// Services
personRoutes.post("/services", isAuth, createServices)
personRoutes.get("/services", fetchServices)
personRoutes.put('/services/:id', isAuth, updateServices)
personRoutes.patch('/services/:id', isAuth, deleteServices)

// person
personRoutes.route('/personal').get(fetchMe)
personRoutes.post("/personal", isAuth, upload.array('file'), createMe)
personRoutes.delete('/personal/:id', isAuth, deleteMe)
personRoutes.put("/personal/:id", isAuth, upload.array('file'), updateMe)

// Projects
personRoutes.post("/projects", isAuth, upload.array("file"), createProject)
personRoutes.route("/projects").get(fetchProject)
personRoutes.put("/projects/:id", isAuth, upload.array("file"), updateProject)
personRoutes.delete("/projects/:id", isAuth, deleteProject)

module.exports = { personRoutes }