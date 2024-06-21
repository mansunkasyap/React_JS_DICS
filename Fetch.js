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