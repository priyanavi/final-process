const dailyschedule = ["ready", "work", "dinner", "snacks", "work", "lunch"];

const obj={"friends":["name"]}
const dailyscheduleset = new Set(dailyschedule);
dailyscheduleset.add("clean");
// dailyscheduleset.add(function(){"friends"=["name"]})
// dailyscheduleset.add(obj)
console.log(dailyscheduleset)
// document.getElementById("root").innerHTML=dailyscheduleset
console.log(dailyscheduleset.entries());
console.log("check:",dailyscheduleset.has("dinner"))
console.log("keys:",dailyscheduleset.keys())
console.log("values:",dailyscheduleset.values())
console.log("delete",dailyscheduleset.delete(obj))
console.log(dailyscheduleset)
document.getElementById("root").innerHTML=dailyscheduleset.has("snacks")
// document.getElementById("root").innerHTML=dailyscheduleset.entries()

// const dailyscheduleset=new Set(["ready", "work", "dinner", "snacks", "work", "lunch"])

// const resultli=document.querySelector('#root')
// dailyscheduleset.forEach((schedule)=>{
//     console.log(schedule)
//     resultli.innerHTML+="<li>"+ schedule+'</li>'
// })