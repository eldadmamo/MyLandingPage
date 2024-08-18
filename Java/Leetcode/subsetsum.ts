function subsetsum(n1: number[]){
    let sumone = 0;
    let sumtwo = 0;
    let sumtotal = 0;
    for(let i=0; i < n1.length -1; i++){
        sumone += n1[i] + n1[i+1];
    }
    for(let j =0; j < n1.length; j++){
        sumtwo += n1[j]
    }
    return sumtotal = sumone + sumtwo; 
    
}

const subsum = subsetsum([1,4,2,5]);
console.log(subsum);