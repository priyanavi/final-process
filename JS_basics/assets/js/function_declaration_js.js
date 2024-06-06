//function declaration

function intro(){
    console.log("hi")
}
intro()

//function expression

const selfintro=function selfintro(){
    return "Hi hello"
}
console.log(selfintro())

//anonymous function

const anonymous= function(){
    console.log("hi Dharshini")
}
anonymous()

//arrow function

const hh=()=>{
    console.log("hi priya")
}
hh()

//arrow  function in single argument
const double=(a)=>{
    console.log(a*4)
}

double(2)

const double1=a=>  a*6

const result=double1(2)
console.log(result)



//arrow function in multiple argument

const add=(a,b)=> {
    return a+b
}
console.log(add(12,12))

//arrow function in object

const person={
    firstName:"priya",
    lastName:"dharshini",
    fullName:()=>{
        return person.firstName+ ' '+ person.lastName 
    }
    
}
console.log(person.fullName())

//arrow function in callback

const numbers=[1,2,3,4,5]
const squrenos=numbers.map((number)=>{
    return number*number
})
console.log(squrenos)

const squrenos1=numbers.map((number)=> number*number)  
console.log(squrenos1)

//returning object literal in arrow function

const mobileInfo=()=>{
    return{
        id:1,
        name:"priya"
    },{
        id:2,
        name:"navi"
    }
}
console.log(mobileInfo())

const mobileInfo1=()=>({
        id:1,
        name:"priya..."
})
console.log(mobileInfo1())
