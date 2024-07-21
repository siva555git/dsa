
arr = ["apple","orange","bannana","grapes"];
var i =0;
while(i < arr.length){
    console.log(arr[i]);
    i++;
}

const numbers = [1,3,4,5];

const newnumbers = numbers.map((item, index, array)=>{
    return item + 4;
});

const sumOfNumbers = numbers.reduce((prev,item) =>{
    return prev + item;
},0);


const someResult = numbers.some((item, index, array)=>{
    return item > 1;
});

const everyResult = numbers.every((item, index, array)=>{
    return item >= 1;
});


const findResult = numbers.find((item, index, array)=>{
    return item === 3;
});

const findIndexResult = numbers.findIndex((item, index, array)=>{
    return item === 3;
});

const nums1 = [1,4];
const nums2 = [2,3];

const finalnums = [...nums1, ...nums2];

function sum(...numbers){
    return numbers;
}
console.log(sum("1",23,34));


// cancal combintes one or more array to an array
const concatArr = nums1.concat(numbers, nums2);

console.log("Concat debug" , concatArr , nums1 , numbers, nums2);



// slice used start and end start will be the index and end will be index (both postive and nagative but it take that index for operation) also it will not change original array
const arrToSlice = ["a","b","c","d"];
const sliceArr = arrToSlice.slice(1,-1)

// splice will have start , count and items if any need to add
// IT modify the original array and return the deleted values
const spliceArr = ["e","f", "g", "h", "i"];
const spliceReturn = spliceArr.splice(1, 2, "j");


// fill 
// first param => will the the array with the value what we given
// second para, => where it will start (optional) by default it will change all the items
// third para, => where it will end (optional) by default it will change all the items

let fillArr = [2,6,7,9];
fillArr.fill(0,1,2);


// flat
const nonFlat = [1,2,3,[[4,5],2]];
const flatArr = nonFlat.flat(2);

// reverse
const arrToReverse = [1,3,8,7,5];
reversedArr = [1,3,8,7,5].reverse();


// sort 
// by default it will sort in asc
// if we use callback with values then 
// it will substract the a and b if it is > 0 then it will sort in asc if it is in < 0 then desc
const arrToSort = [5,7,2,9,1]
arrToSort.sort();
arrToSort.sort((a,b) => a - b); // asc
arrToSort.sort((a,b) => b - a); // desc


console.log("reduce",sumOfNumbers);
console.log("map",newnumbers);  
console.log("someResult",someResult);
console.log("everyResult",everyResult);  
console.log("findResult",findResult);  
console.log("findIndex",findIndexResult);  
console.log("spreed",finalnums);  
console.log("rest",sum(nums1,nums2,"js", 0));  
console.log("concat",concatArr);  
console.log("slice",sliceArr);  
console.log("splice",spliceArr);  
console.log("spliceReturn",spliceReturn);  
console.log("fill",fillArr);  
console.log("flat",flatArr);
console.log(arrToReverse,"reverse",reversedArr);  
console.log(arrToSort,"descsort",arrToSort);  


0, 1, 3, 2 ,4

- 1 

 1 - large
 0 - second_large

 3 - large
 1 - second_large

 