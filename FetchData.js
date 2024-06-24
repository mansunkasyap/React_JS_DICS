const url = 'https://reqres.in/api/users?page=2'
// let img 

// fetch(url)
//fetch(url, options)



// fetch("https://reqres.in/api/users?page=2")
// .then(res => res.json())
// .then(data => (data.data.slice(0, 5)))
// .then(arr => console.log(arr))
// .catch(err => console.log(err))
// .finally(console.warn('Disconnecting......'))

// Async Await

// async function Connect(){
//     // db connect
//     for(let i=0; i<100; i++){
//         console.log(i);
//     }
// }

// Connect();

// async function DataFetching(url){
//    try{
//         const res =  await fetch(url)
//         const data  = await res.json();
//         console.log(data);
//    }
//    catch(err){
//     console.log(err + "  is Ki Waja Se Aaaya");
//    }
// }
// DataFetching(url)


/// Class in JS
class Human{
    // console.log(this);
    // static h = 90;
    age ;
    static height = 8.0;
    constructor(age, height){
        this.age = age 
    }


    getAge(){
        return this.age;
    }
    static getHeight(){
        console.log("comes Here..........");
        return this.height;
    }

    canRun(){
        console.log("A Human can run");
        return null;
    }
}

const human = new Human(40, 5.5)
console.log(human.canRun());
console.log(human.getAge());
console.log(Human.getHeight());
// Array.from()
// Inheritance 
// 1. Single Inherit
// 2. Multilevel 
// 3. Multiple inheritance (NOT POSIBLE)
// 4. Hierarchical 



// /// Class in JS
// class Human{
//     // console.log(this);
//     // static h = 90;
//     age ;
//     static height = 8.0;
//     constructor(age, height){
//         this.age = age 
//     }


//     getAge(){
//         return this.age;
//     }
//     static getHeight(){
//         console.log("comes Here..........");
//         return this.height;
//     }

//     canRun(){
//         console.log("A Human can run");
//         return null;
//     }
// }

// class Person extends Human{
//     isMale;
//     constructor(){
//         this.isMale = true;
//     }
// }

// // const human = new Human(40, 5.5)
// // console.log(human.canRun());
// // console.log(human.getAge());
// // console.log(Human.getHeight());
// // Array.from() 

// class Mia extends Person
// {
//     skinTone ;
//     rate;
//     // constructor(){
//     //     super(12, 20);
//     //     console.log(this.age);
//     // }
//     constructor(skinTone, rate){
//         super(0, 0);
//         this.skinTone = skinTone 
//         this.rate = rate
//     }
//     getTone(){
//         return this.skinTone;
//     }

//     getRate(){
//         return this.rate;
//     }
// }

// class Johnny extends Person{

// }

// let mia =  new Mia("russian",6000)

// console.log(mia.getTone());
// console.log(mia.getRate());

// let private = 90;
// console.log(private);


/// Story of this keyword


// console.log(this);

// val = 90;
// x = 900

// function fun(val){ 
//     console.log(this.val, this.x);
// }

// fun(12);

let objectOne = {
    userName : "Mayank",
    isLogin : true,
    fun : function (){
        console.log(this);
    }
}

objectOne.fun();
// call() 
// apply()
// bind()

// userName = "Vishal"


// let objectTwo = {
//     userName : "Mayank",
//     age : 20,
//     isLogin : true,
//     fun : function greetUser(){
//         console.log(`Hello ${this.userName}  How r u`);
//     }
// }

// // objectTwo.fun();

// // function a(){
// //     console.log(this.userName + " My name/....");
// // }

// a.call(objectTwo) /// context change 


// function b(age){
//     console.log(this.userName + " My name/...."+ `Age ${age}`);
// }

// b.call(objectTwo, 89)


//apply(this, [])
// b.apply(thisContext, [])

// function three([...arr]){ //rest operator
//     console.log(arr);
// }
// function three({arr1, arr2, arr3}){ //rest operator
//     console.log(arr);
// }



// function three(name, age, isLogin){ 
//     console.log(a);
// }



// three.apply(objectTwo, ["Vihal", 45, true])


/// bind ()


// function four(){ 
//     console.log(`${this.userName} , ${this.age}, ${this.isLogin}`);
// }

// // let fun = new Function()

// let bound = four.bind(objectTwo);// it returns a function with added context
// bound()
