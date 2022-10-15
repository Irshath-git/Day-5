//IIFE FUNCTION

// 1. Print odd Numbers in an array
(function () {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 !== 0) {
             console.log(arr[i]);
         }
     }
})();  


//2.Converting string to titlecase
var str = [ "converting string to titlecase"];
var s = ((e)=> str.map(e => e[0].toUpperCase() + e.substr(1)).join(' '))();
 
console.log(s);

//3.sum of all numbers in array using anonymous function
const sum = function() { 
    return function sum(x,y,z) {
       const args = [1,2,3];
       return args.reduce((a,b) => a+b, 0);}; 
}();
console.log(sum(1,2,3))

//4.Return all prime numbers in an array
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

let Prime=(()=>{
   let primeArray=0;
   primeArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
   if (number % i === 0) return false;
 }
   return true;
 })
 console.log(primeArray)
 });
Prime(numArray);

//5.Return all palindromes in an array
let arr2 = ["level", "10" , "madam"]
let palindromeArray = (()=>{
    for(let i = 0; i < arr2.length; i++) {
      if(arr2[i] !== arr2[arr2.length - i - 1]){
        console.log(arr2[i]);
       }
    }
})()

//6.Return median of two sorted arrays of the same size.
let ar1 = [1,2,3,4,5];
let ar2 = [2,3,6,7,8,1,9];

var arr3 = [...ar1, ...ar2];

arr3.sort(function(a, b){return a - b});
var res = (() => {
if(arr3.length % 2 == 0){
    var l  = arr3.length / 2 ;
    var m = (arr3[l] + arr3[l-1])/2;
    console.log(` median is  ${m}` );
    
}
else {
    var d  = arr3.length / 2 ;
    var e = Math.round(d);
    var med = arr3[e-1];
    console.log(` median is  ${med}` ); 
}
})()

//7.Remove duplicates from an array
let a = ['apple', 'mango', 'apple', 'orange', 'mango', 'orange'];
let b = [];
let c = a.length;

let ee = (()=>{
    for(let i=0;i<c;i++)
    {
       if(b.indexOf(a[i]) === -1)
       {
           b.push(a[i]);
       }
    }
})()
console.log(b);

//8.Rotate an array by K times
let array = [1,2,3,4,5];

let res = ( (arr,noofshifts)=>{
    for(let i =0;i<noofshifts;i++){
         arr.unshift(arr.pop());
    } 
      return arr;
})(array,3)

console.log(res);