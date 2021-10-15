// You have a test for a class and we want to know the average results for the class. 
// Write a function that takes an array of hash with all of the grades/marks for a given test and returns an average grade for the entire class.
// Input are in JSON (be careful ruby users, "string": is not a symbol)

// it will take in a NAME AND A GRADE
// const person = [{}
// person ['name'] = 'bob';
// person ['grade'] = 65;

function hashStringToInt(s, tableSize){
    let hash = 17;

    for(let i = 0; i < s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}


class HashTable {
    table = new Array(17); 

    setItem = (key, value) =>{
        const idx = hashStringToInt(key, this.table.length);
        this.table[idx] = value;
    }    

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);
        return this.table[idx];
    }
}

const myTable = new HashTable();
// myTable.setItem("name", "bob");
// myTable.getItem("name");
// myTable.setItem("grade", 65);
// console.log(myTable.getItem("name"));
// console.log(myTable.getItem("grade"));

function my_average_mark(param){
    for (i = 0; i < 10; i++){
        myTable.setItem("name", param[i]);
        myTable.setItem("integer", param[i]);
    }
    for (i = 0; i < 10; i++){
        var int = myTable.getItem("integer", param[i]);
        total = int + myTable.getItem("integer", param[i+1]);
    }

    return total / param.length;
    
    // get item, add them all together, divide by the length


}