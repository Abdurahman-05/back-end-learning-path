// ===================   topic server using nodejs

// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const fspremises = require('fs').promises;


// const PORT = process.env.PORT || 3500;
// const server = http.createServer((req, res) => {
//  console.log(req.url, req.method);


// ========================simple mathod  

// let filepath;
// if(req.url === "/" || req.url === "/index.html"){
    //      filepath = path.join(__dirname,'views','index.html')
    //      fs.readFile(filepath, 'utf8', (err,data) => {
        //           res.end(data);
        //          })
        //        }
        
        
        
        
    //===================================more efficient this way
        
        //       let filepath;
        
        //   switch(req.url){
        //       case '/':
        //           filepath = path.join(__dirname,'views','index.html')
        //           break;
        //       case '/about':
        //           filepath = path.join(__dirname,'views','about.html')
        //           break;
        //       default:
        //           filepath = path.join(__dirname,'views','404.html')
        //   }
        
        // server.listen(PORT, () => console.log(`listening on port ${PORT} .......`));





        // we orgnize all files in our directory and make this project  
        
        // const http = require("http");
        // const path = require("path");
        // const fs = require("fs");
        // const fspremises = require('fs').promises;
        
        
        // const read = async (contentType,filepath, response) => {
        //     try{
        //    const rawdata =  await fspremises.readFile(filepath,!contentType.includes('image') ? 'utf-8':"");
        //    const data = contentType === "application/json" ? JSON.parse(rawdata):rawdata;
        
        //     response.writeHead(
        //         !filepath.includes("404.html")?200 : 404,{"contentType":contentType})
        //     response.end(
        //      contentType === "application/json" ? JSON.stringify(data):data
        //     );
        //     }catch(err){
        //    console.error(err) 
        //    response.writeHead(500)
        //    response.end()
        //     } 
        // }
        
        // const PORT = process.env.PORT || 3500;
        // const server = http.createServer((req, res) => {
        //  console.log(req.url, req.method);
        
        
        //            let extention = path.extname(req.url);
            
        //            switch(extention){
        //             case '.html':
        //                  contentType = "text/html";
        //                 break;
        //             case '.js':
        //                  contentType = "application/javascript";
        //                 break;
        //             case '.json':
        //                 contentType = "application/json"
        //                 break;
        //             case '.css':
        //                  contentType = "text/css";
        //                 break;
        //             case '.jpg':
        //                  contentType = "image/jpeg";
        //                 break;
        //             case '.txt':
        //                  contentType = "text/plain";
        //                 break;
        //             case '.png':
        //                  contentType = "image/png";
        //                 break;
        //             default:
        //                  contentType = "text/html"; 
        //            }
        
        //            let filePath;
        
        //         if (contentType === 'text/html' && req.url === '/') {
        //             filePath = path.join(__dirname, 'views', 'index.html');
        //         } else if (contentType === 'text/html' && req.url.slice(-1) === '/') {
        //             filePath = path.join(__dirname, 'views', req.url, 'index.html');
        //         } else if (contentType === 'text/html') {
        //             filePath = path.join(__dirname, 'views', req.url);
        //         } else {
        //             filePath = path.join(__dirname, req.url);
        //         }
             
             
        
        
        //       if(!extention && req.url.slice(-1) !== '/') filePath += ".html";
        //       const fileExists = fs.existsSync(filePath);
        //       if(fileExists){
        //         read(contentType,filePath,res);
        //       }
        //       else{
        //         switch(path.parse(filePath).base){
        //           case "old.html":
        //             res.writeHead(301,{"location" : "/new-page.html"})
        //             res.end();
        //             break;
        //           default:
        //             read('text/html',path.join(__dirname,'views','404.html'),res);
        //         }
        // }
        //     });
            
        //     server.listen(PORT, () => console.log(`listening on port ${PORT} .......`));
        