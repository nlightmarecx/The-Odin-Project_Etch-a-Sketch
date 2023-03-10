const panel_Div = document.getElementById("panel_Div");
const firstCol = document.getElementById("panelCol_Div0");

const PANEL_WIDTH = 180;
const PANEL_HEIGHT = 360;

const panelWidth = document.getElementById("panel_Div").style.width = PANEL_WIDTH+"px";
const panelHeight = document.getElementById("panel_Div").style.height = PANEL_HEIGHT+"px";
const toolsWidth = document.getElementById("tools_Div").style.width = PANEL_WIDTH/1.25+"px";


let SIZE_BOARD_X = 6;
let SIZE_BOARD_Y = SIZE_BOARD_X*2;
let SIZE_BORDER = 1;

let SIZE_SQUARE_X = PANEL_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
let SIZE_SQUARE_Y = PANEL_HEIGHT/(SIZE_BOARD_Y)-SIZE_BORDER;

//END OF Panel DIV
//................................................

//................................................
//START OF TOOLS DIV
const gridOff_Btn = document.getElementById("#gridLin_Off");


createBoard();

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

const topLeftCorner = document.getElementById("panelColRow_Div0-0");
const topRightCorner = document.getElementById("panelColRow_Div"+(SIZE_BOARD_X-1)+"-0");
const bottomRightCorner = document.getElementById("panelColRow_Div"+(SIZE_BOARD_X-1)+"-"+(SIZE_BOARD_Y-1));
const bottomLeftCorner = document.getElementById("panelColRow_Div0-"+(SIZE_BOARD_Y-1));

topLeftCorner.style.borderRadius = "20% 0 0 0";
topRightCorner.style.borderRadius = "0 20% 0 0";
bottomRightCorner.style.borderRadius = "0 0 20% 0";
bottomLeftCorner.style.borderRadius = "0 0 0 20%";


/*
$('#panel_Div').mouseenter(function(){
    $('#panel_Div').css("cursor", "none");
}) 
*/

$('.panelColRow_Div').on({
    mousedown: function(){
        $('.panelColRow_Div').hover(function(){
            $(this).css("background-color", "blue");
        });
    },
    mouseup: function(){
        $('.panelColRow_Div').hover(function(){
            $(this).css("background-color", "none");
        });
    }
})

function myFunction(){
    $('.panelColRow_Div').hover(function(){
        $(this).css("background-color", "blue");
    });
}


//......................Tools Panel..............................
//....................................................MAKE BOARD
$('.panelColRow_Div').css({"borderLeft": "solid "+ SIZE_BORDER + "px rgba(211, 211, 211, 0.25)",
"borderTop": "solid "+ SIZE_BORDER + "px rgba(211, 211, 211, 0.25)"});
$('.panelColRow_Div').css({"height": SIZE_SQUARE_X+"px", "width":
SIZE_SQUARE_Y+"px"});
$('#panelCol_Div0').css({"borderLeft": "0"});

//....................................................INK COLOR
$('#ink_Div').click(function(){ 
    $('.panelColRow_Div').hover(function(){
        $(this).css("background-color", "blue");
    });
})

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

//....................................................TURN GRID LINES OFF
$('#gridLinesOff_Div').click(function(){ 
    removeGridLines(0)
})

//....................................................TURN GRID LINES ON
$('#gridLinesOn_Div').click(function(){
    removeGridLines(1)
}) 

function removeGridLines(x){
    SIZE_BORDER = x;
    SIZE_SQUARE_X = PANEL_WIDTH/SIZE_BOARD_X-SIZE_BORDER;
    SIZE_SQUARE_Y = PANEL_HEIGHT/(SIZE_BOARD_Y)-SIZE_BORDER;
    $('.panelColRow_Div').css({"borderLeft": "solid "+ SIZE_BORDER + "px rgba(211, 211, 211, 0.25)",
    "borderTop": "solid "+ SIZE_BORDER + "px rgba(211, 211, 211, 0.25)"});
    $('.panelColRow_Div').css({"height": SIZE_SQUARE_X+"px", "width":
    SIZE_SQUARE_Y+"px"});
    $('#panelCol_Div0').css({"borderLeft": "0"});
}
