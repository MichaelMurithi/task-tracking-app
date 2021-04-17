import counter from 'scripts/reducer'
import expect from 'expect'

test('The counter works for increament',() =>{
    expect(counter(0,{type:'INCREAMENT'})).toEqual(1);
})

test('The counter works for decreament',() =>{
    expect(counter(0,{type:'INCREAMENT'})).toEqual(1);
})
