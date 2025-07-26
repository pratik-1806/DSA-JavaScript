
//1. Simple for loop

// for(start; end ; change){

// }

// for(i=1; i<10; i++){
//     console.log(i)
// }

//Sum of natural numbers

// let num = Number(prompt("Enter number"))
// let sum =0;
// for(let i=1; i<=num; i++){
//         sum =sum+i;
// }
// console.log(`sum of ${num} natural number is ${sum}`)


//is prime number

isPrimeNumber=(n)=>{
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i=3; i<Math.floor(Math.sqrt(n)); i+=2){
        if(n%i==0) return false;
    }
    return true;
}

console.log(isPrimeNumber(4))