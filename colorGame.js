var numSquares = 6
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easyBtn");
// var hardButton = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode buttons event Listener
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i =0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?	numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
	
		//add clicklistener to squares
		squares[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}
			else{
				//alert("Incorrect!! Try Again...")
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})
colorDisplay.textContent = pickedColor;


function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	//add number colors to array
	for(var i = 0; i < num; i++){
		//
		arr.push(randomColor())

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



// easyButton.addEventListener("click", function(){
// 	hardButton.classList.remove("selected");
// 	easyButton.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none"
// 		}
		
// 	}

// })


// hardButton.addEventListener("click", function(){
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	// change colors of squares
// 	messageDisplay.textContent = "";
// 	for(var i = 0; i<squares.length; i++){
		
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block"
		
// 	}

// })

