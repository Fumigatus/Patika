let username=prompt("Enter a Username")
let myName=document.getElementById("myName")
myName.innerHTML=`${username}`

let clock=document.getElementById("myClock")
const days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
function time(){
    const d=new Date();
    clock.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getUTCSeconds()} ${days[d.getDay()-1]}`
    setTimeout(time,1000)
}
time();