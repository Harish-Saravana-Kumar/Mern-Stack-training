// #destructuring Object

const person = {
    name: 'John Doe',
    age: 30,                        
    city: 'New York'};

// let {name, age, city} = person;
// console.log(name, age, city);

//# destructure Array
const numbers = [1, 2, 3, 4, 5];
let [a, b, c, s, e] = numbers;
console.log(a,b,c);

// To print the rest of the datas
let{name,...restdatas} = person
console.log(name,restdatas);

// To print rest of datas in array 
let k = [1,2,3,4,5]
let d = ['hai','hello','bye',...k]
console.log(d)

// Function concept
function add(a,b){
    console.log(1+1);
}
console.log('hello')
add()

function sub(a,...b){
    console.log(a)
    s=0
    for(let i=0;i<b.length;i++){
    s+=b[i]
    }
    return s
}
console.log('hai')
sub(10,2,3,4,5,6)

let kd = []
added_datas = [1,'sai',3,4.5,2,5]
kd.push(...added_datas)
console.log(kd)

//closures function

function outer(){
    var name = 'sai'
    function inner(){
        console.log(name)
    }
    console.log('outer function')
    return inner
}
inn = outer()
inn()

// inner = myFun()
// inner()
// let myFun = function out(){
//     console.log('Welcome')
//     return function(){
//         console.log('Inner function')
//     }
// }

//Arrow function
let m=()=>{
    console.log('Arrow function')
}
m()

let mul = (a,b)=>{
    return a*b
}
console.log(mul(2,3))

// call back function
function get(recCheckFun)
{
    name1='sai1'
setTimeout( ()=>{
        if(name1==='sai1')
        {
            recCheckFun()
        }
    } ,2000)
}
function check()
{
    console.log('pass')
}
get(check)

//Promise states
let n = new Promise((resolve,reject)=>{
    name2 = 'sai1'
    setTimeout(()=>{
        if(name2 === 'sai1')
        {
            resolve('sai pass')
        }
        else{
            reject('fail')
        }
    },2000)
})
n.then((name2)=>{
    console.log(name2)
})
n.catch((err)=>{     
    console.log(err)
})
n.finally(()=>{
    console.log('finally')
})

//Async function
const res = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const a = 'sai1'; 
            if (a==='sai') {
                resolve(a);
            } else {
                reject(new Error('no data'));
            }
        }, 1000);
    });
};

const handleData = async () => {
    try {
        const name = await res(); 
        console.log('received', name); 
    } catch (err) {
        console.log(err.stack); 
    } finally {
        console.log('received'); 
    }
};

handleData();