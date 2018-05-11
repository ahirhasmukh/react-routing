import { createStore } from 'redux';

const store = createStore ((state = {count : 0},action) =>{
    switch(action.type){
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return{
                count: state.count + increment
            }
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return{
                count : state.count - decrement
            }

        case 'RESET':
            return{
                count : 0
            }
        
        case 'SET':
            return{
                count : action.count 
            }
        

        default:
            return state
    }
});

// Subscribe method 
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type :'INCREMENT',
    incrementBy: 5
})

// Stope subscribe method
//unsubscribe();

store.dispatch({
    type :'INCREMENT'
})

store.dispatch({
    type :'RESET'
})

store.dispatch({
    type :'DECREMENT'
})

store.dispatch({
    type :'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type :'SET',
    count: 101
})