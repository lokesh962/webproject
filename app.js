const express=require('express');
const app=express();
const path=require('path');
const port= process.env.PORT || 80;
const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mobiles');
mongoose.connect('mongodb+srv://lokesh96:Hari0000@cluster0.7nwtzsv.mongodb.net/mydatabase?retryWrites=true&w=majority').then(()=>{
    console.log('success');
}).catch(()=>{
    console.log('not success');
});

//use static website
app.use('/static_folder',express.static('static_folder'));
app.use(express.urlencoded());

//set template as pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'template'));

const mySchema=new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String
});
//creating a model
const myModel=mongoose.model('mobile',mySchema);

app.get('/',(req,res)=>{
    res.render('home.pug')
});

app.get('/contact',(req,res)=>{
    res.render('contact.pug');
});

app.post('/contact',(req,res)=>{
    const mobileName=new myModel(req.body);
    mobileName.save().then(()=>{
        res.render('contact.pug',{msg:'saved successfully'});
    }).catch(()=>{
        res.render('contact.pug',{msg:'not saved'});
    });
});

app.listen(port,()=>{
    console.log('running');
});