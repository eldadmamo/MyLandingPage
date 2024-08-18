function isPascal(n:number):number{
   let value = 0;
   let i = 1;
    while( value < n ){
        value += i;
        i++;
    }
    if(n == value){
        return 1;
    }
    return 0;
}

const contains = isPascal(6);
console.log(contains);