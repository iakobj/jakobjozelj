// React components
import * as React from 'react'

// Chakra-UI components 
import {
    Text,
    Card,
    CardHeader,
    CardBody,
    Heading
  } from '@chakra-ui/react';

function SideHome() {
  
  return (
    <Card
      boxShadow='lg'>
      <CardHeader>
        <Heading size='sm'>Hello World</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize='md'>
          I am currently working as a Systems Engineer at NIL.
        </Text>
        <Text 
          paddingTop={'1em'}> 
          My daily tasks primarily include working with Cisco UCS servers, 
          Pure Storage Flash Arrays and VMware virtualization solutions.
        </Text>
      </CardBody>
    </Card>
  )
} 

export default SideHome;