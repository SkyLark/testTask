import Tree from './tree'
import styles from '../css/style.css'
import treeData from './data'

// Create Component
const tree = window.Tree = new Tree(treeData)
// Init Component

window.onload = function() {
  tree.init()
}
