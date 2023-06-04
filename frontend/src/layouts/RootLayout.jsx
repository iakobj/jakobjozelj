// React components
import * as React from 'react'
import { Outlet } from 'react-router-dom';

// Routes and Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Chakra-UI components 
import {
    Grid,
    GridItem,
    Container,
    useColorModeValue
  } from '@chakra-ui/react';

function RootLayout() {

  return (

  <Container maxWidth={'960px'}>
    <Grid

      bgGradient={useColorModeValue(
        'radial(gray.300 1px, transparent 1px)',
        'radial(gray.300 1px, transparent 1px)'
      )}
      backgroundSize="20px 20px"
      opacity="1"

      marginLeft={'-16px'}
      marginRight={'-16px'}
      templateColumns='repeat(12, 1fr)'> 

      <GridItem 
        as='header'
        colSpan={{base: 12, sm: 12, md: 12}}
        colStart={{base: 1, sm: 1, md: 1}}>
        <Header/>
      </GridItem>

      <GridItem
        marginBottom={'1em'}
        colSpan={{base: 12, sm: 12, md: 3}}
        colStart={{base: 1, sm: 1, md: 1}}>
          <Sidebar/>
      </GridItem>

      <GridItem
        as='main'
        marginBottom={'1em'}
        marginRight={{md: '1em'}}
        colSpan={{base: 12, sm: 12, md: 9}}
        colStart={{base: 1, sm: 1, md: 4}}>
        <Outlet />
      </GridItem>
      

      <GridItem
        as='footer'
        minHeight={{base: '6em', sm: '6em', md: '6em' }}
        colSpan={{base: 12, sm: 12, md: 12}}
        colStart={{base: 1, sm: 1, md: 1}}> 
        <Footer/>
      </GridItem>

    </Grid>
  </Container>
  )
}

export default RootLayout;