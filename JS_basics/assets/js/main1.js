const person={
    firstName:"priya",
    lastName:"dharshini",
    favclolor:"red",
    age:22,
    fullName(){
        `return ${this.firstName} ${this.lastName}`
    }
}

// const {firstName,lastName}=person
// console.log(firstName,lastName)

const {firstName:myfirstName,lastName:mylastName,favclolor="pink"}=person

console.log(myfirstName,mylastName,favclolor)


//rest valuses
const{firstName,lastName,...remain}=person
console.log(firstName,lastName,remain)

let f1,f2;
({f1,f2,...store}={
    f1:1,
    f2:2,
    f3:3,
    f4:4
})
console.log(f1,f2,store)


function hello(user){
    console.log(`my name is ${user.firstName} ${user.lastName}`)
}

hello(person)

function person1({firstName:myfirstName,lastName,age,favclolor}){
    console.log(`my name is${myfirstName} ${lastName} and my age is ${age}`)
}
person1(person)
