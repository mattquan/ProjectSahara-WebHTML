/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function sendTextUp(whatTriggered,whichTable) {
    var text = document.getElementById(whatTriggered.id).innerHTML;  
    document.getElementById(whichTable+"Input").value = text;
    
}

function init() {
    initStartTable();
    initEndTable();
}

function initStartTable(){
   var myArray    = new Array();
    myArray[0] = "joe"
    myArray[1] = "jon";
    myArray[2] = "33";
    myArray[3] = "coco";
    myArray[4] = "ralph";
    myArray[5] = "sal";
    myArray[6] = "114";
    myArray[7] = "arnold5";

    var myTable= "<table id = 'startTable' class='mdl-data-table mdl-js-data-table' >";
        myTable+="<thead>";
        myTable+="<tr>";
        myTable+="<th class='mdl-data-table__cell--non-numeric'>Name</th>";
        myTable+="</tr> </thead> <tbody>";

    for (var i=0; i<myArray.length; i++) {
        myTable+="<tr><td id='"+i+"s'";
        myTable+="class='mdl-data-table__cell--non-numeric'onMouseDown ='sendTextUp(this,\"start\")'>"+myArray[i];
        myTable+="</td></tr>";
  }  
   myTable+="</tbody></table>";
   document.getElementById('startTable').innerHTML = myTable;
}
function initEndTable(){
   var myArray    = new Array();
    myArray[0] = "joe"
    myArray[1] = "jon";
    myArray[2] = "3aifewf09233";
    myArray[3] = "coco";
    myArray[4] = "ralph";
    myArray[5] = "sal";
    myArray[6] = "awefijaowiejfo";
    myArray[7] = "arnold5";

    var myTable= "<table id = 'endTable' class='mdl-data-table mdl-js-data-table' >";
        myTable+="<thead>";
        myTable+="<tr>";
        myTable+="<th class='mdl-data-table__cell--non-numeric'>Name</th>";
        myTable+="</tr> </thead> <tbody>";

    for (var i=0; i<myArray.length; i++) {
        myTable+="<tr><td id='"+i+"e'";
        myTable+="class='mdl-data-table__cell--non-numeric'onMouseDown ='sendTextUp(this,\"end\")'>"+myArray[i];
        myTable+="</td></tr>";
  }  
   myTable+="</tbody></table>";
    
    
   document.getElementById('endTable').innerHTML = myTable;
}
onload = init;