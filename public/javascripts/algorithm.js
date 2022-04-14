function fib(n) {
    let result = [ 0, 1]; 
    for(let i=2; i<=n; i++){
        let a = result[i - 1]; 
        let b = result[i - 2];
        result.push(a+b);
    }
    return result[n] 
}

function solution(...n){
        let inputs; inputs.push(...n); let absolutes = [];
        for(let i; i<inputs.length;i++) { absolutes.push(parseInt(inputs[i])); }
            if(1<absolutes.length<1000) {
            for(let i; i < absolutes.length; i++){
                
            }
            let result;
            result += absolutes[i]; 
            return result;
            }
            else{
                return ;
            }
}