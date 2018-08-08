import React from 'react';
import styled from 'styled-components'

const PassWordInput = styled.input.attrs({
    type: 'password'
})`
    height: 20px;
    border-radius: 5px;
    outline: none;
    background-color: none;
    border-bottom: 5px solid coral;
    &:focus{
        border-color: blue;
    }
`
export default PassWordInput;