// React components
import * as React from 'react'
import { Route, Routes } from 'react-router-dom';

//Components
import SideHome from './SideHome';
import SideCertifications from './SideCertifications';
import SideProjects from './SideProjects';
import SideAbout from './SideAbout';

// Chakra-UI components 
import {
    Box
  } from '@chakra-ui/react';

function Sidebar() {

  return (
      <Box marginLeft={'1em'} marginRight={'1em'}>
        <Routes>
          <Route 
            path="/" 
            element={<SideHome />} />

          <Route 
            path="Certifications" 
            element={<SideCertifications />}/>

          <Route 
            path="Projects" 
            element={<SideProjects />}/>

          <Route 
            path="about" 
            element={<SideAbout />}/>
        </Routes>
        </Box>

  )
}

export default Sidebar;