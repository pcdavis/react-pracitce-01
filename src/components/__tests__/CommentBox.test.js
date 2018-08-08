import React from 'react'
import { mount } from 'enzyme';
import SC_CommentBox from 'components/styled/SC_CommentBox'
import { TextArea } from 'components/styled/SC_CommentBox'

let wrapped;

beforeEach( () => {
    wrapped = mount(<SC_CommentBox />)
})

afterEach(() => {
    wrapped.unmount()
})

it('checks if textarea is there', () => {
    console.log(wrapped)
     expect(wrapped.find(TextArea).length).toEqual(1)
})