console.log("Script started");
//Variable to track the number of clicks
let clicks = 0;
let clickDisplay = document.getElementById("click-display");

//Set initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

//Called each time the image is clicked
function handleClick() {
console.log("click");
//Add one to click count
clicks = clicks + 1;
//Update click count display h1
clickDisplay.innerText = "Clicks: " + clicks;
}