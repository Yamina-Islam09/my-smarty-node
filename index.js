const express=require('express');
const cors=require('cors');
const app=express();

const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello from my smart BD');
})
const users=[
    {id:1,name:'yamina', address : "chittagong"},
    {id:2,name:'lamina', address : "chittagong"},
    {id:3,name:'jamina', address : "chittagong"},
    {id:4,name:'tamina', address : "chittagong"},
    {id:5,name:'ramina', address : "chittagong"},
    {id:6,name:'kamina', address : "chittagong"},
    {id:7,name:'bamina', address : "chittagong"},
]
app.get('/users',(req,res)=>{
    //filter by search query parameter
   if(req.query.name){
       const search=req.query.name;
       const matched=users.matched(u=>u.name.toLowerCase().includes(search));
       req.send(matched)
   }
    res.send(users);
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user);
})
app.listen(port,()=>{
    console.log('listening to port',port);
})