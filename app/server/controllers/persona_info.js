const meModel = require('../models/meModel')
const StatusCodes = require('http-status-codes')
const {
    TestimonialsImagesModel,
    ProfileImagesModel,
    ProjectImagesModel,
} = require('../models/picturesModel')
const { ProjectModel } = require("../models/projectModel")
const { TestimonialsModel } = require("../models/testimonialsModel")
const { ServicesModel } = require("../models/servicesModel")
const { SocialContactModel } = require("../models/socialContactModel")
const { ExperiencesModel } = require("../models/experiencesModel")
    // me
const createMe = async(req, res) => {

    const {
        fullName: fullName,
        title: title,
        email: email,
        phoneNumber: phoneNumber,
        experienceYear: experienceYear,
        clients: clients,
        description: description,
    } = req.body
    try {
        const newData = new meModel({
            fullName: fullName,
            title: title,
            email: email,
            phoneNumber: phoneNumber,
            experienceYear: experienceYear,
            clients: clients,
            description: description,
            pictures: ProfileImagesModel._id,
            projects: ProjectModel._id,
            testimonial: TestimonialsModel._id,
            services: ServicesModel._id,
            socials: SocialContactModel._id,
            experiences: ExperiencesModel._id
        })
        newData.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
                console.log('createMe')
            })
            .catch((error) => console.error(error.message))
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Error Creating Data" })
    }
}
const updateMe = async(req, res) => {
    const {
        fullName: fullName,
        title: title,
        email: email,
        phoneNumber: phoneNumber,
        experienceYear: experienceYear,
        clients: client,
        description: description,
    } = req.body
    try {
        const newData = {
            $set: {
                fullName: fullName,
                title: title,
                email: email,
                phoneNumber: phoneNumber,
                experienceYear: experienceYear,
                clients: client,
                description: description,
            }
        }
        const update = await meModel.updateMany({ _id: req.params.id }, newData)
        if (update) {
            console.log('items has been updated')
        } else {
            res.json('Contact has been updated')
        }
    } catch (error) {
        console.error(error.message)
    }
}

const deleteMe = async(req, res) => {
    try {
        const deleteData = await meModel.delete({ _id: req.params.id })
        if (deleteData.deleteCount === 1) {
            res.send('successfully deleted')
        } else {
            res.send('no documents match the question')
        }
    } catch (err) {
        console.log(err.message)
    }
}

const fetchMe = async(req, res) => {
    console.log('fetchMe')
    try {
        const contacts = await meModel.find()
        if (contacts !== null) {
            res.status(201).json(contacts)
        } else {
            res.json('no contacts found')
        }
    } catch (err) {
        console.error(err.message)
    }

}

// projects
const createProject = async(req, res) => {
    const { title: title, linkGithub: linkGithub, linkLive: linkLive } = req.body
    try {
        const newDataProject = new ProjectModel({
            title: title,
            linkGithub: linkGithub,
            linkLive: linkLive,
            pictures: ProjectImagesModel._id,
        })
        newDataProject.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
                console.log('createMe')
            }).catch(e => console.error(e.message))
    } catch (e) {
        console.error(e)
    }
}
const updateProject = async(req, res) => {
    res.send('update')
}

const deleteProject = async(req, res) => {
    res.send('delete')
}

const fetchProject = async(req, res) => {
    res.send('fetch')
}


// experiences
const createExperiences = async(req, res) => {
    const { frontend: frontend, backend: backend, other: other } = req.body
    try {
        experienceData = new ExperiencesModel({
            frontend: frontend,
            backend: backend,
            other: other,
        })
        experienceData.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
                console.log('createMe')
            }).catch(e => console.error(e.message))
    } catch (err) { console.error(err) }
}
const updateExperiences = async(req, res) => {
    res.send('update')
}

const deleteExperiences = async(req, res) => {
    res.send('delete')
}

const fetchExperiences = async(req, res) => {
    res.send('fetch')
}

// services
const createServices = async(req, res) => {
    const { userExp: userExp, frontend: frontend, backend: backend, other: other } = req.body
    try {
        const servicesData = new ServicesModel({
            userExp: userExp,
            frontend: frontend,
            backend: backend,
            other: other,
        })
        servicesData.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
                console.log('createMe')
            }).catch(e => console.error(e.message))
    } catch (err) { console.log(err) }
}
const updateServices = async(req, res) => {
    res.send('update')
}

const deleteServices = async(req, res) => {
    res.send('delete')
}

const fetchServices = async(req, res) => {
    res.send('fetch')
}


// socials
const createSocials = async(req, res) => {
    const { title: title, link: link } = req.body
    try {
        const socialsData = new SocialContactModel({
            title: title,
            link: link,
        })
        socialsData.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
                console.log('createMe')
            }).catch(e => console.error(e.message))
    } catch (err) { console.log(err) }
}
const updateSocials = async(req, res) => {
    res.send('update')
}

const deleteSocials = async(req, res) => {
    res.send('delete')
}

const fetchSocials = async(req, res) => {
        res.send('fetch')
    }
    // testimonials
const createTestimonials = async(req, res) => {
    const { name: name, title: title, testimonials: testimonials } = req.body
    try {
        const testimonialData = new TestimonialsModel({
            name: name,
            title: title,
            testimonials: testimonials,
            pictures: TestimonialsImagesModel._id
        })
    } catch (err) { console.error(err) }
}
const updateTestimonials = async(req, res) => {
    res.send('update')
}

const deleteTestimonials = async(req, res) => {
    res.send('delete')
}

const fetchTestimonials = async(req, res) => {
    res.send('fetch')
}

module.exports = {
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
}