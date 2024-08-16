function isBunker(num: number[]): number {
    let hasPrime = false;
    let hasOne = false;
    
    for (let i = 0; i < num.length; i++) {
        if (isPrime(num[i])) {
            hasPrime = true;
        }
        if (num[i] == 1) {
            hasOne = true;
        }
    }

    if (hasPrime && hasOne) {
        return 1;
    } else {
        return 0;
    }
}

const love = isBunker([6, 10, 1]);
console.log(love); 

function isPrime(n: number){
    if (n < 2) return 0;
    for(let i=2; i < n; i++){
        if(n % i == 0){
            return 0;
        }
    }
    return 1;
}