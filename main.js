// console.log("21 01 14 JS DOM Events Primary");

// selected required elements
let gridCells = document.querySelectorAll(".gridCell");
// console.log(gridCells);
let cellOne = document.querySelector("#cellOne");
// console.log(cellOne);
let cell = document.querySelector("#cellTwo");
// console.log(cellTwo);
let updateStylingBtn = document.querySelector("#updateStyling");
// console.log(updateStylingBtn);

// defined event handler for listeners set in HTML that update the background color of all grid cells using inline styling
function greenBackground(){
    // console.log("Green button clicked!");
    gridCells.forEach(cell => cell.style.backgroundColor = "green");
}
blueBackground = () => {
    // console.log("Blue button clicked!");
    gridCells.forEach(cell => cell.style.backgroundColor = "blue");
}
function redBackground(){
    // console.log("Red button clicked!");
    gridCells.forEach(cell => cell.style.backgroundColor = "red");
}

// Added event listener : when your mouse enters the first cell, update heading
cellOne.addEventListener("mouseenter", () => cellOne.innerHTML = `<h1>You entered this cell</h1>`);

// function to toggle a class on the second cell
updateStyling = () => {
    cellTwo.classList.toggle("specialStyling");
}
// add event listener : when the fourth button is clicked, call a function
updateStylingBtn.addEventListener("click", updateStyling);