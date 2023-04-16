import affichage from './affichage.js'

const tabs = ["start","markers","openusage"]
for(const i of tabs){
    document.getElementById("btn-"+i).onclick = ()=>{affichage.showTab("qm-"+i)}
}
document.getElementById("btn-connect").onclick = ()=>{location.href = "connect.html"}
document.getElementById("btn-newuser").onclick = ()=>{location.href = "newuser.html"}
