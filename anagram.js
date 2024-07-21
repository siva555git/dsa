let isAnagram = ((string1, string2) => {
    let s1 = string1.split("").join();
    let s2 = string2.split("").join();
    if(s1 === s2){
        return true;
    }
    return false;

});

let optimzed = ((s, t) => {
    if(s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for(i=0;i<s.length;i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }
    console.log(obj1);
    console.log(obj2);
    for( const key in obj1) {
        if(obj1[key] !== obj2[key]) return false;

        
    }
    return true;
    
})

// console.log(isAnagram("car", "car"));
console.log(optimzed("car", "cer"));