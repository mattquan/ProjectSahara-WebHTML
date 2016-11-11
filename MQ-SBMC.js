/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function sendTextUp(whatTriggered,whichTable) {
    var text = document.getElementById(whatTriggered.id).innerHTML;  
    document.getElementById(whichTable+"Input").value = text;
    
    
    
}

