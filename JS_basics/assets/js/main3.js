const details = new Map();
details.set("id", 1);
details.set("animal", "dog");
details.set("character", "angry");

console.log(details);

// console.log(details.get("character"));
// console.log(details.size);
// console.log(details.has('id'))

// console.log(details.entries())

// for(let det of details.entries()){
//     console.log(det[0],det[1])
// }

// for(let [key,value] of details.entries()){
//     console.log(key,value)
// }

// console.log(details.values())
// console.log(details.keys())
// console.log(details.clear) 
// console.log(details.delete("id"))

const emptyobj={}
const jeep=new Map()
jeep.set(emptyobj,'empty object')
console.log(jeep.get(emptyobj))