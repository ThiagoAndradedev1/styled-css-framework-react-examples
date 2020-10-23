import React from 'react';
import Button from "styled-css-framework-react/core/Button";
import Container from 'styled-css-framework-react/core/Container';
import Divider from "styled-css-framework-react/core/Divider";

const Divid = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Divider</h1>
        <Container>
        <h3 style={{ color: "#fff", paddingBottom: "25px"}}>Dashed</h3>
        <Divider />
        <h3 style={{ color: "#fff", paddingTop: "25px"}}>Dotted</h3>
        <Divider style={{ marginTop: "35px" }} dotted/>
        <h3 style={{ color: "#fff", paddingTop: "25px"}}>Solid</h3>
        <Divider style={{ marginTop: "35px" }} solid/>
        <h3 style={{ color: "#fff", paddingTop: "25px"}}>Rounded</h3>
        <Divider style={{ marginTop: "35px" }} rounded/>
        </Container>
        </div>
    )
}

export default Divid;
