import React, { Component } from 'react'
import styled from 'styled-components';

const Form = styled.form`
    margin: 0 auto;
    width: 50%;
    min-width: 400px;
    max-width: 800px;
    text-align: center;
    border: 1px solid #ddd;
    padding-top: 0px;
    padding-bottom: 90px;
    color: black;
    background: white;
`;

const Input = styled.input`
    font-size: 1.45em;
    border: 1px solid #ddd;
    
    &:focus{
        background-color: lightskyblue;
    } 
`;

const Button = styled.button`
    font-size: 1.5em;
    background-color: black;
    color: white;
`;

const Title = styled.h1`
    margin-top: 40px;
    margin-bottom: 70px;
    font-size: 1.5em;
    color: black;
    background-color: white;
`;


export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]:value
        })
    }
    render(){
        return(
            <Form>
                <Title>Sign up for our newsletter</Title>
                <Input
                    onChange={this.handleChange}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName} />
                <Input
                    onChange={this.handleChange}
                    name="lasttName"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName} />
                <Button>Submit</Button>
                <div>First Name: {this.state.firstName} </div>
                <div>Last Name: {this.state.lastName}</div>
            </Form>

        )
    }
}