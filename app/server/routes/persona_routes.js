const { upload } = require('../utility/helper')
const { isAdmin } = require("./authMiddleware")
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

personRoutes.post('/testimonials', isAdmin, upload.single('file'), createTestimonials)
personRoutes.route('/testimonials').get(fetchTestimonials)
personRoutes.put("/testimonials/:id", isAdmin, upload.single('file'), updateTestimonials)
personRoutes.delete('/testimonials/:id', isAdmin, deleteTestimonials)
    // experiences
personRoutes.post("/experiences", isAdmin, createExperiences)
personRoutes.get("/experiences", fetchExperiences)
personRoutes.put("/experiences/:id", isAdmin, updateExperiences)
personRoutes.delete("/experiences/:id", isAdmin, deleteExperiences)

// socials
personRoutes.post('/socials', isAdmin, createSocials)
personRoutes.get('/socials', fetchSocials)
personRoutes.route("/sendEmail").post(sendEmail)
personRoutes.put("/socials/:id", isAdmin, updateSocials)
personRoutes.delete("/socials/:id", isAdmin, deleteSocials)

// Services
personRoutes.post("/services", isAdmin, createServices)
personRoutes.get("/services", fetchServices)
personRoutes.put('/services/:id', isAdmin, updateServices)
personRoutes.patch('/services/:id', isAdmin, deleteServices)

// person
personRoutes.route('/personal').get(fetchMe)
personRoutes.post("/personal", isAdmin, upload.array('file'), createMe)
personRoutes.delete('/personal/:id', isAdmin, deleteMe)
personRoutes.put("/personal/:id", isAdmin, upload.array('file'), updateMe)

// Projects
personRoutes.post("/projects", isAdmin, upload.array("file"), createProject)
personRoutes.route("/projects").get(fetchProject)
personRoutes.put("/projects/:id", isAdmin, upload.array("file"), updateProject)
personRoutes.delete("/projects/:id", isAdmin, deleteProject)

module.exports = { personRoutes }