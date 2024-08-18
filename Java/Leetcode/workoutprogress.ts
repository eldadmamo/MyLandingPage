function workoutprogress(n1:number[],d:number,min:number,max: number):number | boolean{
    let sumone = 0; 
    let sumtwo  = 0;
    let sumtotal = 0;
    for(let i =0; i < n1.length-1; i++){
        if(n1[i+1] - n1[i] !== d){
            return false
        }
        if(n1[0] < min && n1[1] < min){
            sumone = -2;
        }
    }
    for(let j = n1.length - 1; j >=0; j--){
        if(n1[j] > max && n1[j - 1] > max){
            sumtwo = 2;
        }
    }
    return sumtotal = sumone + sumtotal;
}

const workout = workoutprogress([1,2,3,4,5],1,3,3);
console.log(workout);