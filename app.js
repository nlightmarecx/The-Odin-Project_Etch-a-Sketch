const panel_Div = document.getElementById("panel_Div");
const divSquare = document.getElementsByClassName("divSquare");

const boardSizeSlider = document.getElementById("boardSizeSlider");
const boardSizeLabel_Num = document.getElementById("boardSizeLabel_Num");


const PANEL_WIDTH = 300;
const PANEL_HEIGHT = PANEL_WIDTH*2 // /1.5; make 3x4 board

const panelWidth = document.getElementById("panel_Div").style.width = PANEL_WIDTH+"px";
const panelHeight = document.getElementById("panel_Div").style.height = PANEL_HEIGHT+"px";
const toolsWidth = document.getElementById("tools_Div").style.width = PANEL_WIDTH/1.6+"px";


let SIZE_BOARD_X = boardSizeSlider.value;
let SIZE_BOARD_Y = SIZE_BOARD_X*2;

let COLOR_BORDER = "rgba(211, 211, 211, 0.25)";
let SIZE_BORDER = 1;

let SIZE_SQUARE_X = PANEL_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
let SIZE_SQUARE_Y = PANEL_HEIGHT/SIZE_BOARD_Y-SIZE_BORDER;

//END OF Panel DIV
//................................................

//................................................
//START OF TOOLS DIV
const inkColor = document.getElementById("inkColor");
const gridLinesOff = document.getElementById("#gridLinesOff");

let currentInkColor = "#0000ff";

//......................Canvas Panel..............................
//....................................................MAKE BOARD DIVs
//changeBoardSize();
createBoard(SIZE_BOARD_X);

function createBoard(size){
    SIZE_BOARD_Y = size*2;

    panel_Div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    panel_Div.style.gridTemplateRows = `repeat(${SIZE_BOARD_Y}, 1fr)`;

    for(let i=0; i<size*SIZE_BOARD_Y; i++){
        const divSquare = document.createElement("div");
        divSquare.setAttribute("id", "divSquare"+i)
        divSquare.setAttribute("class", "divSquare");
        panel_Div.insertAdjacentElement("beforeend", divSquare);
        divSquare.addEventListener('mouseover', colorDiv);
    }
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
panel_Div.addEventListener('mousedown', function(){
    $('.divSquare').hover(function(){
        //$(this).addClass('paint');
        $(this).css("background-color", currentInkColor);
    });
});
panel_Div.addEventListener('mouseup', function(){
    $('.divSquare').hover(function(){
        //$(this).addClass('paint');
        $(this).css("background-color", "red");
    });
});
*/
/*
panel_Div.addEventListener('mousedown', function(){
    $('.divSquare').hover(function(e){
        let squareBox = e.target;
        squareBox.style.backgroundColor = currentInkColor;
    });
});
panel_Div.addEventListener('mouseup', function(){
    $('.divSquare').hover(function(e){
        let squareBox = e.target;
        squareBox.style.backgroundColor = "brown";
    });
});
*/
/*
let mouseIsUp = true;

panel_Div.addEventListener('mousedown', booleanOff);
function booleanOff(e){
    let squareBox = e.target;
    mouseIsUp = false;  
    $('h1').css("background-color", currentInkColor);
    paint();
    squareBox.style.backgroundColor = "green";
    console.log(squareBox)
}

panel_Div.addEventListener('mouseup', booleanOn);
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

$('#panel_Div').mouseenter(function(){
    $('#panel_Div').css("cursor", "none");
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
    $(this).css({'scale': '1', 'box-shadow': '0 0 7px, 0 0 15px royalblue inset'});
})
$('.tools').mouseleave(function(){
    $(this).css({'scale': '1', 'box-shadow': 'none'});
})

//....................................................CHOOSE INK COLOR FUNCTION
let initialInk = "#ffff00";
let rubberInk = "#000000"

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

//....................................................INITIAL INK COLOR BTN
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


//....................................................TURN GRID LINES OFF/ON
let gridLinesOn = true;
function turnGrLnsOnOff(){
    if(gridLinesOn === true){
        removeGridLines(0);
        $('#gridLinesOn-Off').text("OFF");
        $('#gridLinesOn-Off').css("color", "red");
        gridLinesOn = false;
    }else{
        removeGridLines(1);
        $('#gridLinesOn-Off').text("On");
        $('#gridLinesOn-Off').css("color", "greenyellow");
        gridLinesOn = true;
    }
}

function removeGridLines(x){
    SIZE_BORDER = x;
    SIZE_SQUARE_X = PANEL_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
    SIZE_SQUARE_Y = PANEL_HEIGHT/SIZE_BOARD_Y-1;
    $('.divSquare').css({"borderLeft": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`,
    "borderTop": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`, "borderRight": "none", "borderBottom": "none"});
    $('.divSquare').css({"height": `${SIZE_SQUARE_X}px`, "width":
    `${SIZE_SQUARE_Y}px`});
}

//....................................................NAVIGATE BOARD SIZE
boardSizeSlider.addEventListener('input', changeBoardSize);

function changeBoardSize(){
    let sizeValue = boardSizeSlider.value; //RECEIVE NEW SIZE
    SIZE_BOARD_X = sizeValue; 
    panel_Div.innerHTML = ""; //REMOVE EXISTING BOARD
    boardSizeLabel_Num.innerHTML = 
    `: ${SIZE_BOARD_X} x ${SIZE_BOARD_X*2}`; //REFLECT UI BOARD SIZE
    createBoard(SIZE_BOARD_X); //RECREATE BOARD ADJUSTED TO NEW SIZE
}


//....................................................CLEAR BOARD
$('#clearBoard_Div').click(function(){ 
    $('.divSquare').css("background-color", "var(--boardBlack)");
})

//....................................................SOMETHING ELSE