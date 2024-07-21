let arr = [1,1,5,3,7];

function secondLargest(arr){
    const uniquearr = Array.from(new Set(arr)); // o(n)

    uniquearr.sort((a,b) => b-a); // o(nlogn)

    console.log(uniquearr);
    if(uniquearr.length >= 2){
        return uniquearr[1];
    }else {
        return -1;
    }
}

// time complexity is o(nlogn)

// console.log(secondLargest(arr));

function secondLargestOptimized(arr) {
    let largest = -1;
    let secondLargest = -1;
    
    for(let i =0; i< arr.length; i++) {
        // console.log(arr[i]);
        // console.log(largest);
        // console.log(secondLargest);
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if (arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// time complexity o(n) n is 1 here so o(1)
console.log(secondLargestOptimized(arr));