
// function abc(){   
// let count = 0; 
//     function counter(){
//         count++;
//     }
//     counter();
//     return count;
// }

// console.log(abc());
// console.log(abc());
// console.log(abc());
// console.log(abc());
// console.log(abc());

function abc(){
    let count = 0;
    return function(){
       return  count++;
    }
}

var a = abc();
console.log(a())
console.log(a())
console.log(a())
console.log(a())

