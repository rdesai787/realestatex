// src/App.js  
import React from 'react';  
import { ChakraProvider } from '@chakra-ui/react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Home from './pages/Home';  
import About from './pages/About';  
import customTheme from './Theme';

const App = () => {  
    return (  
        <ChakraProvider theme={customTheme}>  
            <Router>  
                <Navbar />  
                <Routes>  
                    <Route path="/" element={<Home />} />  
                    <Route path="/about" element={<About />} />  
                </Routes>  
            </Router>  
        </ChakraProvider>  
    );  
};  

export default App;