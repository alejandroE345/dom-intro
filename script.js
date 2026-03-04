console.log("Script started");
//Variable to track the number of clicks
let clicks = 0;
let clickValue = 1;
let clickDisplay = document.getElementById("click-display");
let levelDisplay = document.getElementById("level-display");

//Set initial text for click count h1
    clickDisplay.innerText = "Clicks: " + clicks;

//Called each time the image is clicked
function handleClick() {
    console.log("click");
    //Add one to click count
    clicks = clicks + clickValue;
    //Update click count display h1
    clickDisplay.innerText = "Clicks: " + clicks;
    if(clicks == 10) {
        alert("Awesome! You have clicked 10 times!");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;
    } else if(clicks == 50) {
        alert("Nice! You have achieved 50 clicks!");
        levelDisplay.innerText = "Level 3";
        clickValue = 5;
    }

}


