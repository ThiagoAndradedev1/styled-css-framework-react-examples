import React from 'react';
import Alert from "styled-css-framework-react/core/Alerts";
import Container from "styled-css-framework-react/core/Container";

const AlertComponent = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Alerts</h1>
        <Container>
        <Alert>Standard ! This is a standard alert.</Alert>
        <Alert style={{ marginTop: "25px" }} danger>Danger! Indicates a dangerous or potentially negative action.</Alert>
        <Alert style={{ marginTop: "25px" }} success>Success! Indicates a successful or positive action.</Alert>
        <Alert style={{ marginTop: "25px" }} info>Info! Indicates a neutral informative change or action.</Alert>
        <Alert style={{ marginTop: "25px" }} warning>Warning! Indicates a warning that might need attention.</Alert>
        </Container>   
        </div>
    )
}

export default AlertComponent;