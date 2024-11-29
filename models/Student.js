const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queryString = process.env.MONGODB_URI || "mongodb+srv://thanhdat2003pt:4Nhs3ch03m@cluster0.i8yo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//configure mongoose
mongoose.connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('MongoDB connection error:', err.message));

const StudentSchema = new Schema({
    studentId: Number,
    name: String,
    dob: Date,
    address: String
});

module.exports = mongoose.model("student", StudentSchema, "Students");