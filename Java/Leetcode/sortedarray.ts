function sortedarray(n1: number[], n2:number[]):number{
    let values:number[] = [];
    
    values.push(...n1);

    values.push(...n2);

    values.sort((a,b) => a - b);

    let length = values.length;

    if (length % 2 == 1){
        return values[Math.floor(length / 2)]
    } else {
        let num1 = Math.floor(length / 2) - 1;
        let num2 = Math.floor(length / 2);

        return (Math.floor(values[num1] + values[num2]) / 2);
    }

}

const special = sortedarray([1,3],[2]);
console.log(special);