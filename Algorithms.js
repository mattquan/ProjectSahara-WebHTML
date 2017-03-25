test();

function test(){
    var A = {name: "A", myEdges: [{weight: 2, targetNode: "B", index: 0}, {weight: 4, targetNode: "C", index: 1}, {weight: 1, targetNode: "D", index: 2}]};
    var B = {name: "B", myEdges: [{weight: 2, targetNode: "A", index: 0}, {weight: 3, targetNode: "C", index: 1}, {weight: 1, targetNode: "E", index: 2}]};
    var C = {name: "C", myEdges: [{weight: 4, targetNode: "A", index: 0}, {weight: 3, targetNode: "B", index: 1}, {weight: 2, targetNode: "E", index: 2}, {weight: 2, targetNode: "F", index: 3}]};
    var D = {name: "D", myEdges: [{weight: 1, targetNode: "A", index: 0}, {weight: 5, targetNode: "F", index: 1}, {weight: 4, targetNode: "G", index: 2}]};
    var E = {name: "E", myEdges: [{weight: 1, targetNode: "B", index: 0}, {weight: 2, targetNode: "C", index: 1}, {weight: 3, targetNode: "H", index: 2}]};
    var F = {name: "F", myEdges: [{weight: 2, targetNode: "C", index: 0}, {weight: 5, targetNode: "D", index: 1}, {weight: 3, targetNode: "G", index: 2}, {weight: 4, targetNode: "J", index: 3}, {weight: 2, targetNode: "I", index: 4}, {weight: 3, targetNode: "H", index: 5}]};
    var G = {name: "G", myEdges: [{weight: 4, targetNode: "D", index: 0}, {weight: 3, targetNode: "F", index: 1}, {weight: 2, targetNode: "K", index: 2}]};
    var H = {name: "H", myEdges: [{weight: 3, targetNode: "E", index: 0}, {weight: 3, targetNode: "F", index: 1}, {weight: 1, targetNode: "L", index: 2}, {weight: 8, targetNode: "L", index: 3}]};
    var I = {name: "I", myEdges: [{weight: 2, targetNode: "F", index: 0}, {weight: 3, targetNode: "J", index: 1}, {weight: 2, targetNode: "M", index: 2}, {weight: 3, targetNode: "L", index: 3}]};
    var J = {name: "J", myEdges: [{weight: 4, targetNode: "F", index: 0}, {weight: 3, targetNode: "I", index: 1}, {weight: 6, targetNode: "M", index: 2}, {weight: 3, targetNode: "M", index: 3}, {weight: 6, targetNode: "K", index: 4}]};
    var K = {name: "K", myEdges: [{weight: 2, targetNode: "G", index: 0}, {weight: 6, targetNode: "J", index: 1}, {weight: 4, targetNode: "N", index: 2}, {weight: 2, targetNode: "R", index: 3}]};
    var L = {name: "L", myEdges: [{weight: 1, targetNode: "H", index: 0}, {weight: 6, targetNode: "O", index: 1}, {weight: 3, targetNode: "M", index: 2}, {weight: 3, targetNode: "I", index: 3}]};
    var M = {name: "M", myEdges: [{weight: 2, targetNode: "I", index: 0}, {weight: 3, targetNode: "L", index: 1}, {weight: 4, targetNode: "O", index: 2}, {weight: 2, targetNode: "L", index: 3}, {weight: 5, targetNode: "N", index: 4}, {weight: 2, targetNode: "P", index: 5}, {weight: 6, targetNode: "J", index: 6}]};
    var N = {name: "N", myEdges: [{weight: 4, targetNode: "K", index: 0}, {weight: 3, targetNode: "J", index: 1}, {weight: 5, targetNode: "M", index: 2}, {weight: 2, targetNode: "Q", index: 3}, {weight: 1, targetNode: "R", index: 4}]};
    var O = {name: "O", myEdges: [{weight: 8, targetNode: "H", index: 0}, {weight: 6, targetNode: "L", index: 1}, {weight: 4, targetNode: "M", index: 2}, {weight: 2, targetNode: "P", index: 3}, {weight: 6, targetNode: "S", index: 4}]};
    var P = {name: "P", myEdges: [{weight: 2, targetNode: "M", index: 0}, {weight: 2, targetNode: "O", index: 1}, {weight: 2, targetNode: "S", index: 2}, {weight: 1, targetNode: "T", index: 3}, {weight: 1, targetNode: "Q", index: 4}]};
    var Q = {name: "Q", myEdges: [{weight: 2, targetNode: "N", index: 0}, {weight: 1, targetNode: "P", index: 1}, {weight: 3, targetNode: "T", index: 2}, {weight: 8, targetNode: "R", index: 3}]};
    var R = {name: "R", myEdges: [{weight: 2, targetNode: "K", index: 0}, {weight: 1, targetNode: "N", index: 1}, {weight: 8, targetNode: "Q", index: 2}, {weight: 5, targetNode: "T", index: 3}]};
    var S = {name: "S", myEdges: [{weight: 6, targetNode: "O", index: 0}, {weight: 2, targetNode: "P", index: 1}, {weight: 2, targetNode: "Z", index: 2}]};
    var T = {name: "T", myEdges: [{weight: 5, targetNode: "R", index: 0}, {weight: 3, targetNode: "Q", index: 1}, {weight: 1, targetNode: "P", index: 2}, {weight: 8, targetNode: "Z", index: 3}]};
    var Z = {name: "Z", myEdges: [{weight: 2, targetNode: "S", index: 0}, {weight: 8, targetNode: "T", index: 1}]};
    var console = console || {log: function(){}};
    console.log(runDijkstrasAlgorithm([A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, Z], A, Z));
}

function runDijkstrasAlgorithm(listOfNodes, startingNode, endingNode)
{
    //creating the unvisted list
    var unvisited = [];
    for(index = 0; index < listOfNodes.length; index++)
        unvisited += listOfNodes[index];
    console.log("hi");
    //JSON already has starting node, now set weight to 0
    startingNode.weight = 0;   
    //by default, minPath is null. so the first one has to have a non null path so that it can copy to all the other nodes.
    startingNode.minPath = startingNode.name;
    
    //JSON already has ending node
    var chosenNode = startingNode;
    
    while(chosenNode !== endingNode)
    {
        for(index = 0; index < chosenNode.adjacencies; index++)
        {
            //panda is that particular targetnode from that particular edge
            var panda = chosenNode.adjacencies[index].targetNode;
            //update only if panda has been unvisited. if it has already been visited, we don't look at it. 
            //basiclaly don't look at the targetnode if, as a node, the targetnode has already been looked at
            //confusing a bit. becuase panda is a target node. but that node only goes to unvisited if it was ever the chosenNode
            //so if panda was already a chosenNode, then don't look at it, basically, if that makes more sense
            if(binarySearch(panda, unvisited))
            {
                var suggestedWeight = chosenNode.weight + chosenNode.adjacencies[index].weight;
                //only if my new weight < my old weight, do i update
                if(suggestedWeight < panda.weight)
                {
                    //update values
                    panda.weight = suggestedWeight;
                    
                    //so i can add myself, the panda, to the new improved chain. becuase the old chain came from the chosenNode, the startingNode of the edge (vs. targetNode).
                    //and THAT path/chain does not include the targetNode/panda. so you have to add itself to the new, min path. beecause the min path takes
                    //vestiges of the old chain from chosenNode + the panda node.
                    
                    var path = new Path(chosenNode.minPath);
                    path += chosenNode.adjacencies[index];
                    panda.minPath = path;
                    
                }
            }
            
        }
        
        binarySearchAndDestroyNode(chosenNode.name, unvisited);
        
        var minNode = new Node();
        for(index = 0; index < unvisited.length; index++)
        {
            if(unvisited[index].weight < minNode.weight)
            {
                minNode = unvisited[index];
            }
        }
        
        chosenNode = minNode;
    }
    
    //done!
    //this printout works becuase of polymorphism. eventually, chosenNode will = endingNode, and then when that happens, endingNode will have already been altered. 
    
    
    return endingNode.minPath.nodePath; 
       
}


//precondition: checkThis is a Node and inThis is a list of Nodes
function binarySearch(checkThis, inThis)
{
    //returns a boolean. checks the path. 
    //will return true if the path's last element is in the unselected.
    
    var min = 0;
    var max = inThis.length - 1;
    var index;
    
    while(max - min > -1)
    {
        index = (min + max)/2;
        if(inThis[index].name.toUpperCase() === checkThis.name.toUpperCase())
        {
            //found it!
            return true;
        }
        else if(inThis[index].name.toUpperCase().localeCompare(checkThis.name.toUpperCase()) < 0)
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
            index = (min + max) / 2;
            if (searchThis[index].name === toBeDestroyed) 
            {
                searchThis -= searchThis[index];
                break;
            } 
            else if (searchThis[index].name.toUpperCase().localeCompare(toBeDestroyed.toUpperCase()) < 0) 
            {
                min = index + 1;
            } 
            else 
            { 
                max = index - 1;
            }
        }
    }
