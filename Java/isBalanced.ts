function isBalanced(n:number[]):number| boolean{
    let value = true;
    let second = true;

    for(let i=0; i < n.length; i+=2){
        if((n[i] % 2 !== 0 && i % 2 == 0) || (n[i] % 2 == 0 && i % 2 !== 0)) {
            value = false;
        }
    }
    for(let j=1; j < n.length; j+=2){
        if((n[j] % 2 == 1 && j % 2 !== 1) || (n[j] % 2 !== 1 && j % 2 == 1)){
            second = false;
        }
    }
    if((!value && second) || (value && !second)) return 0;
    return 1;
}

const bang = isBalanced([2, 3, 6, 7]);
console.log(bang);