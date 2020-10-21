import React, { Fragment } from 'react';
import './App.css';
import Button from '../src/components/Btn';
import Introduction from '../src/components/Introduction';
import Container from '../src/components/Cont';


const App = () => {
  return (
  <Fragment>   
     <Introduction />
     <Button />
     <Container />  
  </Fragment>
  );
}

export default App;
