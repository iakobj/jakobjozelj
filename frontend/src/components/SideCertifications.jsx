// React components
import * as React from 'react';

// Chakra-UI components 
import {
    Text,
    Card,
    CardHeader,
    CardBody,
    Heading,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react';

function SideCertifications(props) {
        
  return (
    <Card
        boxShadow='lg'>
        <CardHeader>
            <Heading size='sm'>My Certifications</Heading>
        </CardHeader>

        <CardBody>
            <Text> 
                I completed multiple certifications throughout my career. 
                Here is a list of vendors that I have certifications from.
            </Text>
            <br/>

            <UnorderedList>
                <ListItem>Cisco</ListItem>
                <ListItem>Pure Storage</ListItem>
                <ListItem>Dell EMC</ListItem>
                <ListItem>VMware</ListItem>
            </UnorderedList>
        </CardBody>
    </Card>

  )
} 

export default SideCertifications;