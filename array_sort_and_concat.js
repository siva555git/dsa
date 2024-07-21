function sortedArray(arr1, arr2){
  let mergedArr = arr1.concat(arr2);
  let removedDuplicateValues = removeDuplicates(mergedArr);
  removedDuplicateValues.sort();
  return removedDuplicateValues;
}

function removeDuplicates(arr){
  let uniqueArr = [];
  for(let i =0; i< arr.length; i++){
    for(let j =0; j< arr.length; j++){
        if(arr[i] === arr[j] && i === j){
          if(!uniqueArr.includes(arr[j]))
          uniqueArr.push(arr[j])
        }
    }
  }
  
  return uniqueArr;
}

// console.log(removeDuplicates([1,1,3,4]));



console.log(sortedArray([1,2], [6,8]));

