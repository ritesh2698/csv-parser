const fs = require('fs')
const fastcsv = require("fast-csv")
const mysql = require('mysql')


let stream = fs.createReadStream("bezcoder.csv")
let csvData = []
let csvStream = fastcsv
    .parse()
    .on("data",(data)=>{
        csvData.push(data);
    })
    .on("end",()=>{
        csvData.shift();

//create new connection
const connection = mysql.createConnection({
    host:"localhost",
    user:"ritesh",
    password:"password",
    database:"ritesh"
})

//open connection 
connection.connect(error=>{
    if(error){
        console.error();(error)
    }else{
        let query = "insert into category (id,name,description,created_at) values ?"
        connection.query(query,[csvData],(err,res)=>{
            console.log(err || res)
        })
    }
})
    })
stream.pipe(csvStream)