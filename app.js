const panel_Div = document.getElementById("panel_Div");

let squareSize = 25;

function getSquareSize(x){
    
}

createBoard();

function createBoard(){
    for(let i=0; i<3; i++){
        const panelCol_Div = document.createElement("div");
        //panel_Div.appendChild(panelCol_Div); //DOM method
        $('#panel_Div').append(panelCol_Div); //jQuery method
        panelCol_Div.setAttribute("id", "panelCol_Div"+i);
    
        //panelCol_Div.style.border = ("solid 1px red");
        //panelCol_Div.style.height = ("50px");
        //panelCol_Div.style.width = ("50px");

        for(let j=0; j<3; j++){
            const panelColRow_Div = document.createElement("div");
            panelCol_Div.appendChild(panelColRow_Div);

            panelColRow_Div.setAttribute("id", "panelColRow_Div"+i+"-"+j)
            panelColRow_Div.setAttribute("class", "panelColRow_Div")

            panelColRow_Div.style.border = ("solid 1px yellow");
            panelColRow_Div.style.height = ("50px");
            panelColRow_Div.style.width = ("50px");

            //console.log("panelColRow_Div"+i+","+j);
        }
    }
}