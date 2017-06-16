import { expect } from 'chai'
import events from '../app/events'

describe('SUB/PUB events', function () {
  it('- should publish and subscribe correctly', function () {
    let counter = 0
    events.subscribe('TestEvent', function(){
      counter ++
    });
    events.publish('TestEvent');

    expect(counter).to.equal(1);
  })
})
