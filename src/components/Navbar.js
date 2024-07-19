// src/components/Navbar.js  
import React from 'react';  
import { Box, Flex, Link, Button } from '@chakra-ui/react';  
import { Link as RouterLink } from 'react-router-dom';  

const Navbar = () => {  
    return (  
        <Box bg="teal.500" p={4}>  
            <Flex maxW="1200px" mx="auto" align="center" justify="space-between">  
                <Flex>  
                    <Link as={RouterLink} to="/" px={2} color="white" fontWeight="bold">  
                        Home  
                    </Link>  
                    <Link as={RouterLink} to="/about" px={2} color="white" fontWeight="bold">  
                        About  
                    </Link>  
                </Flex>  
                <Button colorScheme="teal" bg="white" color="teal.500">  
                    Login  
                </Button>  
            </Flex>  
        </Box>  
    );  
};  

export default Navbar;