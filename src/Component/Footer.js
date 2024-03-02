import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button , useMediaQuery , SimpleGrid , Stack ,StackDirection , } from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import aboutvilla from './Images/about-villa.png';


const Footer = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)"); 
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
  const gridProps = isBelow720px ?{flexDirection: 'column' } : {flexDirection : 'row'}
 
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     bgColor='#262626' 
     flexDirection="column"
    // width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1440px' , '2560px']}
   >
      <Box 
        width= {['100%' , '100%' , '100%' , '75%' , '75%' , '75%' , '75%']}  
        flexDirection={isBelow720px ? 'column' : 'row' } 
        display='flex'    
        justifyContent='space-between'
         >
             <Box display='block'   width=  {['100%' , '100%' , '100%' , '75%' , '30%' , '30%' , '30%']}  marginTop={isBelow720px ? '100px' : '0px' }  marginLeft='25px'    >
                <Box>
                    <Text  color='white'  fontSize={['125px', '105px', '105px', '105px', '105px', '45px', '105px' ]}  fontWeight='700' fontFamily='serif'  >Buildhood</Text>
                </Box>
                <Box  marginTop='3px' >
                <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' >Copyright - 2021 Buildhood All rights Reserved. </Text>
                </Box>
                <Box    >
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]} color='white'  fontWeight='500'  fontFamily='sans-serif' >Powered by Buildhood Infratech Pvt Ltd.</Text>
                </Box>
             </Box>
             <Box display='block' marginBottom={isBelow720px ? '100px' : '0px'}   marginTop={isBelow720px ? '100px' : '0px'}  marginLeft='25px' >
                     <Box>
                     <Text  color='white'  fontSize={['75px', '105px', '105px', '105px', '105px', '25px', '105px' ]}  fontWeight='700' fontFamily='serif'  >Quick Links</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' >Home</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' >About Us</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'>Cost-Plus Model</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' >Packages</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' > Projects</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' >Career</Text>
                     </Box>
                     <Box>
                     <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' >Contact Us</Text>
                     </Box>
                </Box>
                <Box marginBottom={isBelow720px ? '100px' : '0px'}  marginLeft='25px' >
                    <Box>
                         <Text  color='white'  fontSize={['75px', '105px', '105px', '105px', '105px', '25px', '105px' ]}  fontWeight='700' fontFamily='serif'  >Contact Us</Text>
                    </Box>
                    <Box>
                         <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >+91 7802-80-80-80</Text>
                    </Box>
                    <Box>
                        <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >enquiry@buildhood.com</Text>
                    </Box>
                    <Box>
                        <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >sales@buildhood.com</Text>
                    </Box>
                    <Box>
                        <Text fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >careers@buildhood.com</Text>
                    </Box>

                </Box>
                <Box marginBottom='40px'  marginLeft='25px' >
                    <Box>
                       <Text color='white'  fontSize={['75px', '105px', '105px', '105px', '105px', '25px', '105px' ]}  fontWeight='700' fontFamily='serif' >Important Links</Text>
                    </Box>
                    <Box>
                        <Text  fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >Architecture</Text> 
                    </Box>
                    <Box>
                         <Text  fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >Sitemap</Text>
                    </Box>
                    <Box>
                         <Text  fontSize={['50px', '105px', '105px', '105px', '105px', '16px', '105px' ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  >Terms and Condition</Text>
                    </Box>
                </Box>
      </Box>
   
   </Flex>
  );
};

export default Footer;
