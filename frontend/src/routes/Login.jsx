// React components
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


// import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';

// Chakra-UI components 
import {
    SimpleGrid,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Card,
    Heading,
    CardBody,
    InputGroup,
    Input,
    InputRightElement,
    Button,
    VStack,
  } from '@chakra-ui/react';

function Login() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate();

    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    const handleSubmit = (e) => {
        // Read the form data
        e.preventDefault();
        const form = e.target;
        
        const formData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formData));
        
        // You can pass formData as a fetch body directly:
       fetch(`${API_ENDPOINT}/Login`, { method: 'POST', headers: {"Content-Type": "application/json"}, credentials: 'include',  body: jsonData }).then((response) => {
        console.log(response.status);
        if (response.status == 200) {
            navigate("/ItemsInput");
        }
       });

    }

  return (
   
    <SimpleGrid 
      columns={{base: 1, md: 2}}>
      <Card
        boxShadow='lg'
        overflow='hidden'>
        <CardBody>        
            <Heading size='md' textAlign={'center'} >Login</Heading>

            <VStack 
                spacing='1em'
                marginTop='2em'
                paddingLeft='1em'
                paddingRight='1em'>
            
                <form onSubmit={handleSubmit}>
                    
                    <FormControl isInvalid={isError}>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' name='username' onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                Enter the username.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Username is required.</FormErrorMessage>
                        )}
                    </FormControl>
                        
                    <FormControl isRequired>
                    <InputGroup 
                        size='md'
                        marginTop='0.8em'>
                        <Input 
                            name='password'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password'/>
    
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                    </InputGroup>
                    </FormControl>
                        
                    <Button
                        mt={4}
                        colorScheme='blue'
                        type='submit'>
                        Login
                    </Button>
                </form>
                

            </VStack>
        </CardBody>
      </Card>
    </SimpleGrid>
 
  )
}

export default Login; 