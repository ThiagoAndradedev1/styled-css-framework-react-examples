import React from 'react';
import Container from 'styled-css-framework-react/core/Container';
import Loader from "styled-css-framework-react/core/Loader";

const SpinnerComponent = () => {
    return (
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Spinner</h1>
        <Container style={{ display: "inline-block" }}>
        <Loader />
        <Loader blue style={{ marginTop: "15px" }}/>
        <Loader yellow style={{ marginTop: "15px" }}/>
        <Loader green style={{ marginTop: "15px" }}/>
        </Container> 
        </div>
    )
}

export default SpinnerComponent;
