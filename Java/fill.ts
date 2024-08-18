function Fill(a:number[],num,value){
    const sum = new Array(value);
    let j=0;
    for(let i=0; i < value; i++){
        sum[i] = a[j];
        j++;
        if(j==num){
            j = 0;
        }
    }
    return sum;
}

const love = Fill([1,2,3,5,6,7,8,4,3],3,7);
console.log(love);