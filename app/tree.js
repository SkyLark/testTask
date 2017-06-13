import Checkbox from './checkbox'
import events from './events'

const checkbox = new Checkbox


function Tree (nodes) {
  this.nodes = nodes
}

Tree.prototype = (function(){
  // Subscribe to events
  events.subscribe('UpdateTree', function(){
    console.log(' EVENT - THE TREE IS UPDATED !!!!!')
  });

  events.subscribe('UpdateNode', function(){
    console.log(' EVENT - Node is UPDATED !!!!!')
  });

  events.subscribe('GetData', function(){
    console.log(' EVENT - Data about NODE !!!!!')
  });

  events.subscribe('CheckBox', function(){
    console.log(' EVENT - Check Box was check/unchecked !!!!!')
  });

  // DOM builder function
  function initControlButtons () {
    const container = document.createElement('div')
    container.className = 'controls'
    const updateButton = document.createElement('button')
    updateButton.innerText = 'Update Tree'
    const updateNode = document.createElement('button')
    updateNode.innerText = 'Update Node Data'
    const reset = document.createElement('button')
    reset.innerText = 'Reset'
    // Update Node Data Button
    reset.onclick = function(){
      location.reload();
    }
    // Update Button
    updateButton.onclick = function(){
      this.update()
      events.publish('UpdateTree');
    }.bind(this)
    // Update Node Data Button
    updateNode.onclick = function(){
      const sampleData = {
          id: 1111111,
          name: 'Sample Data to show Node data change',
          isChecked: false,
          nodes: [
            {
              id: 3333333,
              name: 'Hi Provectus !!!!!',
              isChecked: true,
              nodes: []
            }
          ]
        }
      this.updateNode(4, sampleData)

      events.publish('UpdateNode');

    }.bind(this)
    // append view
    container.appendChild(reset)
    container.appendChild(updateButton)
    container.appendChild(updateNode)

    return container

  }

  function removeAll () {
    const elm = document.getElementById('app')
    while (elm.hasChildNodes()) {
      elm.removeChild(elm.lastChild);
    }
  }

  var node
  function findNodeById (nodes, id) {
      nodes.forEach((item) => {
          if(item.id === id) node = item
          if(item.nodes.length){
            findNodeById(item.nodes, id)
          }
      })
      return node
  }

  return {

        constructor: Tree,

        init: function(nodes = this.nodes, parent) {
          nodes.forEach( (item) => {
            (parent) ? checkbox.create(item, parent) : checkbox.create(item)
            if (item.nodes.length){
              this.init(item.nodes, item)
            }
          })
          // init controls
          if(!document.getElementsByClassName('controls').length){
            document.body.appendChild(initControlButtons.call(this))
          }
        },

        update: function () {
          //clear Tree
          removeAll()
          // reinit Tree
          this.init()
        },

        updateNode: function (id, data) {
          if(!id || !data) {
            console.warn('Please provide Node Id and Data')
            return
          }
          let item = findNodeById(this.nodes, id)
          Object.assign(item, data);
          this.update()
        },

        getData: function (id) {
          if(!id) {
            console.warn('Please provide Node Id and Data')
            return
          }
          let item = findNodeById(this.nodes, id)
          if(!item){
            console.warn('Node not found !!!!')
          }else{
            console.log('ID: ' + item.id + ' ' + 'Name: ' + item.name + ' ' + 'Checked: ' + item.isChecked)
          }
          events.publish('GetData');
        },
        subscribe: function(name, fn) {
          events.subscribe(name, fn);
        }
    };
})()

export default Tree
