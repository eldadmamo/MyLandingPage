function Merra(num: number[]): boolean | number {
    let containsPrime = false;
    let containsZero = false;
    for(let i=0; i < num.length; i++){
        if(isPrime(num[i])){
            containsPrime = true;
        }
        if(num[i] == 1){
            containsZero = true;
        }
    }
    if (containsPrime == containsZero) {
        return 1;
    }

    return 0;
}


function isPrime(a: number): number{
    for(let i=2;i< a;i++){
        if(a%i==0){
            return 0;
        }
    }
    return 1;
}

const love = Merra([7, 6, 10]);
console.log(love)