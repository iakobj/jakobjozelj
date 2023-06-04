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

export default function NewCertificate() {
    const [formData, setFormData] = useState({
        title: '',
        vendor: '',
        date: '',
        year: '',
        homepage: '',
        certCode: '',
        image: '',
        certDescription: '',
    });
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to the backend
        alert(`
            title: ${formData.title}, 
            vendor: ${formData.vendor}, 
            date: ${formData.date}, 
            year: ${formData.year},
            homepage: ${formData.homepage},
            certCode: ${formData.certCode},
            image: ${formData.image},
            certDescription: ${formData.certDescription}`
        )
            
        console.log("Send form data to the backend");
        const form = event.target;
        
        const formsData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formsData));

        // You can pass formData as a fetch body directly:
        fetch(`${API_ENDPOINT}/ItemsInput/NewCertificate`, {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            credentials: 'include',  
            body: jsonData 
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
            console.log("Posted newCertificate");
        }
        });
    
    };

    return (
        <Card
            boxShadow='md'
            overflow='hidden'>

            <CardHeader>
                <Heading size='md'>New Certificate</Heading>
            </CardHeader>

            <CardBody>
                <InputGroup>
                    <form onSubmit={handleSubmit}>
                        <VStack 
                            spacing='1em'>
                
                            <Input name="title" id="title" value={formData.title} onChange={handleChange} placeholder='Title' size='md' />

                            <Select name="vendor" id="vendor" value={formData.vendor} onChange={handleChange} placeholder='Select vendor'>
                              <option value='Cisco'>Cisco</option>
                              <option value='Dell'>Dell</option>
                              <option value='VMware'>VMware</option>
                              <option value='Pure Storage'>Pure Storage</option>
                            </Select>

                            <Input name="date" id="date" value={formData.date} onChange={handleChange}
                                placeholder="Select Date and Time"
                                size="md"
                                type='date'
                            />

                            <Input name="year" id="year" value={formData.year} onChange={handleChange} placeholder='Year' />

                            <Select name="homepage" id="homepage" value={formData.homepage} onChange={handleChange} placeholder='Select vendor homepage'>
                              <option value='https://www.cisco.com/'>Cisco</option>
                              <option value='https://www.dell.com/'>Dell</option>
                              <option value='https://www.vmware.com/'>VMware</option>
                              <option value='https://www.purestorage.com/'>Pure Storage</option>
                            </Select>

                            <Input name="certCode" id="certCode" value={formData.certCode}  onChange={handleChange}  placeholder='Certification code' size='md' />

                            <Select name="image" id="image" value={formData.image} onChange={handleChange} placeholder='Select vendor image'>
                              <option value='../img/cisco.png'>Cisco</option>
                              <option value='../img/dell.png'>Dell</option>
                              <option value='../img/vmware.png'>VMware</option>
                              <option value='../img/purestorage.png'>Pure Storage</option>
                            </Select>

                            <Textarea name="certDescription" id="certDescription" value={formData.certDescription} onChange={handleChange} placeholder='Copy certification description here' />

                            <Button type='submit' colorScheme='blue'>Add Certificate</Button>
                       
                        </VStack>
                    </form>
                </InputGroup>        
            </CardBody>
        </Card>
    )
}
