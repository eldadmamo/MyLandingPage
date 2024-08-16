function isWave(a: number[]){
    for(let i=0; i < a.length - 1; i++){
        if((a[i] % 2 == 1 && a[i+1] % 2 == 1) || (a[i] % 2 == 0 && a[i+1] % 2 == 0)){
            return 0;
        }
    }
    return 1;
}

const love = isWave([1,2,3,3]);
console.log(love);