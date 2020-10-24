import React, { Fragment } from 'react';
import './App.css';
import Button from './components/ButtonComponent';
import Introduction from '../src/components/Introduction';
import Container from './components/ContainerComponent';
import Divider from './components/DividerComponent';
import Image from './components/ImageComponent';
import Input from './components/InputComponent';
import Form from './components/FormComponent';
import Spinner from './components/SpinnerComponent';
import Alert from './components/AlertComponent';
import Card from './components/CardComponent';

const App = () => {
  return (
  <Fragment>   
     <Introduction />
     <Button />
     <Container />
     <Divider />
     <Image />
     <Input />
     <Alert />
     <Spinner />
     <Form />
     <Card />
  </Fragment>
  );
}

export default App;
