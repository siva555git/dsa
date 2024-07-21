// 
// o(n) // when the operation change based on the input linearly then its time complexity is o(n)
var funnyfunction = (arr) =>{
    for(let i = 0; i<arr.length; i++){
        if(i ===3) return arr[i];
    }
}

// when its looping inside another looping then its time complexity will increase expontionaly like o(n2)
var funnyfunction2 = (n) =>{
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            console.log("something")
        }
    }
}


// o(1) // when it constant operation then the time complexity is 1
var funnyfunction1 = (arr) =>{
    return arr[3];
}

console.time("funnyfunction");
funnyfunction1([1,2,3,4,4]);
console.timeEnd("funnyfunction");



// Space complexity

spaceComplex = (arr) => {
    let sum = 0;
    for(i =0 ; i<=arr.length; i++){
        sum += arr[i];
    }
    return sum; // here the space complexity will on(1)
}
// number boolen undefined null this will have constant value it doesn't vary 

// string, array and object will vary based on the length, so it will increase linear ly 

spaceComplex_2case = (arr) => {
    let mappedArr = [];
    for(i =0 ; i<=arr.length; i++){
        mappedArr.push(1* arr[i]);
    }
    return mappedArr; // here the space complexity will o(n) based on the imput arr length it will vary the 
}

// when we have matrix time of arr when it is formed under the two loop then the space complexity of an array will o(n2)

var createMatrix = function(arr){
    let matrix =[];
    for(let i=0;i<=arr.length;i++){
        matrix[i] = [];
        for(j=0;j< arr.length; j++){
            matrix[i][j] = i+j;
        }
    }
    return matrix;
}