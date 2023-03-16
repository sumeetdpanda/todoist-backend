const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User ID cannot be left empty'],
    },
    title: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Title cannot be left empty'],
    },
    description: {
        type: mongoose.Schema.Types.String,
        default: null,
    },
    isComplete: {
        type: mongoose.Schema.Types.Boolean,
        required: [true, 'Set a value for isCompleted'],
        default: false
    }, 
    completedAt: {
        type: mongoose.Schema.Types.Date,
        default: null,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)