//ARROW FUNCTION

//1.Print odd numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

arr.forEach((item) =>{
  if (item % 2 !== 0) {
    console.log(item);
  }
});

//2.Convert all the strings to title caps in a string array
let titleCase = (str)=> {
    let sentence = str.toLowerCase().split(' ');
    for(let i=0;i< sentence.length;i++){
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
}
console.log(titleCase("converting string to titlecase"));

//3.Sum of all numbers in an array
let arr1 = [3, 6, 1, 5, 8];
let s =0;
let sum  =  (arr) => {
    arr.map(e => {
        s += e;
    });
    return s;
}
console.log(sum(arr1));

//4.Return all the prime numbers in an array
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

let isPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(arr2.filter(isPrime));

//5.Return all the palindromes in an array
let arr3 = ["level", "10" , "madam"]
let palindrome=(arr)=>{
    let ans=[];
    for(let i=0;i<arr3.length;i++){
        let x=arr3[i];
        let a=true
        for(let j=0;j<x.length/2;j++){
            if(x[j]!==x[x.length-1-j]){
                a=false
            }
        }
        if(a==true){
            ans.push(x)
        }
    }
    return ans
}
console.log(palindrome(arr3))