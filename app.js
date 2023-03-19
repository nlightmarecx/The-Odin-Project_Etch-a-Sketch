const board_Div = document.getElementById("board_Div");
const divSquare = document.getElementsByClassName("divSquare");

const colorGrabber_Div = document.getElementById("colorGrabber_Div");

const boardSizeSlider = document.getElementById("boardSizeSlider");
const boardSizeLabel_Num = document.getElementById("boardSizeLabel_Num");


const BOARD_WIDTH = 300;
const BOARD_HEIGHT = BOARD_WIDTH*2 // /1.5; make 3x4 board

const boardWidth = document.getElementById("board_Div").style.width = BOARD_WIDTH+"px";
const boardHeight = document.getElementById("board_Div").style.height = BOARD_HEIGHT+"px";
const toolsWidth = document.getElementById("tools_Div").style.width = BOARD_WIDTH/1.6+"px";


let SIZE_BOARD_X = boardSizeSlider.value;
let SIZE_BOARD_Y = SIZE_BOARD_X*2;

let COLOR_BORDER = "rgba(211, 211, 211, 0.25)";
let SIZE_BORDER = 1;

let SIZE_SQUARE_X = BOARD_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
let SIZE_SQUARE_Y = BOARD_HEIGHT/SIZE_BOARD_Y-SIZE_BORDER;

//END OF Board DIV
//................................................

//................................................
//START OF TOOLS DIV
const inkColor = document.getElementById("inkColor");
const gridLinesOff = document.getElementById("#gridLinesOff");

let currentInkColor = "#0000ff";
let gridLinesOn = true;
let boardColorOn = true;


//......................Board Div..............................
//....................................................MAKE BOARD DIVs
//changeBoardSize();
createBoard(SIZE_BOARD_X);

function createBoard(size){
    SIZE_BOARD_Y = size*2;

    board_Div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board_Div.style.gridTemplateRows = `repeat(${SIZE_BOARD_Y}, 1fr)`;

    for(let i=0; i<size*SIZE_BOARD_Y; i++){
        const divSquare = document.createElement("div");
        divSquare.setAttribute("id", "divSquare"+i)
        divSquare.setAttribute("class", "divSquare");
        board_Div.insertAdjacentElement("beforeend", divSquare);
        divSquare.addEventListener('mouseover', colorDiv);
    }
    removeGridLines();
}

//....................................................ROUND THE CORNERS
const topLeftCorner = document.getElementById("divSquare0");
const topRightCorner = document.getElementById("divSquare"+(SIZE_BOARD_X-1));
const bottomRightCorner = document.getElementById("divSquare"+(SIZE_BOARD_X*SIZE_BOARD_Y-1));
const bottomLeftCorner = document.getElementById("divSquare"+(SIZE_BOARD_X*SIZE_BOARD_Y-SIZE_BOARD_X));

topLeftCorner.style.borderRadius = "40% 0 0 0";
topRightCorner.style.borderRadius = "0 40% 0 0";
bottomRightCorner.style.borderRadius = "0 0 40% 0";
bottomLeftCorner.style.borderRadius = "0 0 0 40%";

//....................................................DRAW ON MOUSE DOWN

/*
$('.divSquare').on({
    mousedown: function(){
        $('.divSquare').hover(function(){
            $(this).css("background-color", currentInkColor);
        });
    },
    mouseup: function(){
        $('.divSquare').hover(function(){
            $(this).css("background-color", "none");
        });
    }
})
*/

/*
board_Div.addEventListener('mousedown', function(){
    $('.divSquare').hover(function(){
        //$(this).addClass('paint');
        $(this).css("background-color", currentInkColor);
    });
});
board_Div.addEventListener('mouseup', function(){
    $('.divSquare').hover(function(){
        //$(this).addClass('paint');
        $(this).css("background-color", "red");
    });
});
*/
/*
board_Div.addEventListener('mousedown', function(){
    $('.divSquare').hover(function(e){
        let squareBox = e.target;
        squareBox.style.backgroundColor = currentInkColor;
    });
});
board_Div.addEventListener('mouseup', function(){
    $('.divSquare').hover(function(e){
        let squareBox = e.target;
        squareBox.style.backgroundColor = "brown";
    });
});
*/
/*
let mouseIsUp = true;
board_Div.addEventListener('mousedown', booleanOff);
function booleanOff(e){
    let squareBox = e.target;
    mouseIsUp = false;  
    $('h1').css("background-color", currentInkColor);
    paint();
    squareBox.style.backgroundColor = "green";
    console.log(squareBox)
}
board_Div.addEventListener('mouseup', booleanOn);
function booleanOn(){
    mouseIsUp = true; 
    $('h1').css("background-color", "red");
    paint();
}
function paint(){
    if(mouseIsUp === false){
        $('.divSquare').hover(function(){
            //$(this).addClass('paint');
            $(this).css("background-color", currentInkColor);
        });
    }
    if(mouseIsUp === true){
        $('.divSquare').hover(function(){
            //$(this).addClass('paint');
            $(this).css("background-color", "transparent");
        });
    }
};
*/
/*
$("h1").mousedown(function(){
    $("#centering_Div").slideUp(5000);
});
$("h1").mouseup(function(){
    $("#centering_Div").stop();
});
*/
/*
//....................................................GHOST HOVER
divSquare.addEventListener('mouseover', ghostHover)
ghostHover();
function ghostHover(e){
    e.target.classList.add('hover');
    e.target.addEventListener('transitionend',() => e.target.classList.remove('hover'));
}
$('#board_Div').mouseenter(function(){
    $('#board_Div').css("cursor", "none");
}) 
*/


//......................Tools Panel..............................
//....................................................INITIAL BOARD
$('.divSquare').css({"borderLeft": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`,
"borderTop": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`, "borderRight": "none", "borderBottom": "none"});
$('.divSquare').css({"height": SIZE_SQUARE_X+"px", "width":
SIZE_SQUARE_Y+"px"});

//....................................................CSS TOOL BUTTONS ARE CLICKED
$('.tools').mousedown(function(){
    $(this).css({'scale': '1', 'box-shadow': '0 0 7px, 0 0 20px cyan inset'});   
})
$('.tools').mouseup(function(){
    $(this).css({'scale': '1.02', 'box-shadow': '0 0 7px, 0 0 15px royalblue inset'});
})
$('.tools').mouseenter(function(){
    $(this).css({'scale': '1.02', 'box-shadow': '0 0 7px, 0 0 15px royalblue inset'});
})
$('.tools').mouseleave(function(){
    $(this).css({'scale': '1', 'box-shadow': 'none'});
})

//....................................................CHOOSE INK COLOR FUNCTION
let initialInk = "#0000ff";
let rubberInk = "var(--boardBlue)";

function colorDiv(){
    if(currentInkColor === 'rainbow'){
        $(this).css("background-color", 
        '#' + Math.floor(Math.random()*0xffffff).toString(16));
    }
    if(currentInkColor === 'rubber'){
        $(this).css("background-color", rubberInk)
    }
    if(currentInkColor === 'initialInk'){
        $(this).css("background-color", initialInk)
    }
}

function setColor(chooseInk){
    currentInkColor = chooseInk;
}

//....................................................INK COLOR
$('#ink_Div').click(function(){ 
    $('.divSquare').hover(function(){
        $(this).css("background-color", currentInkColor);
    });
})

inkColor.addEventListener('input', changeInkColor);
function changeInkColor(e){
    currentInkColor = e.target.value;
}

//....................................................RAINBOW COLOR
//Left Blank on purpose to keep track of chapters.

//Please see HTML tools_Div > rainbow_Div that executes onclick="setColor('rubber')";
//Please see function "setColor('rainbow')" at chapter "....CHOOSE INK COLOR FUNCTION".

//....................................................EYEDROPPER
//Neutralize Bucket hover css
neutralizeBtnHover('#invert_Div'); 
//Please go to ....BUCKET chapt to see neutralizeBtnHover function.

//....................................................EYEDROPPER
let eyeDropper = new EyeDropper();
let grabbedColor = " ";

colorGrabber_Div.addEventListener('click', getEyeDropColor);

async function getEyeDropColor() {
    let color = await eyeDropper.open();
    grabbedColor = color.sRGBHex;
    currentInkColor = grabbedColor;
}

//....................................................BUCKET
//Neutralize Bucket hover css
neutralizeBtnHover('#bucket_Div')

function neutralizeBtnHover(btn){
    $(btn).mousedown(function(){
        $(this).css({'scale': '1', 'box-shadow': 'none'});   
    })
    $(btn).mouseup(function(){
        $(this).css({'scale': '1', 'box-shadow': 'none'});
    })
    $(btn).mouseenter(function(){
        $(this).css({'scale': '1', 'box-shadow': 'none'});
    })
    $(btn).mouseleave(function(){
        $(this).css({'scale': '1', 'box-shadow': 'none'});
    })
}

//....................................................CHANGE BOARD COLOR
function changeBoardColor(){
    if(boardColorOn === true){
        $("#boardColor_Div").css({
            "background-image": "var(--boardBlack)"});
        $("#board_Div").css({
            "background-image": "none"});
        $("#board_Div").css({
            "background-color": "rgb(0, 10, 15)"});
        boardColorOn = false;
    }else{
        $("#boardColor_Div").css({
            "background-image": "var(--boardBlue)"});
        $("#board_Div").css({
            "background-image": "var(--boardBlue)"});
        boardColorOn = true;
    }
}

$('#boardColor_Div').mousedown(function(){
    $(this).css({'scale': '1', 'box-shadow': '0 0 10px cyan inset'});   
})
$('#boardColor_Div').mouseup(function(){
    $(this).css({'scale': '1.02', 'box-shadow': 'none'});
})

//....................................................TURN GRID LINES OFF/ON
function turnGrLnsOnOff(){
    if(gridLinesOn === true){
        SIZE_BORDER = 0;
        removeGridLines();
        $('#gridLinesOn-Off').text("OFF");
        $('#gridLinesOn-Off').css("color", "red");
        gridLinesOn = false;
    }else{
        SIZE_BORDER = 1;
        removeGridLines();
        $('#gridLinesOn-Off').text("On");
        $('#gridLinesOn-Off').css("color", "greenyellow");
        gridLinesOn = true;
    }
}

function removeGridLines(){
    SIZE_SQUARE_X = BOARD_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
    SIZE_SQUARE_Y = BOARD_HEIGHT/SIZE_BOARD_Y-1;
    $('.divSquare').css({"borderLeft": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`,
    "borderTop": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`, "borderRight": "none", "borderBottom": "none"});
    $('.divSquare').css({"height": `${SIZE_SQUARE_X}px`, "width":
    `${SIZE_SQUARE_Y}px`});
}

//....................................................NAVIGATE BOARD SIZE
boardSizeSlider.addEventListener('input', changeBoardSize);
//Please see HTML tools_Div > boardSize_Div that creates slider with type="range";

function changeBoardSize(){
    let sizeValue = boardSizeSlider.value; //RECEIVE NEW SIZE
    SIZE_BOARD_X = sizeValue; 
    board_Div.innerHTML = ""; //REMOVE EXISTING BOARD
    boardSizeLabel_Num.innerHTML = 
    `: ${SIZE_BOARD_X} x ${SIZE_BOARD_X*2}`; //REFLECT UI BOARD SIZE
    createBoard(SIZE_BOARD_X); //RECREATE BOARD ADJUSTED TO NEW SIZE
}

//....................................................RUBBER
//Left Blank on purpose to keep track of chapters.

//Please see HTML tools_Div > rubber_Div that executes onclick="setColor('rubber')";
//Please see function "setColor('rubber')" at chapter "....CHOOSE INK COLOR FUNCTION".

//....................................................CLEAR BOARD
$('#clearBoard_Div').click(function(){ 
    $('.divSquare').css("background-color", "var(--boardBlue)");
})

//....................................................SOMETHING ELSE