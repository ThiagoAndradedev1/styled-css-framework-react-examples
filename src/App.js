import React, { Fragment } from 'react';
import './App.css';
import Button from '../src/components/Btn';
import Introduction from '../src/components/Introduction';
import Container from '../src/components/Cont';
import Divider from '../src/components/Divid';
import Image from '../src/components/Img';

const App = () => {
  return (
  <Fragment>   
     <Introduction />
     <Button />
     <Container />
     <Divider />
     <Image />
  </Fragment>
  );
}

export default App;
