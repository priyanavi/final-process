// function scope  var

// var a = 10;
// function number() {
//   var a = 20;
//   console.log(a);
// }
// console.log(a);
// number();
// console.log(a);

// ---for loop in var---

// for (var i = 0; i < 5; i++) {
//   console.log("var:", i);
// }
// console.log("var1:",i)

//---for loop in let---

// for(let i=0;i<6;i++){
//   console.log("let:",i)
// }

// ---function scope let and var---

// function hello(){
//    let a=10
// }
// console.log(a)

// function hello(){
//   var a=10
// }
// console.log(a)

// ---function scope let and var----

// let a=100
// function hello(){
//   console.log(a)
// }
// hello()

// var b=500
// function hell1(){
//   console.log(b)
// }
// hell1()

// replace

// let a=10
// a=20
// console.log(a)

// var b=10
// b=20
// console.log(b)

// // not replace

// const a=10
// a=78
// console.log(a)

// push method using const

// const animal=['fox']
// animal.push("frog")
// console.log(animal)

// //alert keyword

// var name="priya"
// window.alert("hello priya")




// object   constructor
// const hello=new Object()
// const hello={}

// const person={
//     firstName:"santhiya",
//     lastName:"priya",
//     age:21,
//     fullName:function(){
//         console.log(this.lastName)
//     }
// }
// document.getElementById("root").innerHTML=person.firstName
// console.log(person.firstName)


const person={   //person is a object
    firstName:"santhiya",
    lastName:"priya",
    age:22,
    parent:{
        father:"appa",
        mother:"amma"
    },

    // fullName:function(){
    //     // console.log(this.lastName)
        
    //     return `${this.firstName} ${this.lastName}`
    // }

    //---- modern js ----
    fullName(){//fullName is a method 
        return `${this.firstName} ${this.age}`
    },
}


const person1={
    message(){
        // console.log(new Date().getFullYear()-this.age)
        return(new Date().getFullYear()-this.age)
    },
    favNumbers:[1,2,3,45,7],
    get favNumCount(){
         return this.favNumbers.length
    }
}
console.log(person1.favNumCount)

// document.getElementById("root").innerHTML=person.lastName
// document.getElementById("root").innerHTML=person.fullName()
// console.log(person.age)
// console.log(person.parent.father)

//merging   two objects


Object.assign(person,person1)// show in console  => store person,person1 details inside person
// console.log(person) 
// console.log(person.message())
// document.getElementById("root").innerHTML=person.message()
// console.log(person)
person.firstName="Priya"
person.lastName="dharshini"
person.age =23
//object copied

const objectCopied=Object.assign({},person)
// console.log(objectCopied)

//spread operator

const obj={...person,...person1}

// console.log(obj);



