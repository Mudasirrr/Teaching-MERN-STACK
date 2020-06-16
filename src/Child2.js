
import React, { useContext, useReducer } from "react";
import regReducer from './Reducer';
import ValueContext from './ValueContext';

// Props==>contextApi
// state==>reducr

function Child2()
{
    let studentfromapp =useContext(ValueContext);
    // let arr="Ansa Abbasi";
    let [student,dispatch]=useReducer(regReducer,studentfromapp);
    
    // let [name,dispatch]=useReducer(regReducer,"Ansa Amjad");
    return(
        <div>
            <h1>You are in child2 for reducer.......</h1>
            <h1>Name :{student.name}</h1>
            <h1>Registeration # :{student.regnum}</h1>
            <button onClick={()=>{dispatch({type:'CHANGE_REGNUM',payload:12});}}>Change RegNumber</button>
            <button onClick={()=>{dispatch({type:'CHANGE_NAME',payload:"Mudasir"});}}>Change Name</button>
        </div>
    )

}
export default Child2;