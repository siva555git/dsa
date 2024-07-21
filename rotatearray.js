let arr = [1,4,6,8,9,4];

let n = 3;

function rotateArray(arr, n) {
    console.log(arr.length, n);
    if(arr.length > n){
        n =  n % arr.length ;
    }
    console.log("size", n);
    const rotate = arr.splice(arr.length - n, arr.length);
    console.log(rotate);
    arr.unshift(...rotate);

    return arr
}

// console.log(rotateArray(arr,3));

function rotateArrayOptimized(arr, n){
    if(arr.length > n){
        n =  n % arr.length ;
    }

    reverse(arr, 0, arr.length -1);
    reverse(arr, 0, n -1);
    reverse(arr, n, arr.length -1);

    return arr;
    
}

function reverse(arr, left, right){
    while(left < right) {
        let temp = arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
    }
}

console.log(rotateArrayOptimized(arr,3));

1,2,3,4,5 
5,4,3,2,1
4,5,1,2,3

4,5,1,2,3
