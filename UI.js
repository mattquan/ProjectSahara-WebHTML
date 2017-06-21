/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var masterList = ["Apnea Center",
            "Vangvanichyakorn",
            "Barnabas Health Retail Pharmacy",
            "Retail Pharmacy",
            "Craniofacial center",
            "Craniofacial",
            "High risk infant follow up",
            "High risk infant",
            "North Jersey Blood Center",
            "Blood Center",
            "Pediatric health center",
            "pediactric",
            "Glick",
            "Liptsyn",
            "Center for Wound and Burn Healing",
            "Wound and burn healing",
            "Wound Healing",
            "Burn Healing",
            "Chase atm",
            "Cardiac Telemetry",
            "Cardiothoracic ICU",
            "Cardiothoracic ICU",
            "Burn Center Control Room",
            "Burn Surgery Section",
            "Burn Center Administration",
            "Burn Center Administrator",
            "Burn Center",
            "Burn ICU",
            "Burn Intensive Care Unit",
            "Burn Step Down Unit",
            "Department of Emergency Medicine",
            "NICU",
            "premature babies",
            "neonatal intensive care unit",
            "babies",
            "baby",
            "preemies",
            "PICU",
            "pediatric",
            "childrens center",
            "kids",
            "pediatric intensive care unit",
            "Department of Cardiothoracac surgery",
            "Cardiothoracic surgery",
            "Camacho",
            "Karanam",
            "Russo",
            "Sardari",
            "Saunders",
            "Heart Failure Management Program",
            "Heart Failure Management",
            "Heart Failure",
            "Zucker",
            "Jaqua Cardiacpulmonary rehabilitation center",
            "Cardiacpulmonary rehabilitation",
            "Cardiacpulmonary rehab",
            "Neonatology",
            "Sun",
            "OBGYN Health Center",
            "OBGYN",
            "Fibroid Center",
            "Cancer Center",
            "Infusion Center",
            "Cancer",
            "Infusion",
            "Transplant Medicine",
            "Living Donor Institute",
            "Pre Transplant",
            "Transplant Administration",
            "Transplant Clinic",
            "Transplant Research",
            "Transplant Research",
            "Transplant Short Stay",
            "Reproductive Medicine and Science",
            "Perinatal Associates",
            "same day surgery",
            "same day waiting area",
            "same day",
            "1323",
            "mens bathroom 1",
            "men's bathroom 1",
            "bathroom 1",
            "mens restroom 1",
            "men's restroom 1",
            "restroom 1",
             "womens bathroom 1",
            "womens's bathroom 1",
            "bathroom 1",
            "womens restroom 1",
            "women's restroom 1",
            "restroom 1",
            "ladies room 1",
            "same day surgery 1",
            "same day holding 1",
            "same day prep 1",
            "same day recovery 1",
            "same day 1",
            "S12",
            "reception",
            "reception desk",
            "information desk",
            "chapel",
            "1398",
            "parent",
            "parent lounge",
            "1211",
             "mens bathroom ",
            "men's bathroom ",
            "bathroom",
            "mens restroom",
            "men's restroom",
            "restroom",
             "womens bathroom",
            "womens's bathroom",
            "bathroom",
            "womens restroom",
            "women's restroom",
            "restroom",
             "ICU",
            "ICU waiting",
            "ICU waiting area",
            "ICU waiting room",
            "CCU",
            "CCU waiting",
            "CCU waiting area",
            "CCU waiting room",
            "1607",
            "radiation oncology",
            "phones",
            "phone",
            "restroom 3",
            "bathroom 3",
            "restroom 4",
            "bathroom 4",
            "bathroom 0",
            "restroom 0",
            "parking",
            "validation",
            "parking validation",
            "records",
            "medical records",
            "G453",
            "outpatient lab",
            "G309B",
            "clinical lab",
            "G336",
            "cafeteria, north exit",
            "food",
            "cafe",
            "G320",
            "cafeteria, south exit",
            "food",
            "cafe",
            "G320",
            "burn",
            "burn outpatient",
            "E00C6",
            "pediatric",
            "pediatric outpatient",
            "E00C7",
            "Apnea Center",
            "Vangvanichyakorn",
            "Barnabas Heatlh Retail Pharmacy",
            "Craniofacial center",
            "High risk infant follow up",
            "New Jersey Blood Center",
            "Pediatric Health Center",
            "Glick",
            "Liptsyn",
            "center for wound and burn healing",
            "Chase ATM",
            "Department of Cardiothoracic surgery",
            "Camacho",
            "Karanam",
            "Russo",
            "sandari",
            "Saunders",
            "Heart Failure Management Program",
            "Zucker",
            "Jaqua Cardiac/Pulmonary Rehabilitation Center",
            "Neonatology",
            "Sun",
            "Saint Barnabas OBGYN Health Center",
            "The Fibroid center",
            "Cancer Center",
            "Brown",
            "Conde",
            "Grossman",
            "Leitner",
            "Lipari",
            "Litvak",
            "Radovich",
            "Scoppetuolo",
            "Wagmiller",
            "Infusion Center",
            "Associates in Transplant and General Surgery",
            "Aitchison",
            "Associates in Transplant Medicine",
            "Dhillon",
            "Goldberg",
            "Kandula",
            "Luan",
            "Patel",
            "Tibaldi",
            "Weng",
            "Pre Transplant Department",
            "Mulgaonkar",
            "Living Donor Institute",
            "Transplant Administration",
            "Transplant Clinic",
            "Transplant Research",
            "Transplant Short Stay",
            "Institute for Reproductive Medicine and Science",
            "Cekleniak",
            "Chen",
            "Garrisi",
            "Hessler",
            "Keegen",
            "Pascale",
            "Thompson",
            "DziadosZ",
            "Kasdaglis",
            "Miller",
            "O'Brien",
            "Pelaez",
            "Smith",
            "Terrone",
            "Warren",
            "Wolf"];

onload = init;
$(document).ready(function(){
   
        $(".demo-list-action").fadeOut(0);
    });

function init() {
    fillStartingInputs();
    fillEndingInputs();
    console.log(testMyAlg());
 


}

function fillStartingInputs() {
    var list1 = document.getElementById('roomList1');
    //create a new option element that fills the datalist (roomList1)
    for (var i =0; i <masterList.length;i++) {
        var option1 = document.createElement('option'); 
        option1.value = masterList[i];
        option1.id = i;        
        //does not need to be unique.
        option1.setAttribute("nodeID","0000"+i);
        
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
        option2.id = i;
        option2.setAttribute('nodeID',"0000"+i);
        roomList2.appendChild(option2);
    }
    console.log(roomList2);                                                               		
}

function backButtonClick() {

        document.getElementById('displayedContent').className = 'displayedContentHidden';

        $("#textfieldsRow, #buttonRow, #goRow").fadeIn();

        $(".demo-list-control, #buttonRow1, #navigationText").fadeOut();



        

}

function navigateButtonClicked() {
        var selectedList1 = document.getElementById('StartingPosInput');
	var startingPoint = selectedList1.value;
        var selectedList2 = document.getElementById('EndingPosInput');
	var endingPoint = selectedList2.value;
        if (startingPoint =="") {
            //perhaps do somethiwng nicer here later...
            alert("Input a starting node!");
        }
        else if (endingPoint =="")  {
            
            alert("Input an ending node!");
        }
    
        else {
    
            //document.getElementById('myContent').className = 'myContentHidden';
            //transitions
            $("#textfieldsRow, #buttonRow, #goRow").fadeOut();


            var optS = $('option[value ="'+selectedList1.value+'"]');
            var idS = optS.attr('id');
            var nodeIDS = optS.attr('nodeId')



            var optE = $('option[value ="'+selectedList2.value+'"]');
            var idE = optE.attr('id');
            var nodeIDE = optE.attr('nodeID');

            document.getElementById('displayedContent').className = 'displayedContentVisible';

            document.getElementById('navigationText').innerHTML = "Navigating from " + startingPoint +idS+"nodeID: "+nodeIDS+ "to " + endingPoint + idE+"nodeID: "+nodeIDE +"...";

            //transitions
            $(".demo-list-control, #buttonRow1, #navigationText").fadeIn();
        }



}


function testMyAlg(){
    var A = {name: "A", adjacencies: [{weight: 2, targetNode: "B", index: 0}, {weight: 4, targetNode: "C", index: 1}, {weight: 1, targetNode: "D", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var B = {name: "B", adjacencies: [{weight: 2, targetNode: "A", index: 0}, {weight: 3, targetNode: "C", index: 1}, {weight: 1, targetNode: "E", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var C = {name: "C", adjacencies: [{weight: 4, targetNode: "A", index: 0}, {weight: 3, targetNode: "B", index: 1}, {weight: 2, targetNode: "E", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var D = {name: "D", adjacencies: [{weight: 1, targetNode: "A", index: 0}], weight: Number.MAX_VALUE, minPath: []};
    var E = {name: "E", adjacencies: [{weight: 1, targetNode: "B", index: 0}, {weight: 2, targetNode: "C", index: 1}], weight: Number.MAX_VALUE, minPath: []};
    console.log("in test");
    /*var A = {name: "A", adjacencies: [{weight: 2, targetNode: "B", index: 0}, {weight: 4, targetNode: "C", index: 1}, {weight: 1, targetNode: "D", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var B = {name: "B", adjacencies: [{weight: 2, targetNode: "A", index: 0}, {weight: 3, targetNode: "C", index: 1}, {weight: 1, targetNode: "E", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var C = {name: "C", adjacencies: [{weight: 4, targetNode: "A", index: 0}, {weight: 3, targetNode: "B", index: 1}, {weight: 2, targetNode: "E", index: 2}, {weight: 2, targetNode: "F", index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var D = {name: "D", adjacencies: [{weight: 1, targetNode: "A", index: 0}, {weight: 5, targetNode: "F", index: 1}, {weight: 4, targetNode: "G", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var E = {name: "E", adjacencies: [{weight: 1, targetNode: "B", index: 0}, {weight: 2, targetNode: "C", index: 1}, {weight: 3, targetNode: "H", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var F = {name: "F", adjacencies: [{weight: 2, targetNode: C, index: 0}, {weight: 5, targetNode: D, index: 1}, {weight: 3, targetNode: G, index: 2}, {weight: 4, targetNode: J, index: 3}, {weight: 2, targetNode: I, index: 4}, {weight: 3, targetNode: H, index: 5}], weight: Number.MAX_VALUE, minPath: []};
    var G = {name: "G", adjacencies: [{weight: 4, targetNode: D, index: 0}, {weight: 3, targetNode: F, index: 1}, {weight: 2, targetNode: K, index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var H = {name: "H", adjacencies: [{weight: 3, targetNode: E, index: 0}, {weight: 3, targetNode: F, index: 1}, {weight: 1, targetNode: L, index: 2}, {weight: 8, targetNode: L, index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var I = {name: "I", adjacencies: [{weight: 2, targetNode: F, index: 0}, {weight: 3, targetNode: J, index: 1}, {weight: 2, targetNode: M, index: 2}, {weight: 3, targetNode: L, index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var J = {name: "J", adjacencies: [{weight: 4, targetNode: F, index: 0}, {weight: 3, targetNode: I, index: 1}, {weight: 6, targetNode: M, index: 2}, {weight: 3, targetNode: M, index: 3}, {weight: 6, targetNode: K, index: 4}], weight: Number.MAX_VALUE, minPath: []};
    var K = {name: "K", adjacencies: [{weight: 2, targetNode: G, index: 0}, {weight: 6, targetNode: J, index: 1}, {weight: 4, targetNode: N, index: 2}, {weight: 2, targetNode: R, index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var L = {name: "L", adjacencies: [{weight: 1, targetNode: H, index: 0}, {weight: 6, targetNode: O, index: 1}, {weight: 3, targetNode: M, index: 2}, {weight: 3, targetNode: I, index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var M = {name: "M", adjacencies: [{weight: 2, targetNode: I, index: 0}, {weight: 3, targetNode: L, index: 1}, {weight: 4, targetNode: O, index: 2}, {weight: 2, targetNode: L, index: 3}, {weight: 5, targetNode: N, index: 4}, {weight: 2, targetNode: P, index: 5}, {weight: 6, targetNode: J, index: 6}], weight: Number.MAX_VALUE, minPath: []};
    var N = {name: "N", adjacencies: [{weight: 4, targetNode: K, index: 0}, {weight: 3, targetNode: J, index: 1}, {weight: 5, targetNode: M, index: 2}, {weight: 2, targetNode: Q, index: 3}, {weight: 1, targetNode: R, index: 4}], weight: Number.MAX_VALUE, minPath: []};
    var O = {name: "O", adjacencies: [{weight: 8, targetNode: H, index: 0}, {weight: 6, targetNode: L, index: 1}, {weight: 4, targetNode: M, index: 2}, {weight: 2, targetNode: P, index: 3}, {weight: 6, targetNode: S, index: 4}], weight: Number.MAX_VALUE, minPath: []};
    var P = {name: "P", adjacencies: [{weight: 2, targetNode: M, index: 0}, {weight: 2, targetNode: O, index: 1}, {weight: 2, targetNode: S, index: 2}, {weight: 1, targetNode: T, index: 3}, {weight: 1, targetNode: Q, index: 4}], weight: Number.MAX_VALUE, minPath: []};
    var Q = {name: "Q", adjacencies: [{weight: 2, targetNode: N, index: 0}, {weight: 1, targetNode: P, index: 1}, {weight: 3, targetNode: T, index: 2}, {weight: 8, targetNode: R, index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var R = {name: "R", adjacencies: [{weight: 2, targetNode: K, index: 0}, {weight: 1, targetNode: N, index: 1}, {weight: 8, targetNode: Q, index: 2}, {weight: 5, targetNode: T, index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var S = {name: "S", adjacencies: [{weight: 6, targetNode: O, index: 0}, {weight: 2, targetNode: P, index: 1}, {weight: 2, targetNode: Z, index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var T = {name: "T", adjacencies: [{weight: 5, targetNode: R, index: 0}, {weight: 3, targetNode: Q, index: 1}, {weight: 1, targetNode: P, index: 2}, {weight: 8, targetNode: "Z", index: 3}], weight: Number.MAX_VALUE, minPath: []};
    var Z = {name: "Z", adjacencies: [{weight: 2, targetNode: S, index: 0}, {weight: 8, targetNode: T, index: 1}], weight: Number.MAX_VALUE, minPath: []};*/
    runDijkstrasAlgorithm([A, B, C, D, E], A, E);
}

function runDijkstrasAlgorithm(listOfNodes, startingNode, endingNode){
    //given that starting and ending node is a Node object
    var unvisited = new Array();
    for (var i = 0; i <listOfNodes.length;i++) {
        unvisited.push(listOfNodes[i].name);
    }
    console.log(unvisited);
    //so all initialization of startingNode things
    startingNode.weight = 0;
    startingNode.minPath.push(startingNode.name);
    
    //JSON already has ending node
    var chosenNode = startingNode;
    
    //so continue the while loop until you reach the end
    while(chosenNode.name !== endingNode.name){
        //for each edge in my chosen node, look at that connecting edge and update values if 
        for(var index = 0; index < chosenNode.adjacencies.length; index++){
            //panda is that particular targetnode from that particular edge
            var panda = findAndReturnObject(listOfNodes, chosenNode.adjacencies[index].targetNode);
            console.log("found a panda");
            console.log(panda);
            //update only if panda has been unvisited. if it has already been visited, we don't look at it. 
            //basiclaly don't look at the targetnode if, as a node, the targetnode has already been looked at
            //confusing a bit. becuase panda is a target node. but that node only goes to unvisited if it was ever the chosenNode
            //so if panda was already a chosenNode, then don't look at it, basically, if that makes more sense
            console.log("panda.name");
            console.log(panda.name);
            console.log(findInUnvisited(unvisited, panda.name));
            if(findInUnvisited(unvisited, panda.name) !== -1){
                console.log("here");
                var suggestedWeight = chosenNode.weight + chosenNode.adjacencies[index].weight;
                //only if my new weight < my old weight, do i update
                if(suggestedWeight < panda.weight){
                    //update values
                    panda.weight = suggestedWeight;
                    console.log("changed panda weight");
                    console.log(panda);
                    
                    //so i can add myself, the panda, to the new improved chain. becuase the old chain came from the chosenNode, the startingNode of the edge (vs. targetNode).
                    //and THAT path/chain does not include the targetNode/panda. so you have to add itself to the new, min path. beecause the min path takes
                    //vestiges of the old chain from chosenNode + the panda node.
                    
                    var path = chosenNode.minPath;
                    console.log("path");
                    console.log(path);
                    path.push(panda.name);
                    panda.minPath = path;
                    console.log("updated panda path");
                    console.log(panda);
                    
                }
            }
        }
        binarySearchAndDestroyNode(chosenNode.name, unvisited);
        console.log("removed from unvisited");
        console.log(unvisited);
        
        var minNode = {name: null, adjacencies: [], weight: Number.MAX_VALUE, minPath:[]};
        for(var index = 0; index < unvisited.length; index++){
            if(unvisited[index].weight <= minNode.weight){
                minNode = findAndReturnObject(listOfNodes,unvisited[index]);
            }
            
        }
        chosenNode = minNode;
        console.log(chosenNode);
    }
    
    //done!
    //this printout works becuase of polymorphism. eventually, chosenNode will = endingNode, and then when that happens, endingNode will have already been altered. 
    //console.log("hi");
    console.log(unvisited[indexEnd].minPath);
    return unvisited[indexEnd].minPath;
}


//***need to change to binary search
//finds the index of a certain node in array
function findInUnvisited(array, name){
    for(var index = 0; index < array.length; index++){
        if(array[index] === name)
            return index;
    }
    return -1;
}

function findAndReturnObject(array, name) {
    for(var index = 0; index < array.length; index++){
        if(array[index].name === name)
            return array[index]
    }
    return null;
}

//precondition: checkThis is a Node and inThis is a list of Nodes
function binarySearch(checkThis, inThis)
{
    //returns a boolean. checks the path. 
    //will return true if the path's last element is in the unselected.
    var min = 0;
    var max = inThis.length - 1;
    var index;
    //console.log(inThis);
    while(max - min > -1)
    {
        index = Math.floor((min + max)/2);
        if(inThis[index].name === checkThis)
        {
            //found it!
            return true;
        }
        else if(inThis[index].name.localeCompare(checkThis) < 0)
        {
            min = index + 1;
        }
        else
        {
            max = index - 1;
        }     
    }
    
    return false;
}


//precondition: toBeDestroyed is a node name (string) and searchThis is a list of nodes
 function binarySearchAndDestroyNode(toBeDestroyed, searchThis) {
        //returns index of the toBeDestroyed within the array
        var min = 0;
        var max = searchThis.length - 1;
        var index;

        while (max - min > -1) 
        {
            index = Math.floor((min + max) / 2);
            if (searchThis[index] === toBeDestroyed) 
            {
                searchThis.splice(index, 1);
                return;
            }
            else if (searchThis[index].localeCompare(toBeDestroyed) < 0) 
            {
                min = index + 1;
            }
            else 
            { 
                max = index - 1;
            }
        }
        return;
    }