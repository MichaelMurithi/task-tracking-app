function counter(state,action){
    if(action.type === 'INCREAMENT'){
        return state + 1;
    } else if(action.type === 'DECREAMENT'){
        return state -1;
    }
}

module.exports = counter;

