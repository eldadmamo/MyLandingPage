function isFabonacci(n: number){
    let sum = 0;
    let n1 = 0;
    let n2 = 1;
    for(let i=1; i <=n; i++){
        sum = n1 + n2;
        if(sum==n){
            return 1;
        }
        n1=n2;
        n2=sum;
    }
    return 0;
}

