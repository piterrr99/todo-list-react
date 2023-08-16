import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [state, setState] = useState(initialValue);

    const increment = ()=>{
        setState(state + 1);
    };

    const decrement = ()=>{
        setState(state - 1);
    };

    const reset = ()=>{
        setState(initialValue);
    };

    return{
        state,
        increment, 
        decrement, 
        reset
    };

};
