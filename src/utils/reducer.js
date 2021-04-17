function counter(state,action){
    if(typeof state === 'undefined'){
        return 0
    }
    if(action.type === 'INCREAMENT'){
        return state + 1;
    } else if(action.type === 'DECREAMENT'){
        return state -1;
    }else {
        return state
    }
}

module.exports = counter;

