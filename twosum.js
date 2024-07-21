let x = [1,2,3,4]
let target = 6;

function twosum(numbers , target){
    for(let i=0;i< numbers.length; i++){
        for(let j=0;j< numbers.length; j++){
            if(numbers[i]+ numbers[j] === target && i !== j){
                return [i,j];
            }
        }
    }
}

console.log(twosum(x, target));
// 1 +2 , 1+3, 1+4

// optimized solution


function twosumoptimse(numbers , target){
    let obj = {}
    for(let i=0; i<= numbers.length; i++){
        if(obj[target - numbers[i]] >= 0){
            return [obj[target - numbers[i]], i]
        }else{
            obj[numbers[i]] = i
        }
    }
    

}

console.log(twosumoptimse(x, target));


// {
//     "1", 0
//     "2", 0
//     "3", 0
//     "4", 0
// }

