function isHollow(a:number[]):number{
    let zerocount = 0;
    if(a.length < 3) return 0;
    for(let i=0, j = a.length - 1; i < a.length; i++,j--){
        if(a[i]!==0){
            if(a[j] === 0) return 0;
        }
        if(a[i]===0){
            if(a[j]!==0) return 0;
            zerocount++;
        }
    }
    if(zerocount>=3) return 1;
    return 0;
}

const loving= [1,2,0,0,0,3,4];
console.log(isHollow(loving));