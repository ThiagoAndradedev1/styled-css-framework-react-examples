import React from 'react';
import Container from 'styled-css-framework-react/core/Container';
import Divider from "styled-css-framework-react/core/Divider";
import Card from "styled-css-framework-react/core/Card";

const DividerComponent = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Divider</h1>
        <Container>
        <Card>  
        <h3 style={{ color: "black", paddingBottom: "25px"}}>Dashed</h3>
        <Divider />
        <h3 style={{ color: "black", paddingTop: "25px"}}>Dotted</h3>
        <Divider style={{ marginTop: "35px" }} dotted/>
        <h3 style={{ color: "black", paddingTop: "25px"}}>Solid</h3>
        <Divider style={{ marginTop: "35px" }} solid/>
        <h3 style={{ color: "black", paddingTop: "25px"}}>Rounded</h3>
        <Divider style={{ marginTop: "35px" }} rounded/>
        </Card>  
        </Container>
        </div>
    )
}

export default DividerComponent;
