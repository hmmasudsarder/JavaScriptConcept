function stopWatch(){
    let coundet = 0;

    return function(){
        coundet++;
        return coundet;
    }
}

const watch1 = stopWatch();
console.log(watch1());