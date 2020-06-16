import React ,{useState}from 'react';
import Parent from './components/Parent';
import Child from './components/Child';
import Child2 from './Child2';

import ValueContext from './ValueContext';

function App() {
  let value ={name:'Ansa Amjad',regnum:42};

  let [student, setStudent]=useState(value);
  return (
    <ValueContext.Provider value={student}>
    <div>

        <h1>Hello Ansa from app.js</h1>
        <Parent />
        {/* <button onClick={()=>(setReg(++regn))}>Update registeration</button> */}
        <Child />
        <Child2 />

    </div>
    </ValueContext.Provider>
  );
}

export default App;
