function sumIsPower(a: number[]):number{
    let sum = 0;
    let count = 0;
    for(let i=0; i < a.length; i++){
        sum += a[i];
    }
    while(sum!=1){
        if (sum % 2 == 1) return 0;
        sum /=2;
    }
    if (sum==1) return 1;
    return 0
}
