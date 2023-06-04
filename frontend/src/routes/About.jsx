// React components
import * as React from 'react'

// Chakra-UI components 
import {
    SimpleGrid,
    Text,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Box,
    ListItem,
    UnorderedList,
    CardFooter,
    Image,
    Tag
  } from '@chakra-ui/react';

function About() {

  return (
  <Box>  
    <SimpleGrid 
      columns={{sm: 1, md: 1}} 
      spacing={'1em'} 
      marginLeft={{base:'1em', md: '0em'}} 
      marginRight={{base:'1em', md: '0em'}}>

      <Card>
        <CardHeader>
          <Heading
            as = 'h1'
            size={'md'} 
            align='center'>
            Hello World
          </Heading>
        </CardHeader>

        <CardBody>
          <Text>
          Hello and welcome. I am Slovenian systems engineer working in the area of data center technologies. 
          Currently I work for NIL, part of Conscia (Ljubljana, Slovenia) where my daily tasks include  working with: 
          </Text>
            <br/>
            <UnorderedList>
              <ListItem>Cisco UCS servers Blade and Rack,</ListItem>
              <ListItem>Cisco MDS Fibre Channel switches,</ListItem>
              <ListItem>Pure Storage Flash Arrays,</ListItem>
              <ListItem>VMware virtualization solutions,</ListItem>
              <ListItem>Dell EMC DataDomains and Unity, and</ListItem>
              <ListItem>Veeam Backup and Replication.</ListItem>
            </UnorderedList>
            <br/>
          
          <Text>
            In 2021 I started diving into programming (JavaScript) on a more serious level, and you’re currently 
            looking at the results of my first project - a personal website created from coding to deploying. 
          </Text>

          <Text>
            <br/>
            I put a great emphasis on learning and constantly searching for new areas in which to improve. 
            Apart from improving my programming skills, my next learning objectives are container oriented - 
            from building cointainers to deploying and managing them.
          </Text>

          <Text>
            <br/>
            Outside of work I am passionate about photography and cycling. Currently I am living in Portugal, 
            exploring the ups and downs of living abroad.
          </Text>

        </CardBody>
      </Card>
    </SimpleGrid>

    <Heading 
      as='h1'
      size='md'
      colorScheme={'blackAlpha'}
      paddingTop={'2em'} 
      align='center'
      marginLeft={{base:'1em', md: '0em'}} 
      marginRight={{base:'1em', md: '0em'}}> 
        
      Photos taken by me with Yashica FX-D
    </Heading>

    <SimpleGrid 
      columns={{base: 1, md: 2}} 
      spacing={'1em'} 
      marginTop={'1.5em'}
      marginLeft={{base:'1em', md: '0em'}} 
      marginRight={{base:'1em', md: '0em'}}>

      <Card   
        boxShadow='lg'
        overflow='hidden'>
        <Image
          objectFit='fill'
          src="../img/yashicabandw.JPG"
          alt='Black and White photo'
        />

        <CardFooter>
          <Tag
            size={{base: 'sm', sm: 'sm', md: 'md'}}
            colorScheme={'blackAlpha'}>
            <Text>ILFORD </Text>
          </Tag>

          <Tag 
            marginLeft={'0.6em'}
            size={{base: 'sm', sm: 'sm', md: 'md'}}
            colorScheme={'blackAlpha'}>
            <Text>HP5 PLUS</Text>
          </Tag>

          <Tag 
            marginLeft={'0.6em'}
            size={{base: 'sm', sm: 'sm', md: 'md'}}
            colorScheme={'blackAlpha'}>
            <Text>ISO 400</Text>
          </Tag>
        </CardFooter>
      </Card>

      <Card   
        boxShadow='lg'
        overflow='hidden'>        
        <Image
          objectFit='fill'
          src="../img/yashicacolor.JPG"
          alt='Color photo'
        />

        <CardFooter>
          <Tag
            size={{base: 'sm', sm: 'sm', md: 'md'}}
            colorScheme={'blackAlpha'}>
            <Text>KODAK</Text>
          </Tag>

          <Tag 
            marginLeft={'0.6em'}
            size={{base: 'sm', sm: 'sm', md: 'md'}}
            colorScheme={'blackAlpha'}>
            <Text>PORTRA</Text>
          </Tag>

          <Tag 
            marginLeft={'0.6em'}
            size={{base: 'sm', sm: 'sm', md: 'md'}}
            colorScheme={'blackAlpha'}>
            <Text>ISO 200</Text>
          </Tag>
        </CardFooter>
      </Card>

    </SimpleGrid>
  </Box>

  )
}

export default About; 