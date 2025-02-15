const express = require("express");
const app = express()
const path = require("path");
const fs = require("fs");
const fspremises = require('fs').promises;







// const PORT = process.env.PORT || 3500;
// app.get('/',(req,res) => {
//     res.send("Hello world");
// })

// app.listen(PORT, () => console.log(`listening on port ${PORT} .......`));
   



const PORT = process.env.PORT || 3500;
app.get('^/$|/index.html',(req,res) => {
   
   // res.sendFile("./Views/index.html",{root : __dirname})
     res.sendFile(path.join(__dirname,"Views",'index.html'))
})






//ex 1 the diffrence bn from above example

// app.get('/new-page.html',(req,res) => {
//    //the use of (.html)? 
//      res.sendFile(path.join(__dirname,"Views",'new-page.html'))
// })


//ex 2 

app.get('/new-page(.html)?',(req,res) => {
   //the use of (.html)? 
     res.sendFile(path.join(__dirname,"Views",'new-page.html'))
})

app.get('/old-page(.html)?',(req,res) => {
   //the use of (.html)? 
     res.redirect(301,'/new-page.html') //302 by default 
})







// ----------------------route handler


app.get("/hello(.html)?", (req,res,next) =>{
    console.log("attempt to load hello.html")
    next()
},(req,res) => {
    res.send('hello world!!!!')
})


// OR  chaining route handler


// const one = (req,res,next) =>{
//     console.log('one')
//     next();
// }
// const two = (req,res,next) =>{
//     console.log('two')
//     next();
// }
// const three = (req,res) =>{
//     console.log('three')
//     res.send("Finished!!")
// }

// app.get('/chain(.html)?' , [one,two,three]);


app.get("/*", (req,res) => { 
    res.status(404).sendFile(path.join(__dirname,'views','404.html')) 

    // it will sends 200 statusCode because its could found the file to change the status code to 404 we use status function  res.status(404).sendFile(path.join(__dirname,'views','404.html')) from  res.sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(PORT, () => console.log(`listening on port ${PORT} .......`));
        