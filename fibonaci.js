// f(n) = f(n-1) + f(n-2);

var func = (n) => {
    var arr = [0,1];
    for(i = 2 ;i<=n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

// console.log(func(5));

var recursion = (n) => {
    if(n<=1) return n;

    return recursion(n-1) + recursion(n-2);
}

console.log(recursion(5));