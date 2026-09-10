const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const courses=[
"Web Development",
"Artificial Intelligence",
"Cyber Security",
"Cloud Computing",
"Programming Basics"
];

app.get("/courses",(req,res)=>{
 res.json(courses);
});

app.post("/login",(req,res)=>{
 res.json({message:"Login system ready for database connection"});
});

app.listen(3000,()=>{
 console.log("Cloud learning server running on port 3000");
});
