const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')

// @desc Get all tasks for user
// @route GET /api/task/:id
// @access Private
const getTask = asyncHandler(async (req, res) => {
    const tasks = await Task.find({userId: req.params.id})
    res.status(201).json(tasks)
})

// @desc Set tasks for user
// @route Set /api/task
// @access Private
const setTask = asyncHandler(async (req, res) => {
    const userId = req.body.userId
    const title = req.body.title
    const description = req.body.description

    // if(userId == null || title == null) {
    //     res.status(400)
    //     throw new Error('User ID and title cannot be left empty')
    // }

    const task = await Task.create({
        userId: userId,
        title: title,
        description: description
    })

    res.status(201).json(task)
})

// @desc Update tasks for a user
// @route PUT /api/task/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(201).json(updatedTask)
})

// @desc Delete tasks for a user
// @route DELETE /api/task/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(400)
        throw new Error('Task not found')
    }

    await task.remove()
    res.status(201).json({ id: req.params.id })
})

module.exports = {
    getTask,
    setTask,
    updateTask,
    deleteTask
}