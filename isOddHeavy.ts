function isOddHeavy(n: number[]):number{
    let value = 0;
    let second = 0;
    for(let i=0; i < n.length; i++){
        if(n[i] < 0) return 0;
        if((n[i] % 2 == 1)){
            value = n[i];
        }
        for(let j = 0; j < n.length; j++){
            if(n[j] % 2 == 0){
                second = n[j]
            }
        }
        if((value < second)){
            return 0;
        }
    }
    return 1;
}

const gmail = isOddHeavy([11, 4, 9, 2, 8]);
console.log(gmail);