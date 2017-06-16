import { expect } from 'chai'
import TreeComp from '../app/tree'
import treeData from '../app/data'
import $ from "jquery";

const Tree = new TreeComp(treeData)

describe('Tree Component', function () {
  it('- should getData Correctly', function () {
    const item = Tree.getData(4)
    expect(item).to.include({id: 4});
  })
})
