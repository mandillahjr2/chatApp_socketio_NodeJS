const express=require("express")
const {createServer}=require('http')
const {Server}=require("socket.io")

const app=express()
const httpServer=createServer(app)
const io=new Server(httpServer,{
    cors:{
        origin:["http://localhost:5500","http://127.0.0.1:5500"]
    }  
})

io.on('connection',(socket)=>{
    console.log("New Client Connected !")
    socket.broadcast.emit("new user notification","hm")
    socket.on("disconnect",(socket)=>{
        console.log(" Disconnected")
        // socket.broadcast.emit("")
    })
    socket.on("chat message",(msg)=>{
        io.emit("chat message",socket.id+": "+msg)
    })
});

httpServer.listen(9000,()=>{
    console.log("listening at port 9000")
})