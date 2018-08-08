import React from 'react';
import { shallow } from 'enzyme';
import Comments_Page from 'pages/Comments_Page'
import SC_CommentBox from 'components/styled/SC_CommentBox';
import CommentList from 'components/CommentList';
import dark from 'components/styled_themes/dark'

let myWrappedComponent; // have to define it outside the functions so all tests have access ot it. It needs to be let and not const because it gets reassigned

beforeEach(() => {
    myWrappedComponent = shallow(<Comments_Page />);
})

it('should show CommentBox', () => {
   expect(myWrappedComponent.find(SC_CommentBox).length).toEqual(1)
})

it('should show CommentList', () => {
    expect(myWrappedComponent.find(CommentList).length).toEqual(1)
})