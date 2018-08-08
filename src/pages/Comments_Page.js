import React from 'react';
import styled from 'styled-components';
import CommmentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import SC_CommentBox from 'components/styled/SC_CommentBox'
import imgUrl from 'assets/topography.svg'


const Bg = styled.div`
    background-image: url('${imgUrl}'),linear-gradient(110deg, #f93d66, #6d47d9);
    /* background-size: contain; */
    height: 100vh;
    width: 100vw;
    background-position: fixed;
    padding-top: 15px;
`;


export default function Comments_Page() {
    return(
        <Bg>
            <SC_CommentBox />
            <CommentList />
        </Bg>
    )
}