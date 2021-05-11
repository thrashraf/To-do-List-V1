//this is package where we are just install on terminal
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const newItems = ['sleep'];
const workItem = []

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
// this is how to use ejs view engine
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/' , function(req , res ){

    let day = date.getDay()

    res.render('list', {ListTitle : day ,  newListItems : newItems})
   
});


app.post('/' , function(req , res){

     console.log(req.body.button)
     
     var item = req.body.input;

     if (req.body.button === 'Work List'){

        workItem.push(item);
        res.redirect('/work') 
    }else{
        newItems.push(item);
        res.redirect('/') 

    }

     
     

        if (newItem === ''){

            //smthng
             
        
        }

    res.redirect('/')


})

app.get('/work' ,function(req , res){

    res.render('list',{ListTitle: 'Work List' , newListItems: workItem})
})

app.post('/work' , function(req ,res){


    let item = req.body.newItem


  
})

app.get('/about' , function(req ,res){

    res.render('about')
})


app.listen(3000 , function(res , req){

    console.log('server is running on port 3000')
})