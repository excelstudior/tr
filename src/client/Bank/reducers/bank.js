
const bank=(state={balance:0,error:''},action)=>{
    switch(action.type){
        case 'UPDATE_BALANCE':
        if(isNaN(parseFloat(action.amount))){
            return {...state,error:'Input is not a number'}
        } else {
            if(action.method==='DEPOSIT'){
                let newBalance=state.balance+parseFloat(action.amount)
                return {...state,balance:newBalance}
            }else if(action.method==='WITHDRAW'){
                let newBalance=state.balance-parseFloat(action.amount)
                 return {...state,balance:newBalance}
            } else {
                return state
            }
        }

        case 'CLEAR_ERROR':
        return {...state,error:''}

        default:
        return state
    }

    
}   
export default bank