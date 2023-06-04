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

function SideProjects() {
  
  return (
    <Card>
        <CardHeader>
            <Heading size='sm'>My Projects</Heading>
        </CardHeader>

        <CardBody>
        <Text fontSize='md'>
          I have done some bigger, some smaller projects troughout my tech adventures, i have listed few of them here.
        </Text>
        </CardBody>
    </Card>

  )
} 

export default SideProjects;