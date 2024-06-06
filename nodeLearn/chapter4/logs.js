const {v4:uuid}=require('uuid');
const {format}=require('date-fns');
const path=require('path');
const fs=require('fs');
const fspromises=require('fs').promises
const logEvents=async(message)=>{
    const dateTime=`${format(new Date(),"yyyy-MM-dd\tHH:mm:ss")}`;
    const logItems=`${dateTime}\t${uuid()}\t${message}\t\n`;
    console.log(logItems);
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fspromises.mkdir(path.join(__dirname,'logs'))
        }
       await fspromises.appendFile(path.join(__dirname,'logs','logs.txt'),logItems);

    }
    catch(err){
        console.err(err)

    }

    
};
module.exports=logEvents;