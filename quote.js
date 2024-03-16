baseurl="https://api.quotable.io/random";

let msg=document.querySelector("#msg");
let author=document.querySelector("#author");
let genrate=document.querySelector("#genrate");

async function getquote(url){
    const response=await fetch(baseurl);
    var data=await response.json();
    msg.innerHTML=data.content;
    author.innerHTML=data.author;
}

getquote(baseurl);

genrate.addEventListener("click",()=>{
   getquote(baseurl);
});
