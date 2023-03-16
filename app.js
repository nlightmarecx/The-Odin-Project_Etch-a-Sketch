const panel_Div = document.getElementById("panel_Div");
const panelSquare_Div = document.getElementsByClassName("panelColRow_Div");

const PANEL_WIDTH = 300;
const PANEL_HEIGHT = PANEL_WIDTH*2;

const panelWidth = document.getElementById("panel_Div").style.width = PANEL_WIDTH+"px";
const panelHeight = document.getElementById("panel_Div").style.height = PANEL_HEIGHT+"px";
const toolsWidth = document.getElementById("tools_Div").style.width = PANEL_WIDTH/1.6+"px";


let SIZE_BOARD_X = 8;
let SIZE_BOARD_Y = SIZE_BOARD_X*2;
let COLOR_BORDER = "rgba(211, 211, 211, 0.25)";
let SIZE_BORDER = 1;

let SIZE_SQUARE_X = PANEL_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
let SIZE_SQUARE_Y = PANEL_HEIGHT/SIZE_BOARD_Y-SIZE_BORDER;

panel_Div.style.gridTemplateColumns = `repeat(${SIZE_BOARD_X}, 1fr)`;
panel_Div.style.gridTemplateRows = `repeat(${SIZE_BOARD_Y}, 1fr)`;

mouseIsUp = false;

//END OF Panel DIV
//................................................

//................................................
//START OF TOOLS DIV
const inkColor = document.getElementById("inkColor");
const gridLinesOff = document.getElementById("#gridLinesOff");

let currentInkColor = "#0000ff";

//......................Canvas Panel..............................
//....................................................MAKE BOARD DIVs
createBoard();

function createBoard(){
    for(let i=0; i<SIZE_BOARD_X*SIZE_BOARD_Y; i++){
        const panelColRow_Div = document.createElement("div");
        panelColRow_Div.setAttribute("id", "panelColRow_Div"+i)
        panelColRow_Div.setAttribute("class", "panelColRow_Div");
        panel_Div.insertAdjacentElement("beforeend", panelColRow_Div);
    }
}

/*
function createBoard(){
    for(let i=0; i<SIZE_BOARD_X; i++){
        const panelCol_Div = document.createElement("div");
        //panel_Div.appendChild(panelCol_Div); //DOM method
        $('#panel_Div').append(panelCol_Div); //jQuery method
        panelCol_Div.setAttribute("id", "panelCol_Div"+i);

        for(let j=0; j<SIZE_BOARD_Y; j++){
            const panelColRow_Div = document.createElement("div");
            panelCol_Div.appendChild(panelColRow_Div);

            panelColRow_Div.setAttribute("id", "panelColRow_Div"+i+"-"+j)
            panelColRow_Div.setAttribute("class", "panelColRow_Div")
        }
    }
}

*/

//....................................................ROUND THE CORNERS
const topLeftCorner = document.getElementById("panelColRow_Div0");
const topRightCorner = document.getElementById("panelColRow_Div"+(SIZE_BOARD_X-1));
const bottomRightCorner = document.getElementById("panelColRow_Div"+(SIZE_BOARD_X*SIZE_BOARD_Y-1));
const bottomLeftCorner = document.getElementById("panelColRow_Div"+(SIZE_BOARD_X*SIZE_BOARD_Y-SIZE_BOARD_X));

topLeftCorner.style.borderRadius = "20% 0 0 0";
topRightCorner.style.borderRadius = "0 20% 0 0";
bottomRightCorner.style.borderRadius = "0 0 20% 0";
bottomLeftCorner.style.borderRadius = "0 0 0 20%";

//....................................................GHOST HOVER + DRAW ON MOUSE DOWN
/*
$('.panelColRow_Div').on({
    mousedown: function(){
        $('.panelColRow_Div').hover(function(){
            $(this).css("background-color", currentInkColor);
        });
    },
    mouseup: function(){
        $('.panelColRow_Div').hover(function(){
            $(this).css("background-color", "none");
        });
    }
})
*/
/*
panel_Div.addEventListener('mousedown', function(){
    $('.panelColRow_Div').hover(function(){
        //$(this).addClass('paint');
        $(this).css("background-color", currentInkColor);
    });
});
panel_Div.addEventListener('mouseup', function(){
    $('.panelColRow_Div').stop();

});
*/

$("h1").mousedown(function(){
    $("#centering_Div").slideUp(5000);
});
$("h1").mouseup(function(){
    $("#centering_Div").stop();
});







/*
panelSquare_Div.addEventListener('mouseover', ghostHover)
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
$('.panelColRow_Div').css({"borderLeft": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`,
"borderTop": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`, "borderRight": "none", "borderBottom": "none"});
$('.panelColRow_Div').css({"height": SIZE_SQUARE_X+"px", "width":
SIZE_SQUARE_Y+"px"});

//....................................................CSS TOOLS ARE CLICKED
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


//....................................................INK COLOR
$('#ink_Div').click(function(){ 
    $('.panelColRow_Div').hover(function(){
        //currentInkColor = "#0000ff"; //needs work: should bring back the original color
        $(this).css("background-color", currentInkColor);
    });
})

inkColor.addEventListener('input', changeInkColor);
function changeInkColor(e){
    currentInkColor = e.target.value;
}

//....................................................RAINBOW COLOR
$('#rainbow_Div').click(function(){ 
    $('.panelColRow_Div').hover(function(){
        //$(this).css("background-color", makeRainbowColor);
    });
})

function makeRainbowColor(){
    rainbowColor = Math.floor(Math.random()*0xffffff).toString(16);
    console.log(rainbowColor);
    currentInkColor = "#"+rainbowColor;
}

//....................................................RUBBER
$('#rubber_Div').click(function(){ 
    $('.panelColRow_Div').hover(function(){
        $(this).css("background-color", "black");
    });
})

//....................................................CLEAR BOARD
$('#clearBoard_Div').click(function(){ 
    $('.panelColRow_Div').css("background-color", "black");
})

//....................................................TURN GRID LINES OFF/ON
$('#gridLinesOff_Div').click(function(){ 
    removeGridLines(0)
})

$('#gridLinesOn_Div').click(function(){
    removeGridLines(1)
}) 

function removeGridLines(x){
    SIZE_BORDER = x;
    SIZE_SQUARE_X = PANEL_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
    SIZE_SQUARE_Y = PANEL_HEIGHT/SIZE_BOARD_Y-1;
    $('.panelColRow_Div').css({"borderLeft": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`,
    "borderTop": `solid ${SIZE_BORDER}px ${COLOR_BORDER}`, "borderRight": "none", "borderBottom": "none"});
    $('.panelColRow_Div').css({"height": `${SIZE_SQUARE_X}px`, "width":
    `${SIZE_SQUARE_Y}px`});
}

//....................................................SOMETHING ELSE