import events from './events'
import $ from "jquery";

class Checkbox {

  buildView (node, parent) {
    // create the dom structure on the component
    const container = document.createElement('div')
    container.className = (parent) ? 'node child-node cont-class_' + node.id : 'node cont-class_' + node.id
    const label = document.createElement('span')
    const checkbox = document.createElement('input')
    const arrow = document.createElement('i')
    arrow.className = 'arrow down'
    // Toggle Open, Close for nested tree nodes
    arrow.onclick = function(e){
      var childnodes = $(e.target.parentNode).children().filter('div')
      if($(arrow).hasClass('down')){
        $(arrow).removeClass('down').addClass('up')
        $(childnodes).addClass('hide')
      }else{
          $(arrow).removeClass('up').addClass('down')
          $(childnodes).removeClass('hide')
      }
    }

    checkbox.type = 'checkbox'
    checkbox.checked = node.isChecked

    checkbox.onclick = function(e){
        events.publish('CheckBox');
    }

    label.innerText = node.name

    container.appendChild(arrow)
    container.appendChild(checkbox)
    container.appendChild(label)

    return container
  }
  create (node, parent) {
    if (parent) {
      const className =  'cont-class_'+parent.id
      document.getElementsByClassName(className)[0].appendChild(this.buildView(node, parent))
    } else {
      document.getElementById('app').appendChild(this.buildView(node))
    }
  }
}

export default Checkbox
