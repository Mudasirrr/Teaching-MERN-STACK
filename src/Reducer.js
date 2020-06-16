const Reducer =(state,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return state[0]='Mudasir';
        case 'CHANGE_REGNUM':
            return state[1]=100;
        default:
            return state;
    }
}
export default Reducer;