// React components
import * as React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

// Chakra-UI components 
import {
    Button,
    Heading,
    Select,
    VStack,
    InputGroup,
    Card,
    CardHeader,
    CardBody
  } from '@chakra-ui/react';

  // import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';

export default function RemoveProject() {
    const data = useLoaderData();
    const projs = data.proj;

    const [formData, setFormData] = useState({
        project: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to the backend
        alert(`
            title: ${formData.project}`

        )
            
        console.log("Send form data to the backend");
        const form = event.target;
        
        const formsData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formsData));

        // You can pass formData as a fetch body directly:
        fetch(`${API_ENDPOINT}/ItemsInput/RemoveProject`, {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            credentials: 'include',  
            body: jsonData 
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
            console.log("Removed Project");
        }
        });
    };

    return (
        <Card
            boxShadow='md'
            overflow='hidden'
        >
            <CardHeader>
                <Heading size='md'>Remove Project</Heading>
            </CardHeader>
            <CardBody>
                <InputGroup>
                    <form onSubmit={handleSubmit}>
                        <VStack 
                            spacing='1em'>
                            <Select name="project" id="project" onChange={handleChange} placeholder='Select Project'>
                                {projs && projs.map && projs.map(proj => (
                                    <option key={proj.id} value={proj.id}>{proj.title}</option>
                                ))}
                            </Select>
                            <Button type='submit' colorScheme='blue'>Remove Project</Button>
                        </VStack>
                    </form>
                </InputGroup>
            </CardBody>
        </Card>
    )
}