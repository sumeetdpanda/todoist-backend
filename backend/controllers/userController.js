const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc Get all user
// @route GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(201).json(users)
})

// @desc Get particular user
// @route Get /api/users/:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    res.status(201).json(user)
})

// @desc  Set User
// @route POST /api/user
// @access Private
const setUser = asyncHandler(async (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const password= req.body.password

    if(!name || !email || !password){
        res.status(400)
        throw new Error('All fields are required')
    }

    const user = await User.create({
        name: name,
        email: email,
        password: password
    })
    res.status(201).json(user)
})

// @desc  Update User
// @route PUT /api/user/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(201).json(updateUser)
})

// @desc  Delete user
// @route DELETE /api/user/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove()
    res.status(201).json({ id: req.params.id })
})


module.exports = {
    getUsers,
    getUser,
    setUser,
    updateUser,
    deleteUser
}