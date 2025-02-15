// // chapter  2 





// const fs = require("fs");
// const path = require("path");



// // __dirname its gives directry name
// fs.readFile(path.join(__dirname,"text","abdu"),'utf8', (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// });

// fs.writeFile(path.join(__dirname,"text","write"),"hellooo abdu", (err, data) => {
//   if (err) throw err;
//   else console.log("writing complited");
// });
// fs.appendFile(path.join(__dirname,"text","abdu"),"\t i am 22 years old", (err, data) => {
//   if (err) throw err;
//   else console.log("writing complited");
// });

// fs.writeFile(path.join(__dirname,"text","write"),"hellooo abdu", (err, data) => {
//   if (err) throw err;
//   else console.log("writing complited");

//   fs.appendFile(path.join(__dirname,"text","write"),"\n\n hellooo develper", (err, data) => {
//     if (err) throw err;
//     else console.log("writing complited");
//   });
//   fs.rename(path.join(__dirname,"text","write"),path.join(__dirname,"text","new"), (err, data) => {
//     if (err) throw err;
//     else console.log("rename complited");
//   });
// });


// console.log(path.join(__dirname,"text","abdu"))
// // console.log(path.basename(__filename))

// process.on("uncaughtException", (err) =>{
//   console.error(`there was an caught error ${err}`);
// })



////        filestream and writestream  for large text





// //----------file read operation with awaite/async-----------

// const fs = require("fs").promises;
// const path = require("path");

// const fun = async () =>{
//   try{
//   const data = await fs.readFile(path.join(__dirname,"text","abdu"),'utf8');
//   console.log(data);
//    await fs.unlink(path.join(__dirname,"text","abdu")); // to remove
//    await fs.writeFile(path.join(__dirname,"text","write"),data);
//    await fs.appendFile(path.join(__dirname,"text","write"),`\n\n tnkyou!!!!`);
//    await fs.rename(path.join(__dirname,"text","write"),path.join(__dirname,"text","new"));
//    const New = await fs.readFile(path.join(__dirname,"text","new"),'utf8')
//   console.log(New);

//   }catch(err){
//   console.error(err);
// }
// }
// fun();








//// -------------------------------folder creating and deleting
// const fs = require("fs");

// if(!fs.existsSync("./new")){
//   fs.mkdir("./new",(err)=>{
//     if(err) throw err;
//     console.log("folder created");
//   });
// }
// else{
//   fs.rmdir("./new",(err)=>{
//     if(err) throw err;
//     console.log("folder deleted");
//   }
//   )
// }

