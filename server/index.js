const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require("cors");
import multer from 'multer'
import path from 'path'


const app=express();
app.use(express.json());
app.use(cors());
app.use(express.static('server/public'));

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"loginsystem",
});

app.use(bodyParser.urlencoded({extended: true})) //to remove errors when working with these kind of applications

// /api/insert
app.post('/register', (reg, res)=> {

    const username = req.body.username; //catching from app.js
    const useremail = req.body.useremail;
    const password = req.body.password;

   const sqlInsert="INSERT INTO users (username, useremail, password) VALUES (?,?, ?)";
    db.query(
        sqlInsert,
         [username, useremail, password], (err, result)=>{
            console.log(err);
        } 
    );
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    con.query(
        "SELECT * FROM users WHERE useremail = ? AND password = ?",
        [useremail, password],
        (err, result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length > 0){
                res.send(result);
            }
            else{
                res.send({message: "Wrong email/password combination"});
            }
        }
    );
});

// to read data
app.get("/api/get", (req, res)=> {
    const sqlSelect="SELECT * FROM users";
    db.query(sqlSelect, (err, result)=>{
        if(err) return res.json("Error");
        return res.json(result);
    });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
        
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single('image'), (req, res)=> {
    const image = req.file.filename;
    const sql = "UPDATE users SET image = ?";
    db.query(sql, [image], (err, result)=>{
        if(err) return res.json({Message: "Error"});
        return res.json({Status: "Success"});
    })
})


app.listen(3001, () => {
    console.log("running server");
});