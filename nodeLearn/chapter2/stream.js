const fs=require('fs');
const { encode } = require('punycode');
const rs=fs.createReadStream('./files/lorem.txt',{encode:'utf8'});
const ws=fs.createWriteStream('./files/new-lorem.txt');
// rs.on("data",(datachunk)=>{
//     ws.write(datachunk);
// })
rs.pipe(ws);