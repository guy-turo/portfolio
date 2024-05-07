const { upload } = require('../utility/helper')
const { authenticateToken } = require('../middlewares/authMiddleware')

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

personRoutes.post('/testimonials', authenticateToken, upload.single('file'), createTestimonials)
personRoutes.route('/testimonials').get(fetchTestimonials)
personRoutes.put("/testimonials/:id", authenticateToken, upload.single('file'), updateTestimonials)
personRoutes.delete('/testimonials/:id', authenticateToken, deleteTestimonials)
    // experiences
personRoutes.post("/experiences", authenticateToken, createExperiences)
personRoutes.get("/experiences", fetchExperiences)
personRoutes.put("/experiences/:id", authenticateToken, updateExperiences)
personRoutes.delete("/experiences/:id", authenticateToken, deleteExperiences)

// socials
personRoutes.post('/socials', authenticateToken, createSocials)
personRoutes.get('/socials', fetchSocials)
personRoutes.route("/sendEmail").post(sendEmail)
personRoutes.put("/socials/:id", authenticateToken, updateSocials)
personRoutes.delete("/socials/:id", authenticateToken, deleteSocials)

// Services
personRoutes.post("/services", authenticateToken, createServices)
personRoutes.get("/services", fetchServices)
personRoutes.put('/services/:id', authenticateToken, updateServices)
personRoutes.patch('/services/:id', authenticateToken, deleteServices)

// person
personRoutes.route('/personal').get(fetchMe)
personRoutes.post("/personal", authenticateToken, upload.array('file'), createMe)
personRoutes.delete('/personal/:id', authenticateToken, deleteMe)
personRoutes.put("/personal/:id", authenticateToken, upload.array('file'), updateMe)

// Projects
personRoutes.post("/projects", authenticateToken, upload.array("file"), createProject)
personRoutes.route("/projects").get(fetchProject)
personRoutes.put("/projects/:id", authenticateToken, upload.array("file"), updateProject)
personRoutes.delete("/projects/:id", authenticateToken, deleteProject)

module.exports = { personRoutes }