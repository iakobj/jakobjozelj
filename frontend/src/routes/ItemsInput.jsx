// React components
import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

// Chakra-UI components 
import {
    SimpleGrid,
    Heading,
    Box,
    Button
  } from '@chakra-ui/react';

  // import location of the API server
import { API_ENDPOINT } from '../api/ApiEndpoint';

// import certifications and projects cards for adding and removing
import NewCertificate from '../components/NewCertificate.jsx';
import NewProject from '../components/NewProject';
import RemoveCertificate from '../components/RemoveCertificate';
import RemoveProject from '../components/RemoveProject';

function ItemsInput() {
    const navigate = useNavigate();
    const data = useLoaderData();
    const certs = data.certi;
    const projs = data.proj;
    const IsLogedin = data.IsLogedin;

    console.log(IsLogedin.status);

    useEffect(() => {
        if(IsLogedin.status == 403){
          navigate("/Login");
        }
      }, []);

    const logoutFunction = () => {
        fetch(`${API_ENDPOINT}/Logout`, { 
            method: 'POST', 
            credentials: 'include'
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
                navigate("/");
            }
           });
    };

    return (
        <Box>
            <Heading 
              as='h1'
              size='md'
              colorScheme={'blackAlpha'}
              align='center'
              paddingTop={{base: '1em', sm: '1em', md: '2em'}} 
              marginTop={{base: '1em', sm: '1em', md: '-4em'}}>
              Adding Certificates or Projects
            </Heading>

            <SimpleGrid 
              columns={{sm: 2, md: 2}} 
              spacing={'1em'} 
              marginLeft={{base:'1em', md: '0em'}} 
              marginRight={{base:'1em', md: '0em'}}>

                <Box paddingTop={'1em'}>
                    <NewCertificate />
                </Box>
                <Box paddingTop={'1em'}>
                    <NewProject />
                </Box>
            </SimpleGrid>
    
            <Heading 
              as='h1'
              size='md'
              colorScheme={'blackAlpha'}
              paddingTop={'1em'} 
              align='center'> 
              Removing Certificates or Projects
            </Heading>

            <SimpleGrid 
              columns={{sm: 2, md: 2}} 
              spacing={'1em'} 
              marginLeft={{base:'1em', md: '0em'}} 
              marginRight={{base:'1em', md: '0em'}}>

                <Box paddingTop={'1em'}>
                    <RemoveCertificate />
                </Box>
                <Box paddingTop={'1em'}>
                    <RemoveProject />
                </Box>
            </SimpleGrid>
    
            <Box paddingTop={'1em'}>
                <Button   
                    onClick={logoutFunction} 
                    colorScheme='gray'>
                        Log Out
                </Button>
            </Box>
        </Box>
    )
}

export default ItemsInput; 

export const AllLoader = async () => {
    const certi = await fetch(`${API_ENDPOINT}/Certifications`);
    const proj = await fetch(`${API_ENDPOINT}/Projects`);

    const IsLogedin = await fetch(`${API_ENDPOINT}/ItemsInput`, { method: 'GET', credentials: 'include',});
    
    return {certi: await certi.json(), proj: await proj.json(), IsLogedin: await IsLogedin};
  };