function Bean(num: number[]): boolean {
    let flag = false;
    for(let i=0; i < num.length; i++){
        flag = false;
        for(let j=0; j < num.length; j++){
            if(num[i] == num[j] + 1 || num[i] == num[j] - 1 ){
                flag = true;
                break;
            }
        }
        if(!flag){
            return false;
        }
    }
    return true;
}

const seek = Bean([2, 10, 9, 3]);
console.log(seek);

