import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from 'components/styled/Button'
import dark from 'components/styled_themes/dark'

//Styled Sub-Components------------------------

const Form = styled.form`
    width: 300px;
    margin: 0 auto; 
`;

const TextArea = styled.textarea`
    width: 95%;
    height: 400px;
    display: block;
    margin: 0 auto;
    `;


class SC_CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = { 
            comment: ''
          }
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value })
    }
    
    render() { 
        return ( 
            <Form >
            <TextArea name="comment" value={this.state.comment} onChange={this.handleChange} />
            <Button wide theme={dark}>Submit your comment</Button>
            </Form>
         );
    }
}
 
export default SC_CommentBox;