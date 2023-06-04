// React components
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Chakra-UI components 
import {
    SimpleGrid,
    Text,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Box,
    Container,
    Tab,
    Tabs,
    TabList
  } from '@chakra-ui/react';

function About() {

  return (
  <Box>  
    <SimpleGrid 
        colSpan={{base: 12, sm: 10, md: 6}}
        colStart={{base: 1, sm: 2, md: 3}}>

        <Container>
            <Tabs
                align='center' 
                size={{base:'sm', sm: 'md', md: 'lg'}} 
                variant='line' 
                colorScheme='blackAlpha' 
                color={'#211a1d'}>
                <TabList> 
                    <NavLink to='/'>
                        <Tab>
                           <Text>Home</Text>
                       </Tab>
                    </NavLink>
    
                    <NavLink to='/Certifications'>
                        <Tab>
                            <Text>Certifications</Text>
                        </Tab>
                    </NavLink>
                    
                    <NavLink to='/Projects'>
                        <Tab>
                            <Text>Projects</Text>
                        </Tab>
                    </NavLink>
                    
                    <NavLink to='/About'>
                        <Tab>
                            <Text>About</Text>
                        </Tab>
                    </NavLink>
                </TabList>
            </Tabs>
        </Container>

      <Card>
        <CardHeader>
          <Heading
            as = 'h1'
            size={'md'} 
            align='center'>
            Hello Error
          </Heading>
        </CardHeader>

        <CardBody>
          <Text align={'center'}>
            Something went wrong... 
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>

  </Box>

  )
}

export default About; 