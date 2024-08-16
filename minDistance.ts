function minDistance(n: number): number{
    let min = n - 1;
    let main = 0;
    let previous = 1;
    for(let i=2; i < n; i++){
        if( n % i == 0){
            main = i - previous;
            if(main < min)
                min = main;
            previous = i;
        }
    }
}

