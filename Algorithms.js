function test(){
    var A = {name: "A", adjacencies: [{weight: 2, targetNode: "B", index: 0}, {weight: 4, targetNode: "C", index: 1}, {weight: 1, targetNode: "D", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var B = {name: "B", adjacencies: [{weight: 2, targetNode: "A", index: 0}, {weight: 3, targetNode: "C", index: 1}, {weight: 1, targetNode: "E", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var C = {name: "C", adjacencies: [{weight: 4, targetNode: "A", index: 0}, {weight: 3, targetNode: "B", index: 1}, {weight: 2, targetNode: "E", index: 2}], weight: Number.MAX_VALUE, minPath: []};
    var D = {name: "D", adjacencies: [{weight: 1, targetNode: "A", index: 0}], weight: Number.MAX_VALUE, minPath: []};
    var E = {name: "E", adjacencies: [{weight: 1, targetNode: "B", index: 0}, {weight: 2, targetNode: "C", index: 1}], weight: Number.MAX_VALUE, minPath: []};
    
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
    console.log(runDijkstrasAlgorithm([A, B, C, D, E], "A", "E"));
}

function runDijkstrasAlgorithm(listOfNodes, startingNode, endingNode)
{
    //creating the unvisted list
    var unvisited = listOfNodes;
    var indexStart = find(unvisited, startingNode);
    var indexEnd = find(unvisited, endingNode);
    
    //var minNode = startingNode;
    //for(index = 0; index < listOfNodes.length; index++)
        //unvisited += listOfNodes[index];
    //JSON already has starting node, now set weight to 0
    unvisited[indexStart].weight = 0;
    //startingNode.weight = 0;   
    //by default, minPath is null. so the first one has to have a non null path so that it can copy to all the other nodes.
    unvisited[indexStart].minPath.push(startingNode);
    
    //JSON already has ending node
    var chosenNode = unvisited[indexStart];
    while(chosenNode.name !== endingNode){
        for(index = 0; index < chosenNode.adjacencies.length; index++){
            console.log(index);
            console.log(chosenNode.adjacencies.length);
            //panda is that particular targetnode from that particular edge
            var panda = chosenNode.adjacencies[index].targetNode;
            console.log("checking adjancencies");
            console.log(panda);
            //update only if panda has been unvisited. if it has already been visited, we don't look at it. 
            //basiclaly don't look at the targetnode if, as a node, the targetnode has already been looked at
            //confusing a bit. becuase panda is a target node. but that node only goes to unvisited if it was ever the chosenNode
            //so if panda was already a chosenNode, then don't look at it, basically, if that makes more sense
            if(find(unvisited, panda) !== -1){
                var currentNode = unvisited[find(unvisited,panda)];
                var suggestedWeight = chosenNode.weight + chosenNode.adjacencies[index].weight;
                //only if my new weight < my old weight, do i update
                if(suggestedWeight < currentNode.weight){
                    index2 = find(listOfNodes, chosenNode.name);
                    index3 = find(unvisited, chosenNode.name);
                    //update values
                    listOfNodes[index2].weight = suggestedWeight;
                    unvisited[index3].weight = suggestedWeight;
                    
                    //so i can add myself, the panda, to the new improved chain. becuase the old chain came from the chosenNode, the startingNode of the edge (vs. targetNode).
                    //and THAT path/chain does not include the targetNode/panda. so you have to add itself to the new, min path. beecause the min path takes
                    //vestiges of the old chain from chosenNode + the panda node.
                    
                    //var path = chosenNode.minPath;
                    listOfNodes[index2].minPath = chosenNode.minPath;
                    listOfNodes[index2].minPath.push(chosenNode.adjacencies[index].targetNode);
                    //unvisited[index3].minPath = chosenNode.minPath;
                    //unvisited[index3].minPath += chosenNode.adjacencies[index];
                    //listOfNodes[index].minPath = path;
                }
            }
        }
        console.log("out of for loop!!");
        unvisited = binarySearchAndDestroyNode(chosenNode.name, unvisited);
        console.log(unvisited);
        var minNode = {name: null, adjacencies: [], weight: Number.MAX_VALUE, minPath:[]};
        for(index = 0; index < unvisited.length; index++){
            if(unvisited[index].weight <= minNode.weight){
                minNode = unvisited[index];
            }
            if(minNode.name === endingNode){
                unvisited[indexEnd].minPath = chosenNode.minPath;
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
function find(array, name){
    for(index = 0; index < array.length; index++){
        if(array[index].name === name)
            return index;
    }
    return -1;
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
            if (searchThis[index].name === toBeDestroyed) 
            {
                searchThis.splice(index, 1);
                return searchThis;
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