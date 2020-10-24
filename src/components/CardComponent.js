import React from 'react';
import Card from "styled-css-framework-react/core/Card";
import Container from "styled-css-framework-react/core/Container";

const CardComponent = () => {
    return (
        <div style={{marginTop: "25px", textAlign: "center", marginBottom: "25px"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Cards</h1>
        <Container>
        <Card>Standard Card</Card>
        <Card style={{ marginTop: "25px" }} gray>Gray Card</Card>    
        </Container>   
        </div>
    )
}

export default CardComponent
