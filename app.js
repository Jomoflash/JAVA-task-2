//Class declaration and constructor

function MyObject(principal, time) {
    this.principal = principal;
    this.time = time;

};


var data = [
    new MyObject(2500, 1.8),
    new MyObject(1000, 5),
    new MyObject(3000, 1),
    new MyObject(2000, 3)
];

function interestCalculator(arr) {
    var interestData = [];

    // A loop to handle each indvidual object passed into this method/function
    for (var i = 0; i < arr.length; i++) {

        if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3)
            arr[i].rate = 3;

        else if (arr[i].principal >= 2500 && arr[i].time >= 3)
            arr[i].rate = 4;

        else if (arr[i].principal < 2500 || arr[i].time <= 1)
            arr[i].rate = 2;

        else arr[i].rate = 1;


        // Generates the interst to be paid 
        arr[i].interest = (arr[i].principal * arr[i].rate * arr[i].time) / 100;

        interestData.push(arr[i]); //Appends the array with the modified object
    }

    console.log(interestData);
    return interestData;
}

// Calling the function
interestCalculator(data);