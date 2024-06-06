const numbers=new Array(1,2,3,4,5)
console.log(numbers)
const values=[1,2,3,4,5]
console.log("values:",values)
console.log(values[3])

const favourite=[
    {id:1,favcolor:"red",favfood:"curd-rice"},
    {id:2,favcolor:"pink",favfood:"sambar-rice"},
    {id:3,favcolor:"rose",favfood:"veg-rice"},
    {id:4,favcolor:"orange",favfood:"egg-rice"},
]
console.log(favourite)
console.log(favourite[0].favcolor)

//FOR LOOP

for(let i=0;i<favourite.length;i++){
    console.log(favourite[3].favcolor)
}

//FOR IN LOOP
for(items in favourite){
    console.log("favfood",favourite[0].favfood)
}

//FOR OF LOOP

for(let food of favourite){
    console.log(food.favcolor)
}

//FOREACH

favourite.forEach((food)=>{
    console.log(food.favcolor)})


let value='hh'
favourite.forEach((food)=>{
    value+=food.favfood 
})
console.log(value)

favourite.forEach((food)=>{
        document.getElementById("root").innerHTML+='<li>' +food.favcolor +'</li>'
    })
    //mulidimension array

const matrix=[
    [21,11,[1,2,3],23,22],
    [23,45,23],
    [32,34,56,78]
]
console.log(matrix.flat(2))


const subs=[
    "physics","chemistry","maths"
]
for (let subjects in subs) {
    document.getElementById("root").innerHTML += subs[subjects] + "<br>";
}

for (let i=0;i<=subs.length;i++){
    document.getElementById("root").innerHTML=subs
}

let content = "";
for (let subject of subs) {
    content += subject + "<br>";
}
document.getElementById("root").innerHTML = content;

let content1 = "";
subs.forEach((subject) => {
    content1 += subject + "<br>";
});
document.getElementById("root").innerHTML = content1;


