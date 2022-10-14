
console.log('welcome');

const express=require('express');
const app=express();
const port=80;
const path=require('path');


app.use('/static_folder',express.static('static_folder'));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'template'));

app.post('/contact',(req,res)=>{

    console.log(req.body);

    
    let a=req.body.name;
    // console.log(a);
    // let url=req.url
    res.send(a);

});


app.listen(port,()=>{
    console.log('running');
})