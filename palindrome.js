// input 121 === 121 true
// input 20 is padilinddaroe false


function isPalindrome(x){
    return x === +x.toString().split("").reverse().join("");
}

console.log(isPalindrome(20));