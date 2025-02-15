const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const { logger } = require("./middleware/logEvent");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;

//built in middleware
app.use(express.static(path.join(__dirname, "public"))); //Serve static files (CSS, JS, images)
app.use(express.json()); //Parse JSON request bodies (API requests)
app.use(express.urlencoded({ extended: true })); //Parse form submissions
// express.Router() //Organize routes efficiently
// express.text()//Parse plain text request bodies
// express.raw()//Handle raw binary data
// express.Router().use()  //It applies middleware to specific routes inside a router, making it useful for:
//// ✅ Grouping related routes
//// ✅ Applying middleware once instead of per route
//// ✅ Keeping code modular and clean

app.post("/submit-form", (req, res) => {
  console.log(req.body); // Access form data
  res.send("Form submitted");
});

// app.use((req, res, next) => {
//   logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\n`, "log.text")
//   next()
// }); //we can make this in the logEvent file in middleware directery by exporitng the function!!!! the next line is make  this simple but it import the

app.use(logger);

// 3rd party middleware
// app.use(cors());//CORS (Cross-Origin Resource Sharing) in Express 3rd-party middleware allows servers to enable or restrict requests from different origins to prevent cross-origin restrictions in web applications.



const whitelist = ['https://www.google.com','https://www.example.com' ,'https://127.0.0.1:3500'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some browsers choke on 204
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/new-page(.html)", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old(.html)", (req, res) => {
  res.status("301").redirect("new-page");
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Error handling middleware
// app.use((err,req,res,next)=>{
//   console.error(err.stack);
//   res.status(500).send(err.message);
// })
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
