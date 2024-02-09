const BigPromise = require('../middlewares/BigPromise');

//here we using Promise
exports.home = BigPromise(async(req, res)=>{
    //const db = AWAIT something()
    console.log("test");
    res.status(200).json({
        success: true,
        greeting: "Hello from Calender Backend",
    });
});