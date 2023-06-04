// React components
import * as React from 'react';
import { useState } from 'react';

// Chakra-UI components 
import {
    Input, 
    Button,
    Heading,
    Select,
    VStack,
    InputGroup,
    Textarea,
    Card,
    CardHeader,
    CardBody
  } from '@chakra-ui/react';

  // import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';

export default function NewProject() {
    const [formData, setFormData] = useState({
        title: '',
        projDescription: '',
        year: '',
        image: ''
    });
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to the backend
        alert(`
            title: ${formData.title}, 
            projDescription: ${formData.projDescription}, 
            year: ${formData.year},
            image: ${formData.image}`
        )
            
        console.log("Send form data to the backend");
        const form = event.target;
        
        const formsData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formsData));

        // You can pass formData as a fetch body directly:
        fetch(`${API_ENDPOINT}/ItemsInput/NewProject`, {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            credentials: 'include',  
            body: jsonData 
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
            console.log("Posted newProject");
        }
        });
    };

  return (
    <Card
        boxShadow='md'
        overflow='hidden'>

        <CardHeader>
            <Heading size='md'>New Project</Heading>
        </CardHeader>

        <CardBody>
            <InputGroup>
                <form onSubmit={handleSubmit}>
                    <VStack 
                        spacing='1em'>

                        <Input name="title" id="title" value={formData.title} onChange={handleChange} placeholder='Title' size='md' />

                        <Textarea name="projDescription" id="projDescription" value={formData.projDescription} onChange={handleChange} placeholder='Copy project description here' />

                        <Input name="year" id="year" value={formData.year} onChange={handleChange} placeholder='Year' />
 
                        <Select name="image" id="image" value={formData.image} onChange={handleChange} placeholder='Select image'>
                          <option value='./img/jakobjozelj.png'>Avatar</option>
                          <option value='./img/oblakec.png'>Cloud</option>
                          <option value='../img/codecademy.png'>CodeCademy</option>
                        </Select>

                        <Button type='submit' colorScheme='blue'>Add Project</Button>
                    </VStack>
                </form>
            </InputGroup>        
        </CardBody>
    </Card>
  )
}