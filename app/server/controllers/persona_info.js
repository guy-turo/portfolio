const meModel = require('../models/meModel')
const cloudinary = require('cloudinary').v2
const StatusCodes = require('http-status-codes')
const { getCloudinaryImagePath } = require('../utility/helper')
const emailjs = require('@emailjs/nodejs');

require('dotenv').config()

const { ProjectModel } = require("../models/projectModel")
const { TestimonialsModel } = require("../models/testimonialsModel")
const { ServicesModel } = require("../models/servicesModel")
const { SocialContactModel } = require("../models/socialContactModel")
const { ExperiencesModel } = require("../models/experiencesModel")

// me
const createMe = async(req, res) => {
    const { fullName: fullName, title: title, email: email, phoneNumber: phoneNumber, experienceYear: experienceYear, clients: clients, projects: projects, description: description } = req.body

    try {
        if (req.files.length === 0) {
            res.status(400).json("Please upload picture")
        }

        let imagesMe = []
        req.files.forEach(image => imagesMe.push(image.path))
        console.log(imagesMe)
        const checkData = await meModel.find()
        if (checkData.length !== 0) {
            console.log('has data')
            res.status(404).json({ message: "Already Exists" })
        } else {
            const newData = new meModel({
                fullName: fullName,
                title: title,
                email: email,
                phoneNumber: phoneNumber,
                experienceYear: experienceYear,
                clients: clients,
                description: description,
                projects: projects,
                pictures: imagesMe


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
        }

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
        projects: projects,
    } = req.body
    console.log("body:", req.body)

    try {
        const checkData = await meModel.findById({ _id: req.params.id })
        if (!checkData) {
            res.status(404).json({ message: "does not exist" })
        }
        const img = []

        if (checkData?.pictures.length === 0) {
            res.status(404).json({ message: "please upload image" })
        }

        for (let z = 0; z < checkData?.pictures.length; z++) {
            let newImageId = getCloudinaryImagePath(checkData.pictures[z])
            if (!newImageId) return console.log('No picture found')
            const result = await cloudinary.uploader.destroy(newImageId)
            if (result.result === "ok") {
                console.log(`Images ${z} has been updated successfully`)
            }
        }
       
        const dataImg = req.files
        if (dataImg?.length === 0) {
            for (let j = 0; j < checkData?.pictures.length; j++) {
                const jData = checkData?.pictures[j]
                img.push(jData)
            }

        } else if (dataImg?.length !== 0) {
            for (let i = 0; i < dataImg?.length; i++) {
                const image = dataImg[i].path
                img.push(image)
            }
        }
        console.log('already pass')
        const newData = {
            $set: {
                fullName: fullName || checkData.fullName,
                title: title || checkData.title,
                email: email || checkData.email,
                phoneNumber: phoneNumber || checkData.phoneNumber,
                experienceYear: experienceYear || checkData.experienceYear,
                clients: client || checkData.clients,
                description: description || checkData.description,
                projects: projects || checkData.projects,
                pictures: img || checkData.pictures
            }
        }
        const update = await meModel.updateMany({ _id: req.params.id }, newData)
        if (!update) {
            res.status(404).json({ message: "Try again" })
        } else {
            res.status(200).json({ message: "Data has been updated successfully" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
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
    try {
        const data = await meModel.find()
        if (!data) {
            res.status(404).json({ message: "Item does not exist" })
        }
        res.status(200).json(data[0])

    } catch (err) {
        console.error(err.message)
    }

}

// projects
const createProject = async(req, res) => {
    const { title: title, linkGithub: linkGithub, linkLive: linkLive, description: description } = req.body
    try {
        const checkTitle = await ProjectModel.findOne({ title: title })
        if (checkTitle) {
            res.status(404).json({ message: "Project already exists" })
        }
        const images = req.files
        let imagesPath = []
        for (let i = 0; i < images.length; i++) {
            const paths = images[i].path
            imagesPath.push(paths)
        }
        const newDataProject = new ProjectModel({
            title: title,
            linkGithub: linkGithub,
            linkLive: linkLive,
            pictures: imagesPath,
            description: description,
        })
        await newDataProject.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
            }).catch(e => console.error(e.message))
    } catch (e) {
        res.status(500).json("Hello")
    }
}
const updateProject = async(req, res) => {
    
    try {
        const { id: id } = req.params
        console.log(id)
        console.log(req.body)
        const data = await ProjectModel.findById(id)

        if (!data) {
            return res.status(404).json({ message: "Item not fount" })
        }
       
        let newImage = []
        for (let i = 0; i < data.pictures.length; i++) {
            let newImageId = getCloudinaryImagePath(data.pictures[i])
            if (!newImageId) return console.log('No picture found')
            const result = await cloudinary.uploader.destroy(newImageId)
            if (result.result === "ok") {
                console.log("all images has been updated successfully")
            }
        }
       
        const resImage = req.files
        resImage.forEach(image => newImage.push(image.path))

        data.title = req.body.title || data.title
        data.description = req.body.description || data.description
        data.pictures = newImage || data.pictures
        data.linkGithub = req.body.linkGithub || data.linkGithub
        data.linkLive = req.body.linkLive || data.linkLive

        await data.save()
        res.status(200).json({ message: 'Item updated successfully' })
        console.log('updated successfully')
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const deleteProject = async(req, res) => {
    const { id: id } = req.params
    try {
        const data = await ProjectModel.findById({ _id: id })
        if (!data) {
            res.status(404).json({ message: "Item not found" })
        }
        for (let i; i < data.pictures.length; i++) {
            const publicId = getCloudinaryImagePath(data.pictures)
            const result = await cloudinary.uploader.destroy(publicId);
            if (result.result === "ok") {
                console.log("all images has been deleted successfully")
            }
        }
        await ProjectModel.deleteOne({ _id: id })
        res.json({ message: "project deleted" })
        console.log('deleted')

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const fetchProject = async(req, res) => {
    try {
        const data = await ProjectModel.find()
        if (data===null) return res.status(404).json({ message: "No Data Found" })
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

// experiences
const createExperiences = async(req, res) => {
    const { frontend: frontend, backend: backend, other: other } = req.body
    const checkData = await ExperiencesModel.find()
    let frontendData = []
    let backendData = []
    let otherData = []

    try {
        if (frontend) {
            const data = frontend.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.frontend) {
                    frontendData = [...checkData.frontend, data[i]]
                } else {
                    frontendData.push(data[i])
                }

            }
        }
        if (backend) {
            const data = backend.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.backend) {
                    backendData = [...checkData.backend, data[i]]
                } else {
                    backendData.push(data[i])
                }
            }
        }
        if (other) {
            const data = other.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.other) {
                    otherData = [...checkData.other, data[i]]
                } else {
                    otherData.push(data[i])
                }

            }
        }

        if (checkData.length === 0) {
            const createData = new ExperiencesModel({
                frontend: frontendData,
                backend: backendData,
                other: otherData,
            })
            createData.save()
                .then((re) => res.status(status.CREATED).json(res))
                .catch(err => res.status(404).json(err.message))
        } else {
            checkData.frontend = frontendData || []
            checkData.backend = backendData || []
            checkData.other = otherData || []
            await checkData.save()
                .then((result) => {
                    if (!result) {
                        return res.status(404).json({ message: "item not found" })
                    }
                    res.status(StatusCodes.CREATED).json(result)
                    console.log('createMe')
                }).catch(e => console.error(e.message))
        }
    } catch (err) { console.log(err) }
}
const updateExperiences = async(req, res) => {
    try {
        const { text: text, el: el } = req.body
        const data = await ExperiencesModel.findById({ _id: req.params.id })
        if (!data) {
            res.status(404).json({ message: "Item not found" })
        }
        switch (el) {
            case "frontend":
                let frontendData = []
                const mod1 = text.split(',')
                for (let i = 0; i < mod1.length; i++) {
                    frontendData.push(mod1[i])
                }
                data.frontend = frontendData || data.frontend
                break;
            case "backend":
                console.log("backend")
                let backendData = []
                const mod2 = text.split(',')
                for (let i = 0; i < mod2.length; i++) {
                    backendData.push(mod2[i])
                }
                data.backend = backendData || data.backend
                break;
            case "other":
                let otherData = []
                const mod3 = text.split(',')
                for (let i = 0; i < mod3.length; i++) {
                    otherData.push(mod3[i])
                }
                data.other = otherData || data.other
                break;
            default:
                console.log("Error!! try again")
        }

        await data.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
            }).catch(e => console.error(e.message))
    } catch (error) { res.status(500).json(error.message) }
}

const deleteExperiences = async(req, res) => {
    res.send('delete')
}

const fetchExperiences = async(req, res) => {
    try {
        const response = await ExperiencesModel.find()
        if (response) {
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// services
const createServices = async(req, res) => {
    const { userExp: userExp, frontend: frontend, backend: backend, other: other } = req.body
    const checkData = await ServicesModel.find()
    let userExpData = []
    let frontendData = []
    let backendData = []
    let otherData = []

    try {

        if (userExp) {
            const data = userExp.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.userExp) {
                    userExpData = [...checkData.userExp, data[i]]
                } else {
                    userExpData.push(data[i])
                }

            }
        }
        if (frontend) {
            const data = frontend.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.frontend) {
                    frontendData = [...checkData.frontend, data[i]]
                } else {
                    frontendData.push(data[i])
                }

            }
        }
        if (backend) {
            const data = backend.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.backend) {
                    backendData = [...checkData.backend, data[i]]
                } else {
                    backendData.push(data[i])
                }
            }
        }
        if (other) {
            const data = other.split(',')
            for (let i = 0; i < data.length; i++) {
                if (checkData.other) {
                    otherData = [...checkData.other, data[i]]
                } else {
                    otherData.push(data[i])
                }

            }
        }

        if (checkData.length === 0) {
            const createData = new ServicesModel({
                userExp: userExpData,
                frontend: frontendData,
                backend: backendData,
                other: otherData,
            })
            createData.save()

        } else {
            servicesData.userExp = userExpData || []
            servicesData.frontend = frontendData || []
            servicesData.backend = backendData || []
            servicesData.other = otherData || []
            await servicesData.save()
                .then((result) => {
                    if (!result) {
                        return res.status(404).json({ message: "item not found" })
                    }
                    res.status(StatusCodes.CREATED).json(result)
                    console.log('createMe')
                }).catch(e => console.error(e.message))
        }

    } catch (err) {
        res.status(500).json(error.message)
    }
}
const updateServices = async(req, res) => {
    try {
        const { text: text, el: el } = req.body
        const data = await ServicesModel.findById({ _id: req.params.id })
        if (!data) {
            res.status(404).json({ message: "Item not found" })
        }
        switch (el) {
            case "userExp":
                console.log("userExp")
                let userExpData = []
                const mod = text.split(',')
                for (let i = 0; i < mod.length; i++) {
                    userExpData.push(mod[i])
                }
                data.userExp = userExpData || data.userExp
                break;
            case "frontend":
                let frontendData = []
                const mod1 = text.split(',')
                for (let i = 0; i < mod1.length; i++) {
                    frontendData.push(mod1[i])
                }
                data.frontend = frontendData || data.frontend
                break;
            case "backend":
                console.log("backend")
                let backendData = []
                const mod2 = text.split(',')
                for (let i = 0; i < mod2.length; i++) {
                    backendData.push(mod2[i])
                }
                data.backend = backendData || data.backend
                break;
            case "other":
                let otherData = []
                const mod3 = text.split(',')
                for (let i = 0; i < mod3.length; i++) {
                    otherData.push(mod3[i])
                }
                data.other = otherData || data.other
                break;
            default:
                console.log("Error!! try again")
        }

        await data.save()
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: "item not found" })
                }
                res.status(StatusCodes.CREATED).json(result)
            }).catch(e => console.error(e.message))
    } catch (error) { res.status(500).json(error.message) }
}

const deleteServices = async(req, res) => {
    console.log('on process')
}

const fetchServices = async(req, res) => {
        try {
            const response = await ServicesModel.find()
            if (response) {
                res.status(200).json(response)
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    // socials
const sendEmail = async(req, res) => {
    const { name: name, subject: subject, message: message, sender: sender } = req.body
    if (!name && !message) return res.status(404).json({ message: "Name or message not found" })
    const notes = `Name : ${name} -- Email : ${sender} -- Subject : ${subject} -- Message :${message}`

    var templateParams = {
        name: name,
        email: sender,
        message: notes,
    };
    
    emailjs
        .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
            publicKey: process.env.PUBLIC_KEY,
            privateKey: process.env.PRIVATE_KEY, // optional, highly recommended for security reasons
        })
        .then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                res.status(200).json({ message: "Message sent" })
            },
            function(err) {
                console.log('FAILED...', err);
                res.status(400).json({ message: "error  on sending message" })
            },
        );
}
const createSocials = async(req, res) => {
    const { title: title, link: link } = req.body
    try {
        const checkData = await SocialContactModel.find()
        if (!checkData) {
            return
        } else if (checkData.title === title) {
            return res.status(404).json({ message: "Item already exist" })
        }
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
                console.log('create Socials')
            }).catch(e => console.error(e.message))
    } catch (err) { console.log(err) }
}
const updateSocials = async(req, res) => {
    console.log("updating")
    try {
        const { id: id } = req.params
        const data = await SocialContactModel.findById({ _id: id })
        console.log(data)
        if (!data) {
            return res.status(404).json({ message: "Item not fount" })
        }
        console.log(req.body.title, req.body.link)
        data.title = req.body.title || data.title
        data.link = req.body.link || data.link
        await data.save()
        res.status(200).json({ message: 'Item updated successfully' })
        console.log('updated successfully')
    } catch (e) {
        res.status(500).json(e.message)
    }
}
const deleteSocials = async(req, res) => {
    const { id: id } = req.params
    try {
        const data = await SocialContactModel.findById({ _id: id })
        if (!data) {
            res.status(404).json({ message: 'Item Not Found' })
        }
        await SocialContactModel.deleteOne({ _id: id })
        res.status(200).json('Item Deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const fetchSocials = async(req, res) => {
        try {
            const response = await SocialContactModel.find()
            if (!response) {
                res.status(404).json({ message: 'Item not found' })
            }
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    // testimonials
const createTestimonials = async(req, res) => {
    console.log("proceeding..")
    const { name: name, title: title, testimonials: testimonials } = req.body
    try {
        const testimonialData = new TestimonialsModel({
            name: name,
            title: title,
            testimonials: testimonials,
            pictures: req.file.path
        })
        testimonialData.save()
            .then((res) => {
                console.log('image uploaded successfully')
                res.status(200).json(res)
            })
            .catch(err => res.status(500).json(err.message))

    } catch (err) { console.error(err) }
}
const updateTestimonials = async(req, res) => {
    try {
        const { id: id } = req.params
        const data = await TestimonialsModel.findById(id)

        if (!data) {
            return res.status(404).json({ message: "Item not fount" })
        }
        let newImageId = getCloudinaryImagePath(data.pictures)
        if (newImageId) {
            await cloudinary.uploader.destroy(newImageId)
        }
        data.name = req.body.name || data.title
        data.title = req.body.title || data.title
        data.testimonials = req.body.testimonials || data.testimonials
        data.pictures = req.file.path

        await data.save()
        res.status(200).json({ message: 'Item updated successfully' })
        console.log('updated successfully')
    } catch (e) {
        res.status(500).json(e.message)
    }
}

const deleteTestimonials = async(req, res) => {
    const { id: id } = req.params
    try {
        const image = await TestimonialsModel.findById({ _id: id })
        if (!image) {
            res.status(404).json({ message: "Image not found" })
        }

        const publicId = getCloudinaryImagePath(image.pictures)
        result = await cloudinary.uploader.destroy(publicId);
        if (result.result === 'ok') {
            await TestimonialsModel.deleteOne({ _id: id })
            res.json({ message: "image deleted" })
            console.log('deleted')
        } else {
            res.status(500).json({ message: 'Error deleting image' });
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
    sendEmail,
    createSocials,
    updateSocials,
    deleteSocials,
    fetchSocials,
    createServices,
    updateServices,
    deleteServices,
    fetchServices,
}