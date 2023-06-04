// React components
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Images
//import Jakob from '../../public/img/Jakob.jpg';

// Chakra-UI components 
import {
    Grid,
    GridItem,
    Text,
    Image,
    Flex,
    Spacer,
    Container,
    Tab,
    Tabs,
    TabList
  } from '@chakra-ui/react';

function Header() {

  return (
    <Grid
        height={{base: '13em', sm: '13em', md: '19em'}}
        gridTemplateColumns= 'repeat(12, 1fr)'
        gridTemplateRows='repeat(12, 1fr)'>

        <GridItem
            colSpan={{base: 12, sm: 12, md: 12}}
            colStart={{base: 1, sm: 1, md: 1}}
            rowSpan={{base: 9, sm: 9, md: 6}}
            rowStart={{base: 1, sm: 1, md: 1}}
            bg='#2978A0'
            boxShadow='lg'
            borderRadius={{md: '0px 0px 0.5em 0.5em'}}>
        </GridItem>

        <GridItem
            colSpan={{base: 12, sm: 12, md: 3}}
            colStart={{base: 1, sm: 1, md: 1}}
            rowSpan={{base: 7, sm: 7, md: 7}}
            rowStart={{base: 2, sm: 2, md: 4}}>
            <Flex>
                <Spacer/>
                <Image
                    boxShadow='lg'
                    height={{base: '5.5em', sm: '5.5em', md: '7.6em'  }}
                    width={{base: '5.5em', sm: '5.5em', md: '7.6em' }} 
                    marginTop={{base: '0em', sm: '-0.3em', md: '0em'}}
                    src="../img/Jakob.jpg"
                    alt='Jakob Jozelj' 
                    borderRadius='full'
                    borderStyle='solid'
                    borderWidth='0.45em'
                    borderColor='white'
                    objectFit='cover'/>
                <Spacer/>      
        </Flex>
        </GridItem>

        <GridItem
            colSpan={{base: 12, sm: 12, md: 3}}
            colStart={{base: 1, sm: 1, md: 1}}
            rowSpan={{base: 1, sm: 1, md: 1}}
            rowStart={{base: 9, sm: 9, md: 10}}>
            <Flex>
            <Spacer/>
                <Text
                    marginTop={{base: '-0.8em', sm: '-0.8em', md: '-2em' }}
                    fontWeight={'bold'} 
                    color={{base: 'white', sm: 'white', md: '#211a1d'}}
                    fontSize={{base: 'sm', sm: 'sm', md: 'lg'}}>
                    Jakob Jozelj
                </Text>
            <Spacer/>      
            </Flex>
        </GridItem>

        <GridItem
            colSpan={{base: 12, sm: 12, md: 3}}
            colStart={{base: 1, sm: 1, md: 1}}
            rowSpan={{base: 1, sm: 1, md: 1}}
            rowStart={{base: 11, sm: 11, md: 11}}>
            <Flex>
            <Spacer/>
                <Text
                    marginTop={{base: '-0.8em', sm: '-0.8em', md: '-2em' }}
                    color={{base: '#211a1d', sm: '#211a1d', md: '#211a1d'}}
                    fontSize={{base: 'sm', sm: 'sm', md: 'md'}}>
                    me@jakobjozelj.com
                </Text>
            <Spacer/>      
            </Flex>
        </GridItem>
 
        <GridItem
            colSpan={{base: 12, sm: 12, md: 7}}
            colStart={{base: 1, sm: 1, md: 5}}
            rowSpan={{base: 1, sm: 1, md: 1}}
            rowStart={{base: 12, sm: 12, md: 9}}
            marginBottom={{base: '1em', sm: '1em', md: '0em'}}>
                
            
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
        </GridItem>
    </Grid> 
  )
}

export default Header;