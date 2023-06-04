// React components
import * as React from 'react'

// Chakra-UI components 
import {
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text
  } from '@chakra-ui/react';


function Footer() {

  
  return (
    <Grid
        gridTemplateColumns= 'repeat(12, 1fr)'
        gridTemplateRows='repeat(6, 1fr)'>

    <GridItem
      colSpan={{base: 10, sm: 8, md: 8}}
      colStart={{base: 2, sm: 3, md: 3}}
      rowStart={{base: 5, sm: 5, md: 5}}
      rowSpan={{base: 2, sm: 2, md: 2}}>
      
      <Flex>
        <Spacer/>
        <Text 
          textColor={'gray.700'} 
          fontWeight='bold' 
          fontSize={{base: 'sm', md: 'md'}}> 

          jakobjozelj.com -  Jakob Jozelj 2023

        </Text>
        <Spacer/>
      </Flex>
      
    </GridItem>
        
    </Grid>

  )
} 

export default Footer;