

init();
 
function init(){
    //Declared variables
    var numSquares = 6;
    var colors = generateRandomColors(numSquares);
    var squares = document.querySelectorAll(".square");
    var pickColor = pickedColor();
    var colorDisplay = document.querySelector("#colorDisplay");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var reset = document.querySelector("#reset");
    var easy = document.querySelector("#easy");
    var hard = document.querySelector("#hard");

//pickColor text
colorDisplay.textContent = pickColor;

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    //pick a new random colors
    pickColor = pickedColor();
    //change colorDisplay to match picked color;
    colorDisplay.textContent = pickColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    for (var i = 0; i < squares.length; i += 1) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

})
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //pick a new random colors
    pickColor = pickedColor();
    //change colorDisplay to match picked color;
    colorDisplay.textContent = pickColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";

    for (var i = 0; i < squares.length; i += 1) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }

})

for(var i = 0; i< squares.length; i+= 1){
    //add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listeners to all the squares
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    
    
    if (clickedColor === pickColor) {
        //alert("Correct");
        messageDisplay.textContent = "Correct";
        changeColor(pickColor);
        h1.style.background = pickColor;
        reset.textContent = "Play Again";

    }
    else {
        //alert("Wrong");
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }

    });
};
//Reset Eventlistener
    reset.addEventListener("click", function () {
        // generate all new colors
        colors = generateRandomColors(numSquares);
        //pick a new random colors
        pickColor = pickedColor();
        //change colorDisplay to match picked color;
        colorDisplay.textContent = pickColor;

        h1.style.backgroundColor = "steelblue";

        this.textContent = "New Colors";
        for (var i = 0; i < squares.length; i += 1) {
            squares[i].style.backgroundColor = colors[i];
        }
    });




}
function changeColor(pcolor){
    for (var i = 0; i < squares.length; i += 1) {
        squares[i].style.backgroundColor = pcolor;
    }
}
function pickedColor(){
    var ind = Math.floor(Math.random() * colors.length);
    return colors[ind];
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num;i+=1){
       arr.push(randomColors());
    }
    return arr;
}
function randomColors(){
    var r = Math.floor(Math.random() *  256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";

}




