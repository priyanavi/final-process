const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3002;
const corsOptions=require('./config/corsOptions')
const { logger } = require("./Middleware/logEvents");
const errorHandler=require('./Middleware/errorHandler')
const cors=require('cors');
// const { EventEmitterAsyncResource } = require('stream');
// const whitelist=['https://www.google.com','https://www.youtube.com']
// const corsOptions={
//     origin:(origin,callback)=>{
//         if(whitelist.indexOf(origin)!==-1|| !origin){
//             callback(null,true)
//         }
//         else{
//             callback(new Error('not allowed by CORS'));
//         }
//     },
//     optionsSuccessStatus:200
// }


// Middleware for logging requests
app.use(cors(corsOptions))
app.use (logger)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/",express.static(path.join(__dirname, './public')));
app.use('/subdir',express.static(path.join(__dirname, './public')));
// app.use('/subdir',require('./router/subdir'))
app.use("/",require('./router/root'))
app.use('/employe',require('./router/api/employe'))


// app.get('^/$|/index(.html)?', (req, res) => {
//     res.sendFile(path.join(__dirname, 'files', 'index.html'));
// });

// app.get('/new-file(.html)?', (req, res) => {
//     res.sendFile(path.join(__dirname, 'files', 'new-file.html'));
// });

// app.get('/old-file(.html)?', (req, res) => {
//     res.redirect (301,'new-file.html')                                                                                                                                                                                                                                      (301, 'new-file.html');
// });

// app.get('/priya(.html)?', (req, res, next) => {
//     console.log('priya.html go to next');
//     next();
// }, (req, res) => {
//     res.send('lusupilla');
// });

// const one = (req, res, next) => {
//     console.log('one');
//     next();
// };

// const two = (req, res, next) => {
//     console.log('two');
//     next();
// };

// const three = (req, res, next) => {
//     console.log('three');
//     res.send("finished!");
// };

// app.get('/chain(.html)?', [one, two, three]);

app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'files','404.html'));
    }else if(req.accepts('json')){
        res.json({"error":"404 not found"})
    }else{
        res.type('txt').send('404 not found');
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));


