function isDual(n:number[]):number{
    for(let i=0; i < n.length; i++){
        let count = 0;        
        for(let j = 0; j < n.length; j++){
            if(n[i] == n[j]){
                count++;
            }
        }
        if(count > 2) return 0;
    }
    return 1;
}

const jocker = isDual([1, 2, 1, 3, 3, 2]);
console.log(jocker);