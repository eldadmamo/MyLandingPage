function highestdigit(n1 : number){
    let maximum = 0;
    let i = 0;
    let value = 0;
    while(n1 > 0){
        value[i] = n1 % 10;
        n1 = n1 / 10;
        i++;
    }
    if(value[i] > maximum){
        maximum = value[i];
    }

    return maximum;
    
}

const loving = highestdigit(12899)
console.log(loving)