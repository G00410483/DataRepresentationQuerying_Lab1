let myArray = ["walk", "drive", "run", "fly"];

// Add task arrow function
let addTasks = (newTask) => {
    // Print the number of task before inserting new task
    console.log("Number of items in the array: " + myArray.length);
    // Insert new task to array
    myArray.push(newTask)
    // Print the new number of elements in the array
    console.log(newTask + " is inserted in the array");
    console.log("Number of items in the array after adding new task: " + myArray.length);
    console.log("---------");
}
// Trigger the function
addTasks("cycle");

// List all tasks arrow functions
let listTasks = () => {
    // For loop to iterate over all elements in the array
    for (var i = 0; i < myArray.length; i++)
    {
        // Print all tasks
        console.log("Task " + (i + 1) +": " + myArray[i]);
    }
    console.log("---------");
}
// Trigger the function
listTasks();

// Delete specific elemet in the array
let deleteTask = (task) => {
    // For loop to find specific element in the array
    for (var i = 0; i < myArray.length; i++)
    {
        // If elements are same delete the element
        if (myArray[i] == task)
        {
            myArray.shift();
        }
        // Print out the all elements in the arrays
        console.log("Task " + (i + 1) +": " + myArray[i]);
    }
    console.log("---------");
}
// Trigger the function
deleteTask("drive");