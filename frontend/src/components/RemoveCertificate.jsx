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

export default function RemoveCertificate() {
    const data = useLoaderData();
    const certs = data.certi;

    const [formData, setFormData] = useState({
        certification: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to the backend
        alert(`
            certification: ${formData.certification}`

        )
            
        console.log("Send form data to the backend");
        const form = event.target;
        
        const formsData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formsData));

        // You can pass formData as a fetch body directly:
        fetch(`${API_ENDPOINT}/ItemsInput/RemoveCertificate`, {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            credentials: 'include',  
            body: jsonData 
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
            console.log("Removed Certificate");
        }
        });
    };

    return (
        <Card
            boxShadow='md'
            overflow='hidden'
        >
            <CardHeader>
                <Heading size='md'>Remove Certificate</Heading>
            </CardHeader>
            <CardBody>
                <InputGroup>
                    <form onSubmit={handleSubmit}>
                        <VStack 
                            spacing='1em'>
                            <Select name="certification" id="certification" onChange={handleChange} placeholder='Select Certificate'>
                                {certs && certs.map && certs.map(cert => (
                                    <option key={cert.id} value={cert.id}>{cert.title}</option>
                                ))}
                            </Select>
                            <Button type='submit' colorScheme='blue'>Remove Certificate</Button>
                        </VStack>
                    </form>
                </InputGroup>        
            </CardBody>
        </Card>
    )
}