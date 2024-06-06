const {logEvents}=require('./logEvents')
const errorhandler=(err,req,res,next)=>{
    logEvents(`${err.name}\t${err.message}`,'err.txt')
    console.error(err.stack)
    res.status(500).send('Not allowed by cors')
    next()

}
module.exports=errorhandler