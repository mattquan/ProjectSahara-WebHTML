function runDijkstrasAlgorithm(listOfNodes, startingNode, endingNode)
{
    //creating the unvisted list
    var unvisted = [];
    for(index = 0; index < listOfNodes.length; index++)
        unvisted += listOfNodes[index];
    
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
