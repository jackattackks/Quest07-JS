function my_array_uniq(param_1) {
    let unique = [];
    param_1.forEach((i) => {
    if (unique.indexOf(i) === -1){
    unique.push(i)
    }
    })
    return unique;
    };


