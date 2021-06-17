export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({
        type: APPLY_NUMBER, 
        payload:number
    });
}

export const changeOperator = (operator) => {
    return({
        type: CHANGE_OPERATION, 
        payload: operator
    });

}

export const clearDisplay = () => {
    return({
        type: CLEAR_DISPLAY
    });
}


export const memoryPlus = () => {
    return({
        type: MEMORY_PLUS
    });
}



export const memoryRecall = () => {
    return({
        type: MEMORY_RECALL
    });
}

export const clearMemory = () => {
    return({
        type: MEMORY_CLEAR
    })
}