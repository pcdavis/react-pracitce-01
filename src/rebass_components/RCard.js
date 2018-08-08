import React from 'react'
import styled from 'styled-components'
import {
    Card,
    Box,
    BackgroundImage,
    Subhead,
    Small
  } from 'rebass'
  import photo from '../assets/image01.jpg'


  function RCard (){
      
    return(

        <div>
            <Box width={256}  >
              <Card border={1}>
                <BackgroundImage
                ratio={2/4}
                src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                />
                <Subhead p={1}>
                  Hello
                </Subhead>
              </Card>
            </Box>
        </div>
    )

  }



export default RCard