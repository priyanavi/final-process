const whitelist=['http://localhost:3500','https://youtube.com']
const corsoption={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1||!origin){
            callback(null,true)
        }
        else{
            callback(new Error('Not allowed by cors'))
        }
    },
    connectionSuccessstatus:200
}
module.exports=corsoption