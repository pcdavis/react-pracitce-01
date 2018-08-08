import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import LightTheme from '../components/styled_themes/light'
import DarkTheme from '../components/styled_themes/dark'
import SignupFormWithTheme from '../components/styled/SignUpFormWithTheme';
import Button from '../components/styled/Button'


class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          currentTheme: LightTheme
        }
        this.handleToggle = this.handleToggle.bind(this)
      }
    
      handleToggle(){
        this.setState({
          currentTheme: this.state.currentTheme === LightTheme ? DarkTheme : LightTheme
        })
      }
    
      //Below, I use two different ways to use themes: (1)send a theme as a prop to <SignUpForm /> where it uses ThemeProvider inside of it and (2) wrap two <Button /> compoents with ThemeProviders and the Button components are able to use the themes inside their Component Classes even though they don't declare ThemeProvider in their internal code. Also note: I pass danger as a param in the second Button, which overrides the theme using css declared in the component Button class. Also, the first button has onClick which switches between light and dark theme.
    
      render() {
        return (
            <div>
                <h1>SignUpForm using ThemeProvider</h1>
               <p>Below, I use two different ways to use themes: (1)send a theme as a prop to SignUpForm /> where it uses ThemeProvider inside of it and (2) wrap two Button /> compoents with ThemeProviders and the Button components are able to use the themes inside their Component Classes even though they don't declare ThemeProvider in their internal code. Also note: I pass danger as a param in the second Button, which overrides the theme using css declared in the component Button class. Also, the first button has onClick which switches between light and dark theme.</p>
               
               <SignupFormWithTheme theme={this.state.currentTheme} />
                  <ThemeProvider theme={this.state.currentTheme}>
                  <Button onClick={this.handleToggle} > Hello Darkness My Old Friend </Button>
                  </ThemeProvider>
                  <ThemeProvider theme={DarkTheme}>
                  <Button danger > Danger Will Robins </Button>
                  </ThemeProvider>
            </div>
        );
      } //end of render
}//end of component

export default SignUpForm;

