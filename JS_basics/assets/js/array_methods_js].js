// const arr=new Array("hello",'priyaa')
// const arr1=['hello','priya']
const details = [
  {
    id: 1,
    name: "priya",
    status: true,
  },
  {
    id: 2,
    name: "dharshini",
    status: true,
  },
];
// console.log(details)
// console.log(details[0])
// console.log(details[1].name)

// const fruits = ["apple", "orange", "grapes"];
// console.log(fruits)
// console.log(fruits.push("pineapple"))
// console.log(fruits)
// const frontadd=fruits.unshift("custard apple")
// console.log(frontadd)
// console.log(fruits)
// const del=fruits.pop()
// console.log(del)
// console.log(fruits)
// const delfront=fruits.shift()
// console.log(delfront)
// console.log(fruits)
// console.log(fruits.toString())
// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })
// const result=document.querySelector("#root")

// fruits.forEach((fruit)=>{
//     result.innerHTML+="<li>"+fruit+"</li>"
// })

// const fruitlist = ["apple", "orange", "grapes", "banana", "mango"];
// console.log(fruitlist);
// const slicelist = fruitlist.slice(1, 4);

// console.log(slicelist);
// const splicelist = fruitlist.splice(1, 3);
// console.log(splicelist);
// const fruitlist1 = ["apple", "orange", "grapes", "banana", "mango"];
// const splicelist1 = fruitlist1.splice(1, 3,"fruit1","fruit2","fruit3");
// console.log(splicelist1);

// console.log(fruitlist1)

// const play=["basketball","football","valleyball"]
// const indoor=["shuttlecork","kabadi"]
// const child=["koko","runningrace","iceball"]
// const mergelist=play.concat(indoor,child)
// console.log(mergelist)
// //or
// const mergegame=[...play,...indoor,...child]
// console.log(mergegame)

//1 2

const fruitlist = ["apple", "orange", "grapes", "banana", "mango"];
const modifiedFruit = fruitlist.map((fruits) => fruits.toUpperCase());
console.log(modifiedFruit);

const num = [1, 2, 3, 4];
const res = num.map((number) => number * 2);
console.log(res);

//3
console.log(num.at(2));

//4
console.log(num.copyWithin(1, 2, 3));

//5

const ent = fruitlist.entries();
console.log(ent);

for (let [fruitlist, index] of ent) {
  console.log(fruitlist, index);
}

console.log(ent.next().done);

//6
const fruit = fruitlist.values();
console.log(fruit);
console.log(fruit.next().value);

//7
const numlist = [12, 34, 56, 78, 32];
const number = numlist.every((num) => {
  return num > 10;
});
console.log(number);

//8
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [11, 12, 13, 14];
const fill1 = arr1.fill(7, 2, 3);
console.log(fill1);
const fill2 = arr2.fill(10, 1);
console.log(fill2);
const fill3 = arr3.fill("dharshini");
console.log(fill3);

//9
const names = ["anu", "banu", "priya", "mahes"];
const check = names.filter((name) => {
  return name.length > 3;
});
console.log(check);

const user = details.filter((user) => {
  return user.status === true;
});
console.log(user);

//10

const numberlist = [12, 43, 25, 67, 84];
const check1 = numberlist.find((number) => {
  return number > 30;
});
console.log(check1);

//11
const numberlist1 = [12, 43, 25, 67, 84];
const check2 = numberlist.findLast((number, index, arr) => {
  console.log(index, arr);
  return number > 30;
});
console.log(check2);

//12

const numberlist2 = [12, 43, 25, 67, 84];
const check3 = numberlist.findLastIndex((number, index, arr) => {
  console.log(index, arr);
  return number > 30;
});
console.log(check3);

//13
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [5, 8, 9],
];
console.log(...matrix);
const res2 = [].concat(matrix);
console.log(res2);
const r = [].concat(...matrix);
console.log(r);
const re = matrix.flat();
console.log(re);

const matrix1 = [
  [1, 2, [1, 2], 3],
  [4, 5, 6],
  [5, 8, 9],
];
console.log(matrix1.flat(2));

//14
const array = [1, 34, 78];
const val = array.flatMap((arr) => {
  return arr === 1 ? [77, 8888] : 0;
});
console.log(val);

//15

const name = "priya";
console.log(Array.from(name));

//16

console.log(Array.of("muthu", 23));

//17

console.log(array.includes(34));
console.log(array.includes(34, 2)); //34 is place 2nd index or not

//18

console.log(array.indexOf(1)); //value in which index

//19
console.log(array.lastIndexOf(78));

//20
const number_list = [12, 43, 25, 67, 84];
const check_1 = numberlist.findIndex((number) => {
  return number > 30;
});
console.log(check_1);

//21
const myarr = [1, 2, 3];
console.log(Array.isArray(myarr));
console.log(Array.isArray(new Array()));

//22
console.log(names.join("-"));

//23
const namess = ["anu", "banu", "priya", "mahes"];
const names_1 = namess.keys();
console.log(names_1.next().done);
console.log(names_1.next().value);

for (const name of names_1) {
  console.log(name);
}

//24
const amount = [124, 675, 890,435, 879, 120];
const reduceAmount = amount.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    console.log(previousValue, currentValue, currentIndex, array);
    return previousValue + currentValue;
  }
);
console.log(reduceAmount);

//25
const reducerightAmount = amount.reduceRight(
  (previousValue, currentValue, currentIndex, array) => {
    console.log(previousValue, currentValue, currentIndex, array);
    return previousValue + currentValue;
  }
);
console.log(reducerightAmount);

//26
console.log(amount.reverse());

//27
const amt=amount.toReversed()
console.log(amt)
console.log(amount)

//28
const users=[{
  id:1,
  name:"priya",
  active:true,
},
{
  id:2,
  name:"dharshini",
  active:false,
}]
const resultusers=users.some((user)=>user.active==true)
console.log(resultusers)

//29

const nolist=[12,42,1,27,65,34]
const s=nolist.sort()
console.log(s)
  //ascending sort
const s1=nolist.sort((a,b)=>a-b)
console.log(s1)
   //reverse sort
const s2=nolist.sort((a,b)=>b-a)
console.log(s2)
   //change the main array
console.log(nolist)


//30
  //not disturn main array
const nolist1=[12,42,1,27,65,34]

const no=nolist1.toSorted()
console.log(no)
console.log(nolist1)

//31
const mydate=new Date('16 mar 2002')

  //find time at 16 mar 2002
const mylo=mydate.toLocaleString('hi-IN',{})
console.log(mylo)

const amount1=612365
const result=amount1.toLocaleString('hi-IN',{style:'currency',currency:'INR'})
console.log(result)

//32
const data=['p','r','i','y','a']
console.log(data.toString())
// console.log(data.toString().replaceAll('-','-'))

//33
const num_list=[1,3,5,7]
console.log(num_list.with(3,"three"))
console.log(num_list)
console.log(num_list[3]="seven")
console.log(num_list)