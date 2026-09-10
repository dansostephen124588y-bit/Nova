const API="http://localhost:3000";

async function loadCourses(){
 try{
  let res=await fetch(API+"/courses");
  let data=await res.json();
  document.getElementById("courses").innerHTML =
  data.map(c=>`<p>📘 ${c}</p>`).join("");
 }catch(e){
  document.getElementById("courses").innerHTML="watch videos online";
 }
}

function searchCourse(){
 let q=document.getElementById("search").value;
 alert("Searching cloud courses for: "+q);
}

function openSearch(){
 let q=document.getElementById("webSearch").value;
 window.open("https://www.google.com/search?q="+encodeURIComponent(q));
}

loadCourses();
