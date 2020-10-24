import React from 'react';
import Button from "styled-css-framework-react/core/Button";
import Card from "styled-css-framework-react/core/Card";
import Container from "styled-css-framework-react/core/Container";

const ButtonComponent = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Buttons</h1>
        <Container>
        <Card>
        <Button pink>Hello World</Button>
        <Button brown>Hello World</Button>
        <Button>Hello World</Button>
        <Button blue>Hello World</Button>
        <Button red>Hello World</Button>
        <Button yellow>Hello World</Button>
        <Button gray>Hello World</Button>
        <Button purple>Hello World</Button>
        <Button black>Hello World</Button>
        <Button orange>Hello World</Button>
        <h3 style={{ paddingTop: "25px", paddingBottom: "25px" }}>Fluid Button</h3>
        <Button fluid purple>Hello World</Button>
        </Card>
        </Container>
        </div>
    )
}

export default ButtonComponent
