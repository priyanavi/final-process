// const fs = require("fs");
// if (!fs.existsSync("./new")) {
//   fs.mkdir("./new", (err) => {
//     if (err) throw err;
//     console.log("directory created");
//   });
// }
// if (fs.existsSync("./new")) {
//     fs.rmdir("./new", (err) => {
//       if (err) throw err;
//       console.log("directory deleted");
//     });
//   }
const fspromises=require('fs').promises;
const path=require('path');
const fsopr=async()=>{
    try{
        const data=await fspromises.readFile(path.join(__dirname,'files','rename.txt'),'utf8');
        console.log(data);

    }
    catch (err){
        console.error(err)

    }

}


  fsopr()