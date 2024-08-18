function isNormal(n: number): number{
    for(let i= 2; i < n; i++){
        if(n % i == 0){
            if(i % 2 == 1){
                return 0;
            }
        }
    }
    return 1;
}

const lovekkk = isNormal(4);
console.log(lovekkk);