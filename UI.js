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
            $(".demo-list-action").fadeIn();
        }

}


