import React, { Fragment } from 'react';
import Container from "styled-css-framework-react/core/Container";
// import {Button} from "styled-css-framework-react/core/Button";
import Loader from "styled-css-framework-react/core/Loader";


const Introduction = () => {
    return (
        <Fragment>
            <Container>
            <div style={{ marginTop: "35px", textAlign: "center" }}>
            <h1 style={{ color: "#fffffe" }}>styled-css-framework-react.</h1>
            <p style={{ color: "#a7a9be", paddingTop: "25px" }}>@author: Thiago Andrade Silva</p>
            <div style={{ paddingTop: "25px" }}>
            {/* <Button orange>GO TO NPM</Button>
            <Button orange style={{ marginLeft: "10px" }}>GITHUB</Button> */}
            </div>
            </div>
            </Container>
        </Fragment>
    )
}

export default Introduction
