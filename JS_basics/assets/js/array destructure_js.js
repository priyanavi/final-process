//carray destructure

const [sub1, sub2, sub3] = [60, 78, 90];
console.log(sub1, sub2, sub3);

//handling undefined elements

const [maths, physics, Biology] = [60, 78];
console.log(maths, physics, Biology);

//skipping Elements

const [rate1, , rate3] = [45, 35, 12];
console.log(rate1, rate3);

//discarding extra elements

const [fruit1, fruit2, fruit3] = [67, 90];
console.log(fruit1, fruit2);

//default values
const [rating = "*****"] = ["***"];
console.log(rating);

const [favfruit = "graphs"] = [];
console.log(favfruit);

//rest operator

const [value1, value2, ...remainvalue] = [1, 2, 3, 4, 5, 6, 7];
console.log(value1, value2, remainvalue);

//swapping values

let a = 78;
let b = 90;
[a, b] = [b, a];
console.log(a, b);

//nested array destructure

// const[one,two,three,four,five,six]=[1,2,[3,4],5,[6]]
// console.log(one,two,three,four,five,six)

const [one, two, [three, four], five, [six]] = [1, 2, [3, 4], 5, [6]];
console.log(one, two, three, four, five, six);

//array destructuring of function

function fullNames() {
  return ["priya", "dharshini"];
}
const [fn, ln] = fullNames();
console.log(fn, ln);

//on loops

const friends = [
  ["navi", 18],
  ["nena", 10],
];
// console.log(friends[0].name)
for (let [name, age] of friends) {
  console.log(`name is ${name} and age is ${age}`);
}

//object destructure in objects

const details=[{
    id:1,
    name:"priya",
    age:21
},
{
    id:2,
    name:"navi",
    age:18

},
{
    id:3,
    name:"nena",
    age:15
}]
const[priya,navi,nena]=details
console.log(priya.age)
console.log(navi.id)
console.log(nena.name)


//
const fulldetails=[
    {
        name:"hello",
        data:["dharshini","22"]
    }
]

const [name,age] =fulldetails[0].data;
console.log(name,age)