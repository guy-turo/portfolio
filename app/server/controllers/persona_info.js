const meModel = require('../models/meModel')
const StatusCodes = require('http-status-codes')
const {
    TestimonialsImagesModel,
    ProfileImagesModel,
    ProjectImagesModel,
} = require('../models/picturesModel')
const { projectModel } = require("../models/projectModel")
const { testimonialsModel } = require("../models/testimonialsModel")
const { servicesModel } = require("../models/servicesModel")
const { socialContactModel } = require("../models/socialContactModel")
const { experiencesModel } = require("../models/experiencesModel")
    // me
const createMe = async(req, res) => {
    console.log('createMe')
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
            projects: projectModel._id,
            testimonial: testimonialsModel._id,
            services: servicesModel._id,
            socials: socialContactModel._id,
            experiences: experiencesModel._id
        })
        newData.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
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
    res.send('create')
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
    res.send('create')
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
    res.send('create')
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
    res.send('create')
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
    res.send('create')
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