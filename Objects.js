/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Path (argument) {
    if (argument instanceof String) {
        //it is an initial node. u must create the array
        this.nodePath = [argument];
    }
    else if (argument instanceof Path) {
        //just need to copy this path. it is already an array
        this.nodePath = argument;
    }
    this.add = function(targetEdge) {
        if (targetEdge instanceof Edge) {            
            nodePath.push(targetEdge.targetNode)
        }
        else {
            throw "called Path.add with a parameter that was not an Edge"
        }
    }
}

