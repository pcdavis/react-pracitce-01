import styled,  { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 5px auto;
  background-color: ${props=> props.theme.primaryColor};
  color: ${props=> props.theme.secondaryColor};
  border: 1px solid ${props=> props.theme.primaryColor};
  font-size: 1.5em;

  ${props => props.danger && css`
  background: red;
  border: 1px solid red;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);
  color: white;
  ` }

  ${(props) => props.wide && css`
  width: 95%;
  display: block;
  `}
`;


export default Button;