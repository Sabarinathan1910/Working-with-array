let a = ['sabari', 99, true, 'saro', 999];
let dis = document.getElementById('display');
let resultContainer = document.getElementById('resultContainer');

function updateDisplay() {
    var arrayString = a.join(', ');
    dis.textContent = arrayString;
}

document.getElementById("display").addEventListener("click", updateDisplay);

let inputToAdd = document.getElementById("inputtoadd");
let addButton = document.getElementById("addon");

addButton.addEventListener("click", function () {
    let inputValue = inputToAdd.value;
    if (inputValue) {
        a.push(inputValue);
        updateDisplay();
        inputToAdd.value = ""; // Clear
    }
});

function removeElement() {
    // to remove the first element
    a.shift();
    updateDisplay();
}

document.getElementById("removeon").addEventListener("click", removeElement);

function findElementByIndex() {
    let indexToFind = document.getElementById("indexToFind").value;

    if (indexToFind >= 0 && indexToFind < a.length) {
        let foundElement = a[indexToFind];
        let resultButton = document.createElement("button");
        resultButton.textContent = foundElement;
        // Append the result
        resultContainer.appendChild(resultButton);
    } else {
        resultContainer.textContent = "Please enter a valid index.";
    }

    // Display the array
    updateDisplay();
}

document.getElementById("findButton").addEventListener("click", findElementByIndex);

document.getElementById("sortArray").addEventListener("click", function () {
    a.sort(function (a, b) {
        // Compare various data type
        return String(a).localeCompare(String(b));
    });

    updateDisplay();
});

document.getElementById("filterNumbers").addEventListener("click", function () {
    let numbersOnly = a.filter(function (item) {
        return typeof item === 'number';
    });

    var arrayString = numbersOnly.join(', ');
    dis.textContent = arrayString;
});

document.getElementById("reverseString").addEventListener("click", function () {
    a = a.map(function (item) {
        if (typeof item === 'string') {
            return item.split('').reverse().join('');
        } else {
            return item;
        }
    });

    updateDisplay();
});
updateDisplay();