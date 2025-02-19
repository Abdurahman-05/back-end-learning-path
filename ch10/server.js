const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const corsOptions = require("./config/corsOption");
const { logger } = require("./middleware/logEvent");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3500;


app.use(express.json());
//built in middleware
app.use("/subdir",express.static(path.join(__dirname, "public"))); //Serve static files (CSS, JS, images)
app.use("/",express.static(path.join(__dirname, "public")));

app.use('/sub',require('./routes/subdir'));
app.use('/',require('./routes/root'));
app.use('/employees',require('./routes/api/employees'));


app.use(cors(corsOptions));


// Error handling middleware
// app.use((err,req,res,next)=>{
//   console.error(err.stack);
//   res.status(500).send(err.message);
// })
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



////why we not use this direct routing instad of using router in a separate file and impotinr it into ihe main server.js file
//1,
// 🔹 Pros
// ✔ Simple and easy for small apps.
// ✔ No need to create multiple files.

// 🔹 Cons
// ❌ Hard to manage when the project grows.
// ❌ Makes server.js very long if there are many routes.
// ❌ Not modular (everything is in one file).
//2,using express.router() and import in server.js
// 🔹 Pros
// ✔ Better organization (routes are in separate files).
// ✔ Easier to manage in large projects.
// ✔ Improves maintainability (each route file handles a specific feature).

// 🔹 Cons
// ❌ Requires more files (but worth it for large projects).
// ❌ More complex than a single-file approach.

