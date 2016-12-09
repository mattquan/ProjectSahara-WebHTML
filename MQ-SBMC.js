/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var masterList = ["peter","joe","bob","small","yellow","room","friday","mark","really long word to test out the data wrapping"];

onload = init;
function init() {
    fillStartingInputs();
    fillEndingInputs();
}
function fillStartingInputs() {
    var list1 = document.getElementById('roomList1');
    //create a new option element that fills the datalist (roomList1)
    for (var i =0; i <masterList.length;i++) {
        var option1 = document.createElement('option'); 
        option1.value = masterList[i];
        list1.appendChild(option1);
    }
    console.log(list1);  		
}

function fillEndingInputs() {
    var roomList2 = document.getElementById('roomList2');
    //creates a new option element that fills the datalist(roomList2)
    for (var i =0; i <masterList.length;i++) {
        var option2 = document.createElement('option');
        option2.value = masterList[i];
        roomList2.appendChild(option2);
    }
    console.log(roomList2);                                                               		
}

function navigateButtonClicked() {

	
	var selectedList1 = document.getElementById('StartingPosInput');
	var startingPoint = selectedList1.value;

	var selectedList2 = document.getElementById('EndingPosInput');
	var endingPoint = selectedList2.value;

	
	alert(document.getElementById('navigationText').innerHTML = "Navigating from " + startingPoint + " to " + endingPoint + "...");

}

