// React components
import * as React from 'react';

// Chakra-UI components 
import {
    Heading,
    Box
  } from '@chakra-ui/react';

// import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';

// import certifications and projects cards
import Certifications from './Certifications.jsx';
import Projects from './Projects';

function Home() {
  
  return (

    <Box>

      <Heading 
        as='h1'
        size='md'
        colorScheme={'blackAlpha'}
        align='center'
        paddingTop={{base: '1em', sm: '1em', md: '2em'}} 
        marginTop={{base: '1em', sm: '1em', md: '-4em'}}>
        My latest certifications
      </Heading>

      <Box paddingTop={'1em'}>
        <Certifications />
      </Box>

      <Heading 
        as='h1'
        size='md'
        colorScheme={'blackAlpha'}
        paddingTop={'1em'} 
        align='center'> 
        
        My latest projects
      </Heading>

      <Box paddingTop={'1em'}>
        <Projects />
      </Box>

    </Box>
  )
}

export default Home;

export const homeLoader = async () => {
  const certi = await fetch(`${API_ENDPOINT}/Certifications/home`);
  const proj = await fetch(`${API_ENDPOINT}/Projects/home`);

  return {certi: await certi.json(), proj: await proj.json()};
}; 