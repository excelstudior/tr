const tech=(state='',action)=>{
    switch (action.type){
        case "SET_TECH_NAME":
        return action.text
        default:
        return state;
    }
    
}
export default tech