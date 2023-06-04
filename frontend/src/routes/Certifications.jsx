// React components
import * as React from 'react'
import { useLoaderData } from 'react-router-dom';

// Chakra-UI components 
import {
  Container,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Tag,
  Divider,
  Flex,
  Spacer,
  } from '@chakra-ui/react';

// import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';

function Certifications() {

  const data = useLoaderData();
  const certs = data.certi;

  return (
    <SimpleGrid 
      columns={{sm: 2, md: 2}} 
      spacing={'1em'} 
      marginLeft={{base:'1em', md: '0em'}} 
      marginRight={{base:'1em', md: '0em'}}>

      {certs && certs.map && certs.map(cert => (
          <Card key={cert.id}   
            boxShadow='lg'
            overflow='hidden'>
            
            <CardHeader
            maxHeight={'6.0em'}
            bg='#CBD5DF'>
              <Flex>
                <Spacer/>
                  <Image
                    objectFit='cover'
                    maxW={'9em'}
                    paddingTop={'-1.0em'}
                    marginTop='-1.2em'
                    paddingBottom={'1.0em'}
                    src={cert.imgsrc}
                    alt={cert.name}/>
                <Spacer/>
              </Flex>
            </CardHeader>

            <Heading 
              size={{base:'sm', sm: 'sm', md: 'sm' }}
              marginTop={{base: '0.5em'}}
              marginLeft='1.25em'>
                <Text>{cert.title}</Text>
            </Heading>

            <CardBody>
              <Text align={'justify'}>
                {cert.description}
              </Text>
            </CardBody>

            <Container
              marginTop='1em'>
                <Divider />
            </Container>

            <CardFooter>
              <Tag
                size={{base: 'sm', sm: 'sm', md: 'md'}}
                colorScheme={'blackAlpha'} 
                marginRight={'1em'}>
                <Text>{cert.vendor}</Text>
              </Tag>
              <Tag
                size={{base: 'sm', sm: 'sm', md: 'md'}}
                colorScheme={'blackAlpha'} 
                marginRight={'1em'}>
                <Text>{cert.code}</Text>
              </Tag>
              <Tag
                size={{base: 'sm', sm: 'sm', md: 'md'}}
                colorScheme={'blackAlpha'}>
                <Text>{cert.year}</Text>
              </Tag>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  )
}

export default Certifications;

export const certsLoader = async () => {
  const certi = await fetch(`${API_ENDPOINT}/Certifications`);
  return {certi: await certi.json()};
}; 
