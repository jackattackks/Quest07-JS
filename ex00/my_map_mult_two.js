var cars;

function my_map_mult_two(cars){
    for (let i = 0; i < cars.length;i++){
        var num = cars[i] * 2;
        cars[i] = num;
    }
    return cars;
}
// console.log(my_map_mult_two(1,2,3));
