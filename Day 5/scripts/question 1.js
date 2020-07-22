//Question 1
/*write a program which does the following things
        1.Takes a positive number from the user.
        2.Makes an array of number till the number given by user.
        3.Use higher order function to filter the odd numbers
        4.Generate and array of the cubes of the filtered number.*/



let value = prompt("Enter the positive elements of array or enter -1 to exit.")
        var array = []
        while(value != -1){
            if(value > 0){
            array.push(value)
            }
            value = prompt("Enter next value or -1 to exit")
        }
        let result = array.filter(el=>el%2!=0).map(el=>el**3);
        console.log(result)