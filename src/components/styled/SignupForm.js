import React, { Component } from 'react';
import styled from 'styled-components'

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
        border: 2px solid green;
    } 
        
`;

const Button = styled.button`
    font-size: 1.5em;
    background-color: black;
    color: white;
`;

const Title = styled.h2`
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
            lastName: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]:value
        })
    }

    signUp = (e) => {
        const email = new FormData(e.target).get('email');
        const firstName = new FormData(e.target).get('firstName')
        const lastName = new FormData(e.target).get('lastName')
        const stateObj = {
            firstKey: this.state.firstName,
            secondKey: this.state.lastName,
            thirdKey: this.state.email
        }
        e.preventDefault();
        console.log(`New signup from ${email}`);
        console.log(`FormData gets the field with name = firstname and returns:   ${firstName}`);
        console.log(`FormData gets the field with name = lastname and returns:  ${lastName}`);
        console.log(`the state object firstKey key's value is ${stateObj.firstKey} ` )
      }

    render(){
        return(
            <Form onSubmit={this.signUp}>
                <Title>Sign up for our newsletter</Title>
                <Input
                    onChange={this.handleChange}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName} />
                <Input
                    onChange={this.handleChange}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName} />
                <Input
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="email address"
                    value={this.state.email} />
                <Button>Submit</Button>
                <div>First Name: {this.state.firstName} </div>
                <div>Last Name: {this.state.lastName}</div>
            </Form>
        )
    }
}


