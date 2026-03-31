// TYPEWRITER
const roles = [
"Frontend Developer 💻",
"Backend Learner ⚙️",
"DSA Enthusiast 🚀",
"Problem Solver 🧠"
];

let i=0,j=0,text="",del=false;

function type(){
if(!del && j<roles[i].length){
text+=roles[i][j++];
}
else if(del && j>0){
text=roles[i].substring(0,--j);
}

document.getElementById("roles").innerHTML=text;

if(j===roles[i].length) del=true;
if(j===0 && del){
del=false;
i=(i+1)%roles.length;
}

setTimeout(type,100);
}
type();

// ACTIVE NAV
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(sec=>{
if(scrollY>=sec.offsetTop-100){
current=sec.id;
}
});
navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}
});
});

// CHAT
function toggleChat(){
let box=document.getElementById("chatbox");
box.style.display=box.style.display==="block"?"none":"block";
}

function sendMessage(){
let input=document.getElementById("chatInput").value.toLowerCase();
let reply="";

if(input.includes("skills")) reply="Java, Python, DSA, Web Development";
else if(input.includes("project")) reply="ClimateGuard AI & Portfolio Website";
else if(input.includes("contact")) reply="Email: sakshigupta8486@gmail.com";
else reply="Ask about skills, projects, experience 😊";

document.getElementById("chatReply").innerText=reply;
document.getElementById("chatInput").value="";
}