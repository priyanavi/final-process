const fs = require("fs");
const fsPromises = require('fs').promises;
const path = require('path');
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const santhiya = async (message,logName) => {
    const datetime = `${format(new Date(), 'dd-mm-yyyy\thh:mm:ss')}`
    const logItem = `${datetime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logName),logItem);
    }
    catch (err) {
        console.error(err);
    }
}
const logger=(req, res, next) => {
    santhiya(`${req.method}\t${req.headers.origin}\t${req.url}`,'reqLogs.txt')  
    console.log(`${req.method} ${req.path}`)
    next()
};
module.exports = {logger, santhiya };
