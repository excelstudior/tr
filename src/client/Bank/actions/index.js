export const updateBalance=(amount,method)=>({
    type:'UPDATE_BALANCE',
    amount,
    method
})

export const clearError=()=>({
    type:'CLEAR_ERROR',
})