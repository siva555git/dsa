// ques 1

function factorial(num) {
    if(num === 0) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));

// ques 2 

function rangeofnumber(start, end) {

    if(end <= start){
        return [];
    }else{
        const num = rangeofnumber(start, end-1)
        num.push(end);
        return num;
    }

}
console.log(rangeofnumber(0,5));

// ques 3

function isPalindgrome(string){
    if(string.length <= 1){
        return true;
    }

    if(string[0] != string[string.length - 1]){
        return false;
    }

    return isPalindgrome(string.slice(1,-1))
}

console.log(isPalindgrome("geodeg"));


// fibocci

function fibocci(number) {
    var arr = [0,1];
    // console.log(arr[arr.length-2]);
    // console.log(arr[arr.length-1]);
    // console.log(arr[arr.length-1] + arr[arr.length-1]);
    for(let i=2; i<=number;i++ ){
        arr.push(arr[arr.length-2] + arr[arr.length-1]);
    }
    return arr;   
}

// console.log(fibocci(5));
let fibRecursionArr = []
function fibRecursion(n) {
    if(n<=1)return fibRecursionArr.push(n);
    return fibRecursionArr.push(fibRecursion(n-1)+fibRecursion(n-2));
}

console.log(fibRecursion(5));
console.log(fibRecursionArr);

// reverse string 


function reverseString(str){
    if(str === "")
        return "";

    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));

// reverseString( ello + h)

// llo + e

// lo + l 


// get all possible substring for this arr [1,2,3]


function getSubArray(nums){
    let result = [];
    let temp = [];

    function rescurise(nums, i) {

        if(i === nums.length){
            console.log("result", result);
            return result.push([...temp]);
            console.log("temp", temp);
        }
        console.log("nums push =>"+i, nums[i]);
        temp.push(nums[i]);
        rescurise(nums, i+1);
        // return;
        console.log("nums pop =>"+i, nums[i]);
        temp.pop(nums[i]);
        rescurise(nums, i+1);
        console.log("temp outer", temp);
    
    }
    console.log("nums", nums);
    rescurise(nums, 0);
}

console.log(getSubArray([1,2,3]));

