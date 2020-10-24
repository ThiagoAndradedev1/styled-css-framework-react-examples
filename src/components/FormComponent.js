import React from 'react';
import Form from "styled-css-framework-react/core/Form";
import Input from "styled-css-framework-react/core/Input";
import Container from 'styled-css-framework-react/core/Container';
import Label from 'styled-css-framework-react/core/Card';
import FormField from 'styled-css-framework-react/core/FormField';
import Button from 'styled-css-framework-react/core/Button';

const FormComponent = () => {
    return (    
        <div style={{marginTop: "25px", textAlign: "center"}}>
        <h1 style={{ color: "#e53170", paddingBottom: "25px", paddingTop: "25px" }}>Form</h1>   
         <Container>
         <Form>
         <FormField>
         <Label>First Name</Label>   
         <Input fluid placeholder="BIG INPUT"/>
         </FormField>
         <FormField>
         <Label>Last Name</Label>   
         <Input fluid placeholder="BIG INPUT"/>   
         </FormField>  
         <FormField>
         <Label>Password</Label>   
         <Input fluid placeholder="BIG INPUT"/>       
         </FormField>  
         <Button gray fluid>Submit</Button>   
         </Form>
         </Container>
        </div>
    )
}

export default FormComponent;