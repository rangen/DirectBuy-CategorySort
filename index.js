// Optimal solution with O(3n) => O(n) time complexity

module.exports = function sortCategoriesForInsert (inputJson) {
    let properJsonOutput = [], tree = {}, roots = [];
    
    function walkTheTree(thisLevel) {
        thisLevel.forEach(element => {           //standard for loop could be slightly more performant, but less readable
            if (element.children) {
                // If a node has children, use object destructuring, as we don't want to persist the children array 
                //to our database and can also pass children back to this function recursively
                const { children, ...cleanNode } = element;
                properJsonOutput.push(cleanNode);
    
                // Process child nodes in turn after adding parent node to our result array
                walkTheTree(children);
            } else {
                // If no children, object can be added to our result array as-is
                properJsonOutput.push(element);
            }
        });
    }
    
    // Create a lookup object - O(n)     standard for loop could be slightly more performant, but less readable
    inputJson.forEach(node => {
        tree[node.id] = node;
    });
    
    // Inform each parent of their children - O(n)       standard for loop could be slightly more performant, but less readable
    inputJson.forEach(node => {
        const parentNodeId = node.parent_id;
        
        if (parentNodeId) {
            // Create a new children array if is first relationship discovered
            if (!tree[parentNodeId].children) {
                tree[parentNodeId].children = [];
            }
            // Add child node to parent
            tree[parentNodeId].children.push(node);
        } else {
            // If element has no parent, it is a root element.  Keep track of for tree traversal
            roots.push(node);            
        }
    });
    
    // Traverse the tree, starting with the root elements with no parent_id
    walkTheTree(roots);
    
    return properJsonOutput;
}
