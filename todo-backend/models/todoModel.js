const mangoose = require('mongoose');

const todoSchema = new mangoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mangoose.model('Todo', todoSchema);
module.exports = Todo;