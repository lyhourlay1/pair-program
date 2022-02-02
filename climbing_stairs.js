// recursove 
// return 1 if n ==1
// return 2 if n==2
// recurvie call 

function solution(n){
    if (n ===1) return 1 
    if(n===2 ) return 2 
    return solution(n-1) + solution(n-2)
}

console.log(solution(2))
console.log(solution(3))
console.log(solution(4))
console.log(solution(5))

// 1 => 1
// 2 => 2
// 3 => 3
// 4 => 5 
// 1. 1+1+1+1
// 2. 1+1+2
// 3. 2+1+1
// 4. 1+2+1
// 5. 2+2

// 5=> 8
// 1. all 1
// 2. 1112
// 3. 2111
// 4. 1211
// 5. 1121
// 7. 221
// 8. 122
// 9. 212

