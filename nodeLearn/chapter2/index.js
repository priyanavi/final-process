const fspromises=require('fs').promises;
const path=require('path');
const { allowedNodeEnvironmentFlags } = require('process');
// fs.readFile(path.join(__dirname,'files','sample.txt'),'utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);

// })
    
// console.log("Hello");

// process.on('uncaughtException',err=>{
//     console.error(`Therw will be some uncaught error:${err}`);
//     process.exit(1);
// })
// fs.writeFile(path.join(__dirname,'files','write.txt'),'Nice it will works',(err)=>{
//     if(err)throw err;
//     console.log("Write Completed");
//     fs.appendFile(path.join(__dirname,'files','write.txt'),'Append Sucessfully',(err)=>{
//         if(err)throw err;
//         console.log("append Completed");
//         fs.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','rename.txt'),(err)=>{
//             if(err)throw err;
//             console.log("append Completed");
//         });
    
//     })
    

// })
const fsopr=async()=>{
    try{
        const data=await fspromises.readFile(path.join(__dirname,'files','sample.txt'),'utf8');
            console.log(data);
            await fspromises.unlink(path.join(__dirname,'files','sample.txt'))
            await fspromises.writeFile(path.join(__dirname,'files','write.txt'),"Thi is an Write Text");
            await fspromises.appendFile(path.join(__dirname,'files','write.txt'),'\n This is an append Text');
            await fspromises.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','writes.txt'));
            const newdata=await fspromises.readFile(path.join(__dirname,'files','writes.txt'),'utf8');
            console.log(newdata);

        

    }
    catch(err){
        console.error(err)
    }
}
fsopr()