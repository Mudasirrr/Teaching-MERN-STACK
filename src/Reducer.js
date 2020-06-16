const Reducer =(state,action)=>{
    console.log("state:",state)
    console.log("action:",action)
    switch(action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                name:action.payload
            }
        case 'CHANGE_REGNUM':
            return {
                ...state,
                regnum:action.payload
            }
        default:
            return state;
    }
}
export default Reducer;