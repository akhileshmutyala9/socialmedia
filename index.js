link="mongodb+srv://Akhilesh:ak@123@cluster0.2oj3acb.mongodb.net/?retryWrites=true&w=majority";


require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

app.use(express.json());

const userRoutes = require('./server/routes/user.js');

                          console.log(process.env.link)
                          mongoose.connect(process.env.link)
                          .then(console.log("our data base is connected succesfully"))
                          .catch(error => console.log(error));
                           app.use(express.json());


          app.use(express.static(__dirname + "/public"));
          app.get('/', (request,responce) => responce.sendFile(path.join(__dirname, '/public','index.html')));

          app.use(function(request, responce, next) {
          responce.header("Access-Control-Allow-Origin", "*");
          responce.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width,Content-Type,Accept,Authorization")
          responce.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS")
          next();

          });

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log("Server started on port ",PORT));
