// You have a test for a class and we want to know the average results for 
// the class. Write a function that takes an array of hash with all of the grades/marks 
// for a given test and returns an average grade for the entire class.
// Input are in JSON (be careful ruby users, "string": is not a symbol)

// it will take in a NAME AND A GRADE
// const person = [{}
// person ['name'] = 'bob';
// person ['grade'] = 65;

function my_average_mark(array) {
// taking in an array 
// total is initialized to 0, will use later to get average
    var total = 0;
// below iterate through the array with for loop
    for (i = 0; i < array.length; i++){
// going through the array and look for the KEY (integer) 
// grab integer key and add it to total
        total += array[i]['integer'];
    }
// taking the sum of all the grades (total) and dividing by the length
// need to set precision to only one decimal    
    return (total / array.length).toFixed(1);
}