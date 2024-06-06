const whitelist=['https://www.google.com','https://www.youtube.com']
const corsOptions={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!==-1|| !origin){
            callback(null,true)
        }
        else{
            callback(new Error('not allowed by CORS'));
        }
    },
    optionsSuccessStatus:200
}