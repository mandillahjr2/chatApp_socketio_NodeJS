const socket=io("http://localhost:9000")

const send=()=>{
    const msg=document.getElementById('m').value;
    socket.emit("chat message",msg)
}

socket.on("chat message",(msg)=>{
    const para=document.createElement('p');
    para.innerText=msg;
    document.getElementById("messages").appendChild(para);
})

socket.on("new user notification",()=>{
    const para=document.createElement('p')
    para.innerHTML=`New User ${socket.id} connected`
    document.getElementById("messages").appendChild(para)
})

