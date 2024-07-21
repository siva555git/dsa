let nums = [-2.-1,-3,4,-1,2,1,-5,4];




// function maxSubArray(numbs){
//     let maxSum = numbs[0];
//     let startIdx = 0;
//     let endIdx = 0;
//     for(let i=0; i< numbs.length;i++){
//         let sum  = 0;
//         for(j=i; j< numbs.length;j++){
//             sum = sum + numbs[j];
//             console.log("i",i, "j",j,"Maxsum", maxSum, "sum", sum);
//             if(maxSum < sum){
//                 maxSum = sum;
//                 startIdx = i
//                 endIdx = j
//             }
                
//         }
//     }
//     return { sum : maxSum , sumArray : numbs.slice(startIdx, endIdx+1)} 
// }

// console.log(maxSubArray(nums));

// alg is
// let sum =0 ; max = num[0]
// sum = sum + num[i];
// if(sum > max) sum = max
// if(sum < 0)  sum = 0


let numbers = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubArrayOptimzation(numbs){
    let sum =0;
    let max = numbs[0];

    for(let i=0;i<numbs.length;i++){
        sum += numbs[i];

        if(sum > max){
            max = sum;
        }
        console.log("sum",sum, "max", max);
        if(sum < 0)
            sum = 0
    }
    return max;
}

console.log(maxSubArrayOptimzation(numbers));
