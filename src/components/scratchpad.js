import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import CommentList from 'components/CommentList'
// import dark from 'compnents/styled_themes'
import Comments_Page from 'pages/Comments_Page'
import SC_CommentBox from 'components/styled/CommentBox';

let component;

beforeEach(() => {
    component = shallow(<Comments_Page />)
});

it('should have an SC_CommentBox component', () => {
    expect(component.find(SC_CommentBox).length).toEqual(1)
})


let myComponent;

beforeEach(() => {
    myComponent = MouseEvent(<Comment_Page />)
})

it('should have comment box', () =>{
    expect(myComponent.find(SC_CommentBox).length).toEqual(1)
})