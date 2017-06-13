# Test Task
Installation: 
1. Clone the project from the repo
2. Run npm install in the project directory
3. Run npm run start to start the local server
4. Go to http://localhost:8080/

How to use:

1. The app has 3 controls - Reset , Update , and Update Node;
2. Reset reloads the app with initial data;
3. Update - just rerenders the whole tree;
4. Update node - updates the given node with some test fake data just to show how it works;

Component Publick API:
 The component is available in window global scope as Tree obj.
 
 - update() - rerenders the Tree nodes
 - updateNode(nodeID , data ) - updates the selected Node with new Data
 - getData(id) - get data for the selected Node (info printed in the console)
 - subscribe(fn) - The user can subscribe to the following events names
            - 'UpdateTree'
            - 'UpdateNode'
            - 'GetData'
            - 'CheckBox'




