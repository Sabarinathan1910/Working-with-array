let a = ['sabari', 99, true, 'saro', 999];
let dis = document.getElementById('display');
var arrayString = a.join(', ');
dis.textContent = arrayString;

    let inputToAdd = document.getElementById("inputtoadd");
    let addButton = document.getElementById("addon");
    
    addButton.addEventListener("click", function () {
        let inputValue = inputToAdd.value;
        if (inputValue) {
            a.push(inputValue);
            arrayString = a.join(', ');
            dis.textContent = arrayString;
            inputToAdd.value = ""; // Clear the input field
        }
    });
   
    function removeElement() {
        // Use shift() to remove the first element of the array
        a.shift();
        arrayString = a.join(', ');
        dis.textContent = arrayString;
    }
    function findElementByIndex() {
        let indexToFind = document.getElementById("indexToFind").value;
        let foundElement = "";
    
        if (indexToFind >= 0 && indexToFind < a.length) {
            foundElement = a[indexToFind];
        } else {
            foundElement = "Please enter a valid index.";
        }
    
        // Display the found element in the 'dis' element
        dis.textContent = ` ${foundElement}`;
    }