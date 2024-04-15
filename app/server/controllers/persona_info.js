const meModel = require('../models/meModel')
const cloudinary = require('cloudinary').v2
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

function getCloudinaryImagePath(url) {
    const urlParts = url.split('/');

    if (urlParts.length < 7 || urlParts[0] !== 'https:' || urlParts[2] !== 'res.cloudinary.com') {
        throw new Error('Invalid Cloudinary URL format');
    }
    const urlImage = urlParts.slice(7).join('/')
    return urlImage.slice(0, -4)
}

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
    console.log("proceeding..")
    const { name: name, title: title, testimonials: testimonials } = req.body
    const uploadedFiles = []
    console.log(req.body)
    console.log(req.file)
    console.log(req.files)
    req.files.forEach(async(file) => {
        console.log(file)
            // const uploadedResponse =  await cloudinary.uploader.upload(file.path)
        uploadedFiles.push(file.path)
    })
    try {

        const testimonialData = new TestimonialsModel({
            name: name,
            title: title,
            testimonials: testimonials,
            pictures: uploadedFiles
        })
        testimonialData.save()
            .then((res) => res.status(200).json(res))
            .catch(err => res.status(500).json(err.message))
        console.log('image uploaded successfully')
    } catch (err) { console.error(err) }
}
const updateTestimonials = async(req, res) => {
    res.send('update')
}

const deleteTestimonials = async(req, res) => {
    const { id: id } = req.params


    try {
        const image = await TestimonialsModel.findById({ _id: id })
        if (!image) {
            res.status(404).json({ message: "Image not found" })
        }


        for (let i = 0; i < image.pictures.length; i++) {
            const publicId = getCloudinaryImagePath(image.pictures[i])
            result = await cloudinary.uploader.destroy(publicId);
            if (result.result === 'ok') {
                await TestimonialsModel.deleteOne({ _id: id })
                res.json({ message: "image deleted" })
                console.log('deleted' + i)
            } else {
                res.status(500).json({ message: 'Error deleting image' });
            }

        }




    } catch (error) { res.json({ message: error.message }) }
}

const fetchTestimonials = async(req, res) => {
    try {
        const response = await TestimonialsModel.find()

        if (response.length > 0) {
            res.status(200).json(response)
        }

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
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