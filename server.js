const db = require('./queries');
const express = require("express");
const path = require("path");

import cors from "cors";

// const cors = require("cors");



const app = express();

// // ADD THIS
// var cors = require('cors');
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:3001',
    // methods: ['GET', 'POST'],
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 
    // Other options as needed
  }));

// const app = express();

const PORT = 3001;

const dbName = "HW1_DB";
let db;
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

sqlite
    .open({
        filename: `./database/${dbName}.db`,
        driver: sqlite3.Database,
    })
    .then((dbConn) => {
        console.log(`Connected to database - ./database/${dbName}.db`);
        db = dbConn;
    });

app.get("/", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace with your React app's URL
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    // const r = await dbOperations.checkadmin()
    const rr= await db.admin()
   console.log(rr)
 

    // dbOperations.insertNewadmin((res) => {
    //     if (res == true) {
    //         console.log(`insert Admin Table inside ${dbName}.db`);
    //     } else {
    //         console.log(

    
    //             `Unable to insert Admin Table inside ${dbName}.db`
    //         );
    //     }
    // });
  return res.sendFile("login.html", { root: path.join(__dirname, "src") });

//   res.sendFile("login.html", { root: path.join(__dirname, "views") });

});

app.get("/addNurse",(req,res)=>{

    console(req)
    
    
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

