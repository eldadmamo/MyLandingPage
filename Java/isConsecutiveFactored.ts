function isConsecutiveFactored(n:number){
    let count = 0;
    for(let i=2; i < n; i++){
        if(n % i == 0){
            count = i;
        }
        for(let j = 2; j < n; j++){
            if (n % j ==0){
                if(j+1 == count){
                    return 1;
                }
            }
        }
    }
    return 0;
}

const consecutive = isConsecutiveFactored(90);
console.log(consecutive)