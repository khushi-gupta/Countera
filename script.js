let val=document.querySelector("#val");
let plus=document.querySelector("#increase");
let minus=document.querySelector("#decrease");
let reset=document.querySelector("#reset");
val.innerHTML=0;
let initial=0;
let changing=0;
plus.addEventListener("click",()=>{
  changing++;
  val.innerHTML=changing;
})
minus.addEventListener("click",()=>{
  if(changing==0)
  {
    alert("Value is already at 0!");
  }
  else {
    changing--;
    val.innerHTML=changing;  
  }
})
reset.addEventListener("click",()=>{
  changing=0;
  val.innerHTML=changing;
})
