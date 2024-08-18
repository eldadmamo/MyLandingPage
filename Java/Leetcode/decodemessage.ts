function decodemessage(n1:number[],x:number):number[]{

    const result = new Array(n1.length).fill(0);
    
    for(let i=0; i < n1.length; i++){
        if(x > 0) {
            let sumone = 0;
            for(let j=1; j <=x; j++){
                sumone +=  n1[(i+j) % n1.length];
            }
            result[i] = sumone;
        } else if (x < 0) {
            let sumtwo = 0;
            for(let k=1; k < Math.abs(x); k++){
                sumtwo = n1[(i - k + n1.length) % n1.length];
            }
            result[i] = sumtwo;
        } else {
            result[i] = 0;
        }
    }
    return result
}

const recode = decodemessage([1,2,3,4],2);
console.log