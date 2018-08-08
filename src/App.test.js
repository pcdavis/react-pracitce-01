

// Below is the vanilla way of doing Jest tests if not using Enzyme method
/* 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Comments_Page from './pages/Comments_Page';

it('should contain the Comments_Page component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App /> , div);
  console.log(div)
  expect(div).toContain( "<div><div><h2>Inside the Comments_Page divs</h2><div>COMMENT BOX</div><div>I'm the CommentList</div></div></div>")

  ReactDOM.unmountComponentAtNode(div);
});
*/

//-----------------Enzyme Method of Testing ---------------------------

import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Comments_Page from 'pages/Comments_Page'

it('should show the Comments_Page component' , () => {
  const myWrappedComponent = shallow(<App />)

  expect(myWrappedComponent.find(Comments_Page).length).toEqual(1);
})