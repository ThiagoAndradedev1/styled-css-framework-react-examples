import React from 'react';
import Input from "styled-css-framework-react/core/Input";
import Container from 'styled-css-framework-react/core/Container';

const InputComponent = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Inputs</h1>
          <div style={{ }}>
              <h1 style={{  color: "#fff", paddingBottom: "25px" }}>Sizes</h1>
              <h3 style={{  color: "#fff", paddingBottom: "25px" }}>Small - Medium - Big - Large</h3>
              <Input small placeholder="SMALL INPUT"/>
              <Input medium placeholder="MEDIUM INPUT"/>
              <Input big placeholder="BIG INPUT"/>
              <Input large placeholder="LARGE INPUT" />
              <h1 style={{  color: "#fff", paddingTop: "25px", paddingBottom: "25px" }}>Fluid</h1>
              <Container>
              <Input fluid placeholder="FLUID INPUT" />
              </Container>
          </div>
        </div>
    )
}

export default InputComponent;