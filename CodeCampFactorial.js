function factorialize(num) {
    let num_copy = num;
    let answer = 0
    if(num===0) {
        return 1;
    }
    for(let i=0; i < num; i++) {
        if(i===0) {
            answer = num;
        } else {
            answer = answer * num_copy;
        }
        num_copy--
    }
    return answer;
}


console.log(factorialize(0));