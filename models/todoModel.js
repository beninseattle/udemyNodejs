import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;