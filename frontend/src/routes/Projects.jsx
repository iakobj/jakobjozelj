// React components
import * as React from 'react'
import { useLoaderData } from 'react-router-dom';

// Chakra-UI components 
import {
  Text,
  SimpleGrid,
  Card,
  CardFooter,
  Heading,
  Image,
  Tag,
  CardBody,
  Stack
  } from '@chakra-ui/react';

// import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';


function Projects() {

  const data = useLoaderData();
  const projects = data.proj;
  
  return (
    <SimpleGrid 
      columns={{sm: 1, md: 1}} 
      spacing={'1em'} 
      marginLeft={{base:'1em', md: '0em'}} 
      marginRight={{base:'1em', md: '0em'}}>

      {projects && projects.map && projects.map(proj => (
        <Card key={proj.id}   
          boxShadow='lg'
          overflow='hidden'
          direction={{ base: 'column', sm: 'row' }}>
            
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '15em' }}
            bg='#CBD5DF'
            src={proj.imgsrc}
            alt={proj.name}/>

          <Stack>
            <CardBody>
              <Heading 
                size={{base:'sm', sm: 'sm', md: 'sm' }}>
                {proj.title}
              </Heading>
              <Text py='2'>
                {proj.description}
              </Text>
            </CardBody>
            <CardFooter>
              <Tag
                size={{base: 'sm', sm: 'sm', md: 'md'}}
                colorScheme={'blackAlpha'}>
                <Text>{proj.year}</Text>
              </Tag>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
    
  )
}

export default Projects;

export const projectsLoader = async () => {
  const proj = await fetch(`${API_ENDPOINT}/Projects`)
  return {proj: await proj.json()};
}; 