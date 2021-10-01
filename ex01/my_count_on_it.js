var cars;

function my_count_on_it(cars){
    for (let i = 0; i < cars.length;i++){
        var num = cars[i].length;
        cars[i] = num;
    }
    return cars;
}