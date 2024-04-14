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

personRoutes.route('/testimonials')
    .post(createTestimonials)
    .get(fetchTestimonials)
personRoutes.route('/testimonials/:id')
    .put(updateTestimonials)
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
personRoutes.route("/socials/:id")
    .put(updateSocials)
    .delete(deleteSocials)
    // Services
personRoutes.route("/services")
    .post(createServices)
    .get(fetchServices)
personRoutes.route('/services/:id')
    .put(updateServices)
    .delete(deleteServices)

// person
personRoutes.route('/')
    .post(createMe)
    .get(fetchMe)

personRoutes.route('/:id')
    .delete(deleteMe)
    .put(updateMe)
    // Projects
personRoutes.route("/projects")
    .post(createProject)
    .get(fetchProject)
personRoutes.route("projects/:id")
    .put(updateProject)
    .delete(deleteProject)

module.exports = { personRoutes }