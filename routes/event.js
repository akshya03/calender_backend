const express = require('express');
const { saveEvent, getAllEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();
const multer = require('multer');
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
const upload = multer({ storage: storage });

router.route('/saveEvent').post(upload.single('file'),saveEvent);
router.route('/getEvents').get(getAllEvents);
router.route('/updateEvent').get(updateEvent);
router.route('/deleteEvent/:id').get(deleteEvent);




module.exports = router;