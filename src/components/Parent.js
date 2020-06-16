import React, {useState, useContext} from 'react';
import ValueContext from '../ValueContext';

function Parent(props) {
let student =useContext(ValueContext);
  return (
  <h1>Name: {student.name}  <br/>Registeration:{student.regnum}</h1>
  );
}

export default Parent;
