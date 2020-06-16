import React, {useState, useContext} from 'react';
import ValueContext from '../ValueContext';

function Parent(props) {
let value =useContext(ValueContext);
  return (
  <h1>Name: Ansa Amjad <br/>Registeration Number:{value[0]}</h1>
  );
}

export default Parent;
