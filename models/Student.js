const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://pisceanphan25203:Q6egkOaXkCsJZExH@student.qjzzi.mongodb.net/student?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const StudentSchema = new Schema({
    studentId: Number,
    name: String,
    dob: Date,
    address: String
});

module.exports = mongoose.model("student", StudentSchema, "Students");