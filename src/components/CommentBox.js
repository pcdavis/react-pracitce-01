import React, { Component } from 'react'
import styled from 'styled-components';
import Button from 'components/styled/Button'
import dark from 'components/styled_themes/dark'




class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <form>
                <h4>Add a comment</h4>
                    <textarea/>
                    <div>
                     <Button theme={dark}>Submit</Button>
                    </div>
            </form>
        )
    }
}

export default CommentBox