const { upload } = require('../utility/helper')
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
personRoutes.post('/testimonials', upload.single('file'), createTestimonials)
personRoutes.route('/testimonials')
    .get(fetchTestimonials)
personRoutes.put("/testimonials/:id", upload.single('file'), updateTestimonials)
personRoutes.route('/testimonials/:id')
    .delete(deleteTestimonials)
    // experiences
personRoutes.route("/experiences")
    .post(createExperiences)
    .get(fetchExperiences)
personRoutes.route("/experiences/:id")
    .put(updateExperiences)
    .delete(deleteExperiences)

// socials
personRoutes.route('/socials')
    .post(createSocials)
    .get(fetchSocials)
personRoutes.route("/sendEmail")
    .post(sendEmail)
personRoutes.route("/socials/:id")
    .put(updateSocials)
    .delete(deleteSocials)
    // Services
personRoutes.route("/services")
    .post(createServices)
    .get(fetchServices)
personRoutes.route('/services/:id')
    .put(updateServices)
    .patch(deleteServices)

// person
personRoutes.route('/personal')
    .get(fetchMe)
personRoutes.post("/personal", upload.array('file'), createMe)
personRoutes.route('/personal/:id')
    .delete(deleteMe)
personRoutes.put("/personal/:id", upload.array('file'), updateMe)
    // Projects
personRoutes.post("/projects", upload.array("file"), createProject)
personRoutes.route("/projects")
    .get(fetchProject)
personRoutes.put("/projects/:id", upload.array("file"), updateProject)
personRoutes.route("/projects/:id")
    .delete(deleteProject)

module.exports = { personRoutes }