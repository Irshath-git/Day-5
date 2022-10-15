//ANONYMOUS FUNCTIONS

// 1. Print odd Numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

arr.forEach(function(item) {
  if (item % 2 !== 0) {
    console.log(item);
  }
});


//2.Converting string to titlecase
function titleCase(str) {
    let sentence = str.toLowerCase().split(' ');
    for(let i=0;i< sentence.length;i++){
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
}
console.log(titleCase("converting string to titlecase"));


//3.sum of all numbers in array using anonymous function
let array = [3, 6, 1, 5, 8];
let s = 0;

let add = function(array){
  array.map(i=>{
    s+=i;
  })
  return s;
}
let sum = add(array);
console.log(sum);


//4.Return all prime numbers in an array
let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(arr1.filter(isPrime));


//5.Return all the palindromes in an array
let arr2 = ["level", "10" , "madam"]
function palindrome(arr){
    let ans=[];
    for(let i=0;i<arr2.length;i++){
        let x=arr2[i];
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
console.log(palindrome(arr2))

//6.Return median of two sorted arrays of the same size.
function medianOf2Arr(arr1,arr2){
  var concat = arr1.concat(arr2);
  concat = concat.sort(function(a,b) {return a-b});
  console.log(concat);

  var length = concat.length;

  if (length % 2) {
    console.log(concat[(length/2)-.5])
     return [(length/2)-.5]  
  } 
  else {
    console.log((concat[length/2] + concat[(length/2) -1])/2)
    return (concat[length/2] + concat[(length/2) -1])/2
  }
}
arr1 = [1,4,7,9]
arr2 = [2,3,5,6]

medianOf2Arr(arr1,arr2)


//7.Remove duplicates from an array
let array1 = ['apple', 'mango', 'apple', 'orange', 'mango', 'orange']

function removeDuplicates(array1) {
  return array1.filter((item,index) => array1.indexOf(item)===index);
}

console.log(removeDuplicates(array1));

//8.Rotate an array by K times
let array2 = [1,2,3,4,5];
let N = array2.length;
let K = 2;

function rightRotate (a,n,K){
  K = K% N;
  for(let i=0;i<N;i++){
    if(i<K){
      console.log(a[n + i - K] + " ")
    }
    else{
      console.log(a[i-K] + " ")
    }
  }
}
rightRotate(array2,N,K)
