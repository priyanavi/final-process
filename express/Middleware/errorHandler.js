const {logEvents, santhiya} = require('./logEvents');
const errorHandler = (err,req,res,next) => {
    santhiya(`${err.name}:${err.message}`,'errLog.txt');
    console.error(err.stack)
    res.status(500).send(err.message);
    next()

}
module.exports=errorHandler;

