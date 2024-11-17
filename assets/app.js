// answer:1

let name = "john";
let age = 25;

let myDetail = "My name is " + name + " and I am " + age + " years old"
console.log(myDetail);

// answer:2
let num = 24;
if(num % 2 === 1){
    console.log("The number is odd")
}
else if(num % 2 === 0){
    console.log('The number is even')
}

// answer:3

for(let i = 1; i < 6;i++){
    console.log(i)
}

// answer:4
function addNumber(first,second){
    return first + second
}


console.log(addNumber(3,7))

// answer:5
let fruits = ["apple", "banana", "cherry"]
fruits.push('orange')
console.log(fruits[0])
console.log(fruits.length)
// answer:6
let arr = [1, 2, 3, 4, 5];
arr.forEach(value => {
    console.log(value * 2)
})
// answer:7
const button = document.getElementById('changeText')
button.addEventListener('click',()=>{
    document.querySelector('h1').innerHTML = "You clicked the button!" 
})

// answer:8
let text = 'hello world';
console.log(text.toUpperCase())

// answer:9
let person = {
    name:"alice",
    age:30,
    greet(){
        return `hello my name is ${this.name}`
    }
}
console.log(person.greet())
