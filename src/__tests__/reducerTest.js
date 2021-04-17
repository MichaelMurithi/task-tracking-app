import counter from 'utils/reducer'
import expect from 'expect'

test('The counter works for increament',() =>{
    expect(counter(0,{type:'INCREAMENT'})).toEqual(1);
})

test('The counter works for decreament',() =>{
    expect(counter(0,{type:'INCREAMENT'})).toEqual(1);
})

test('Counter returns 0 for undefined state',() => {
    expect(counter()).toEqual(0);
})

test('Counter returns the initial state for undefined type',() =>{
    expect(counter(2,{type:"SOMETHING_ELSE"})).toEqual(2);
})