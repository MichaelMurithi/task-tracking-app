const {createStore} = require('redux');

const counter = (state=0,action) =>{
    switch (action.type){
        case 'INCREAMENT':
            return state +1;
        case 'DECREAMENT':
            return state -1
        default:
            return state;
    }
}

const store = createStore(counter);

console.log(store.getState());

store.dispatch({type:'INCREAMENT'})
console.log(store.getState)

module.exports = counter