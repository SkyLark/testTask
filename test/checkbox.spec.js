import { expect } from 'chai'
import Checkbox from '../app/checkbox'
import $ from "jquery"

const checkboxInstance = new Checkbox
const data = [
  {
    id: 0,
    name: 'Test',
    isChecked: false,
    nodes: []
  }
]
const dom = checkboxInstance.buildView(data)

describe('CheckBox', function () {
  it('- should render correctly', function () {
    expect($(dom).find('input')).to.have.length(1)
    expect($(dom).find('i')).to.have.length(1)
    expect($(dom).find('span')).to.have.length(1)
  })

  it('- should create node correctly without Parent', function(){
    expect($(dom).hasClass('node')).to.be.true
  })

  it('- should create node correctly with Parent', function(){
    const node = checkboxInstance.buildView(data,data)
    expect($(node).hasClass('child-node')).to.be.true
  })

  it('- should toggle arrow open/close status', function(){
    const arrow = $(dom).find('i')
    checkboxInstance.handleArrowEvent({target:{parentNode:{}}},arrow)
    expect($(arrow).hasClass('up')).to.be.true
    checkboxInstance.handleArrowEvent({target:{parentNode:{}}},arrow)
    expect($(arrow).hasClass('down')).to.be.true
  })
})
