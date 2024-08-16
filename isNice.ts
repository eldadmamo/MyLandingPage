    function isNice(n: number[]): number | boolean{
        
        
        for(let i=0; i < n.length; i++){
            let addingone = false;
            for(let j=0; j < n.length; j++){
                if((n[i] + 1 == n[j])){
                    addingone = true;
                    break
                }
            }
            if(!addingone) return 0;
        }
        return 1;
    }

    const loves = isNice([0, ­1, 1]);
    console.log(loves)