// React components
import * as React from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
  } from "react-router-dom";

// ChakraProvider component
import { ChakraProvider } from '@chakra-ui/react'

// Routes and Layouts
import Home, { homeLoader } from './routes/Home';
import Certifications, { certsLoader } from './routes/Certifications';
import Projects, { projectsLoader } from './routes/Projects';
import About from './routes/About';
import ErrorBoundary from './routes/ErrorBoundary';
import Login from './routes/Login';
import ItemsInput, {AllLoader} from './routes/ItemsInput';

import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='*' element={<RootLayout/>} errorElement={<ErrorBoundary />}>
        <Route index element={<Home/>} loader={homeLoader} errorElement={<ErrorBoundary />} /> 
        <Route path='Certifications' element={<Certifications/>} loader={certsLoader} errorElement={<ErrorBoundary />} />
        <Route path='Projects' element={<Projects/>} loader={projectsLoader} errorElement={<ErrorBoundary />} />
        <Route path='About' element={<About/>} errorElement={<ErrorBoundary />} />

        <Route path='Login' element={<Login/>} errorElement={<ErrorBoundary />} />
        <Route path='ItemsInput' element={<ItemsInput/>} loader={AllLoader} errorElement={<ErrorBoundary />} />
    </Route>
  )
)

function App() {

  // Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}

export default App;