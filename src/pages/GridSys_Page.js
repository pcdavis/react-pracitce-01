import React from 'react';
import { Grid, GridItem } from 'styled-grid-responsive';
import styled, { ThemeProvider } from 'styled-components';
import LightTheme from '../components/styled_themes/light';
import DarkTheme from '../components/styled_themes/dark';

export default function MyGrid(props) {

  const NewGrid = styled(Grid)`
  background-color: lightblue;
  `;
  
	return (
		<div>
			<NewGrid gutter={20}>
				<GridItem media={{ phone: 1/2, tablet: 1 / 2 }} col={1 / 3}>
					<p>Item 1</p>
				</GridItem>
				<GridItem media={{ phone: 1/2, tablet: 1 / 2 }} col={1 / 3}>
					<p>Item 2</p>
				</GridItem>
				<GridItem media={{ phone: 1/2, tablet: 1 / 2 }} col={1 / 3}>
					<p>Item 3</p>
				</GridItem>
				<GridItem media={{ phone: 1/2, tablet: 1 / 2 }} col={1 / 3  }>
					<p>Item 4</p>
				</GridItem>
			</NewGrid>
		</div>
	);
}
