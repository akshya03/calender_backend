const mongoose= require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide event name'],
        maxLength: [14, 'Name should be less than 14 characters']
    },
    description:String,
    createdOn:{
        type: Date,
        default: Date.now
    },
    dateTime: Date,
    file: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Event', eventSchema);