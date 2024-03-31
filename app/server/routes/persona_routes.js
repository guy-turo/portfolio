const { createMe, updateMe, deleteMe, fetchMe } = require('../controllers/persona_info')

const personRoutes = require('express').Router()

personRoutes.route('/')
    .post(createMe)
    .get(fetchMe)

personRoutes.route('/:id')
    .delete(deleteMe)
    .put(updateMe)

module.exports = { personRoutes }