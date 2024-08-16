function isBeanArray(n:number[]){
    let count = 0;
    for(let i=0;  i < n.length; i++){
        if(isPrime(n[i])){
            count += n[i]
        }
        for(let j= 0; j < n.length; j++){
            if(count == n[j]){
                return 1;
            }
        }
    }
    return 0;
}

function isPrime(n: number){
    if (n < 0) return 0;
    for (let i = 2; i < n; i++){
        if(n % 2 == 0){
            return 0;
        }
    }
    return 1;
}

const Beans = isBeanArray([21, 3, 7, 9, 11, 4, 6]);
console.log(Beans);