// input  [1,2,3]        ==> [1,1,3]


function removeDuplicates(num){
    
    for(i=0; i< num.length-1; i++){
        if(num[i] === num[i+1]){
            num.splice(i+1, 1);
            i--;
        }
    }
    // console.log("num", num);
    return num;
}


let num = [1,4,2,4,,5,7,1,2]
let nums = [1,1,2,2,4,6,7,7]
// console.log("removeDuplicates",removeDuplicates(num));

function removeDuplicatesOptimzed(number){
 let i = 0; 
 // i = 1
 for (j= 1 ; j< number.length; j++){
    if(number[i] !== number[j]){
        i++;
        number[i] = number[j];
    }
    // console.log("loop "+j , number);
 }
 return i + 1;
}

console.log("removeDuplicatesOptimzed",removeDuplicatesOptimzed(nums));
console.log("removeDuplicatesOptimzed",nums);