// React components
import * as React from 'react'

// Chakra-UI components 
import {
    Text,
    Card,
    CardHeader,
    CardBody,
    UnorderedList,
    ListItem,
    Heading
  } from '@chakra-ui/react';

function SideAbout() {
  
  return (
    <Card>
      <CardHeader>
          <Heading size='sm'>About me</Heading>
      </CardHeader>
      <CardBody>
          <UnorderedList>
            <ListItem>Systems Engineer</ListItem>
            <ListItem>Tech enthusiast</ListItem>
            <ListItem>From Slovenia</ListItem>
          </UnorderedList>
          <br/>

          <Text> Working @ NIL</Text>
          <UnorderedList>
            <ListItem>2018 - Present</ListItem>
          </UnorderedList>
      </CardBody>
    </Card>
  )
} 

export default SideAbout;