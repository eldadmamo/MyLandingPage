function isFibonacci(n: number):number{
    let value = 0;
    let fabi1 = 0;
    let fabi2 = 1;
    for(let i=1; i <=n ;i++){
        value = fabi1 + fabi2;
        if(n == value){
            return 1;
        }
        fabi1 = fabi2;
        fabi2 = value;
    }
        
    return 0;
}

const vvv = isFibonacci(6);
console.log(vvv);