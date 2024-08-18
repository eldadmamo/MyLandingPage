function reverseinteger(n:number):number{
    let num = n; 
    let reve = 0;
    let flag = n < 0 ? -1 : 1;
    while(num > 0){
        let digit = num % 10;
        reve = reve * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (reve > 0x7FFFFFFF) return 0;

    return reve * flag;
}

const blum = reverseinteger(1234);
console.log(blum);