/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var masterList = ["peter","joe","bob","small","yellow","room","friday","mark","really long word to test out the data wrapping"];

onload = init;
function init() {
    fillStartingAndEndingInputs();
}
function fillStartingAndEndingInputs() {
    var roomList = document.getElementById('roomList');
    //create a new option element that fills the datalist (roomList)
    for (var i =0; i <masterList.length;i++) {
        var option = document.createElement('option');
        option.value = masterList[i];
        roomList.appendChild(option);
    }
    console.log(roomList);
    
}

