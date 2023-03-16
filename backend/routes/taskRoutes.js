const express = require('express')
const router = express.Router()
const { getTask, setTask, updateTask, deleteTask } = require('../controllers/taskController')

router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)
router.route('/').post(setTask)

module.exports = router