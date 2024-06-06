const express=require('express');
const path=require('path');
const app=express();
const PORT=process.env.PORT || 3500;
app.get('^/$|index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});
app.get('/new-page(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','newpage.html'));
});
app.get('/old-page',(req,res)=>{
   res.redirect('new-page.html')
});
app.get('/hello(.html)?',(req,res,next)=>{
    console.log("Try To open Hello.html")
    next()
},(req,res)=>{
    res.send("Hello John")
})
const one=(req,res,next)=>{
    console.log('one');
    next()

}
const two=(req,res,next)=>{
    console.log('two');
    next()

}
const three=(req,res,next)=>{
    console.log('three');
    next()

}
app.get('/chain(.html)?',[one,two,three]);
app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(PORT,()=>console.log(`The server is running on ${PORT}`))