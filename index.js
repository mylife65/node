// const http= require('http');
// const datas = require('./datas');
// http.createServer((req,resp)=>{
// resp.writeHead(500,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(datas));
// resp.end();
// }).listen(4500);


// const nodemon = require("nodemon")
// const fs = require("fs");

// // fs.writeFileSync("tex.js" ,"hii" )
// // const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input")
// }

// console.log(input)

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'hi')

// // for(i=0; i<5; i++){
// //     fs.writeFileSync(dirPath+"/manish"+i+".js","sirte code")
// // }

// fs.readdir(dirPath,(err,h1) => {
//     h1.forEach((m)=>{
//         console.log("my file",m)
//     })
// })

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'hi');
// const filePath = `${dirPath}/name.txt`
// // const filePath = `${dirPath}/ji.txt`
// // fs.writeFileSync(filePath,'thiss is my file')

// // fs.readFile(filePath,'utf-8',(err,item)=>{
// //     console.log(item)
// // })

// // fs.appendFile(filePath,'for fruits',(err)=>{
// //     if(!err) console.log("file name is updated");
// // })

// // fs.rename(filePath,`${dirPath}/ji.txt`,(err)=>{
// //     if(!err) console.log("nice")
// // })

// fs.unlinkSync(`${dirPath}/ji.txt`)

// let a = 10;
// b = 0;


// let wait = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },1000)
// })

// // console.log(a+b)
// wait.then((data)=>{
//     b=data;
//     console.log(a+b)
// })

// const express = require('express')
// const path = require("path");

// const app = express();
// const ppath = path.join(__dirname,'public')

// app.set('view engine','ejs');

// app.get('',(_, res)=>{
//   res.sendFile(`${ppath}/index.html`)
// })

// app.get('/pro',(_,resp)=>{
//   const user={
//     name:"manish",
//     email:"m65@m.in",
//     con:987
//   }
//   resp.render('pro',{user})
// })

// app.get('/ho',(req, res)=>{

//   res.sendFile(`${ppath}/about.html`)
// })


// app.get('*',(req, res)=>{
//   res.sendFile(`${ppath}/404.html`)
// })

// app.listen(3000);

// const express = require('express');
// const app = express();

// app.get("/home",(req,resp)=>{
//   resp.send("my name manish")
  
// })
// app.get("/", (req, resp) => {
  
//   console.log(req.query.name)
//   resp.send("welcome,"+req.query.name)
// });

// app.get("/help", (req, resp) => {
//   resp.send("Welcome, This is a Help Page");
// });

// app.listen(3000)


// const express = require('express')
// const path =require('path')

// const app = express();
// const publicPath = path.join(__dirname,'public')

// app.set('view engine','ejs');

// app.get('',(_,resp)=>{
//   resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile',(_,resp)=>{
//   const user={
//     name:"manish",
//     list:['apple','banana','cat']
//   }
//   resp.render('pro',{user})
// })

// app.listen(4000);

// const {MongoClient} =require('mongodb')
// const url ='mongodb://localhost:27017';
// const dbName = 'e-com';
// const client = new MongoClient(url);



// async function getdata(){
//   let res = await client.connect();
//   let db= res.db(dbName);
//   let collection = db.collection('product');
//     let data = await collection.find({}).toArray();
//     console.log(data)
// }

// getdata(); 

// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('product');
//     let data = await collection.find({}).toArray();
//     console.log(data)


// }

// // getData();

const dbconnect = require('./mongodb');

const main=async ()=>{
  let data = await dbconnect();
  data = await data.find({name:"oppo"}).toArray();
  console.log(data)
  
}

main()