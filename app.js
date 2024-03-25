const express= require('express');
const port=process.env.PORT || 5000; // THIS IS OUR PORT NUMBER


const app = express(); //this is our app or instance of express



//api Middelwares

app.use(express.json()); // this is to accept data in json format

app.use(express.urlencoded()); // this is basically to decode the data send  through html form



//API ROUTES

app.get('/form',(req,res)=>{


res.sendFile(_dirname + '/public/index.html');

})

app.post('/formPost',(req,res)=>{
console.log(req.body); //the data we get is in the body of request
})


// this is basically to listen on port

app.listen(port,()=>{
    console.log('Server started at http://localhost:${port}')
})