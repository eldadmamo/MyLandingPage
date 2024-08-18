function turingmax(n1: number[],k: number):number{
    let maxi = 0;
    for(let i =0; i < n1.length; i++){
        for(let j =i; j < n1.length ; j++){
            if(n1[i] + n1[j] < k){
                maxi = n1[i] + n1[j];
            }
        }   
    }
    return maxi;
}

const gmail = turingmax([1,2,10,13], 15);
console.log(gmail);