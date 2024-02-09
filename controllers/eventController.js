const dayjs = require("dayjs");
const BigPromise = require("../middlewares/BigPromise");
const Event = require("../models/event");
const CustomError = require("../utils/customError");
const multer = require("multer");

exports.saveEvent = BigPromise(async(req, res, next)=>{
    const {name, description, dateTime, } = req.body;
    const file = {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/jpeg'
    }


    if(!(name))
        return next(new CustomError('Event name and time fields are required', 400));

    // if(req.files){
    //     let file = req.files.photo;
    // }
    dateTimeConverted =dateTime? new Date(Number(dateTime)): null;

    const event = await Event.create({
        name,
        description,
        dateTime: dateTimeConverted,
        file
    });

    res.status(200).json({
        success: true,
        event
    });

});

exports.getAllEvents = BigPromise(async(req, res, next)=>{
    const events = await Event.find();

    res.status(200).json({
        success: true,
        events
    });

});

exports.updateEvent = BigPromise(async(req,res,next)=>{
    const event = await Event.findById(req.params.id);
    const {name, description, dateTime} = req.body;
    let dateTimeConverted = new Date(Number(dateTime));
    event = {
        ...event,
        name,
        description,
        dateTime: dateTimeConverted
    }
    await event.save();
    res.status(200).json({
        success: true,
        message: "Event updated",
        event
    });
});

exports.deleteEvent = BigPromise(async(req, res, next)=>{
    const event = await Event.deleteOne({_id: req.params.id});
    const events = await Event.find();
    res.status(200).json({
        success: true,
        message: "Event deleted, sending back remaining events",
        events
    });

});