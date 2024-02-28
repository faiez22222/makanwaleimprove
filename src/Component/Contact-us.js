import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button  ,  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Input , 
  Select , 
  Checkbox, 
  Stack, 
  useMediaQuery ,
} from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';


const Contact_us = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)"); 
 
  return (
     <Flex
     align="center"
     justify="center"
     minheight="100vh"
     flexDirection="column"
   >
       <Text fontSize={['70px' ,'100%' ,'100%' ,'75%' ,'75%' ,'1200px' ]} >Contact Form</Text>
       <Box  borderRadius='42px'    bgColor =  '#fff1eb91'     width =  {['80%' ,'100%' ,'100%' ,'75%' ,'75%' ,'1200px' ]}    marginTop='80px'    >
       <FormControl >
        <VStack spacing='100px' marginTop='80px'  marginBottom='50px'  >
        <Stack    direction= {isBelow720px ? 'column' : 'row'}   spacing='100px'    width= {['80%' ,'100%' ,'100%' ,'75%' , '850px' ,'850px' ]}  >
        <Input    height='170px'      bgColor='white'      isRequired='true' placeholder='Name *'  />
        <Input    height='170px'  bgColor='white'    isRequired='true' placeholder='Mobile *' />
        </Stack  >
        <Stack   direction= {isBelow720px ? 'column' : 'row'}   spacing='100px'    width= {['80%' ,'100%' ,'100%' ,'75%' , '850px' ,'850px' ]}   >
        <Input   height='170px'  bgColor='white'    isRequired='true' placeholder='Email *' />
        <Input    height='170px' bgColor='white'    isRequired='true' placeholder='Location *' />
        </Stack>
        <Stack  direction= {isBelow720px ? 'column' : 'row'}   spacing='100px'    width= {['80%' ,'100%' ,'100%' ,'75%' , '850px' ,'850px' ]}    >
        <Input  height='170px'   bgColor='white'    isRequired='true' placeholder='City *' />
        <Input   height='170px'  bgColor='white'    isRequired='true' placeholder='State *' />
        </Stack>
        <Select  height='170px'   bgColor='white' placeholder='Services'  width= {['80%' ,'100%' ,'100%' ,'75%' , '850px' ,'850px' ]}>
        <option>Construction</option>
        <option>Interior Design</option>
        <option>Renovation</option>
        <option>Architecture</option>
        </Select>
        <Input    width= {['80%' ,'100%' ,'100%' ,'75%' , '850px' ,'850px' ]}  bgColor='white'   height={['500px' ,'100%' ,'100%' ,'75%' , '850px' ,'150px' ]}  borderRadius='30px'   isRequired='true' placeholder='Enter message' />
        <HStack     spacing='100px'   width='850px'  mt='10px'  >
        <Checkbox size='100px'  defaultChecked></Checkbox>
        <Box  >
        <Text  fontSize='60px' >
              I accept the T&C of Buildhood. I am aware and understand that I will be contacted by representative of Buildhood company listed on the website via Calls, SMS OR Email with respected to marketing of its products & Services.
        </Text>
        </Box>
        </HStack>
        <Button type="submit" bgColor="orange" color="white">Submit</Button>
        </VStack>
      </FormControl>
       </Box>

       <Box mt='100px'  mb='100px'    w='1200px'  >  
          <Heading  as= 'h1' fontSize = 'x-large'   >Hire Our Trusted Service</Heading>
          <HStack mt='20px'   height='130px'  >
               <div style={{ display: 'block', alignItems: 'center'   , height:'115px'  }}>
                    <i className="fas fa-phone" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <span style={{ marginLeft: '35px', fontWeight: 'Italic' , fontSize : '25px',  marginBottom :'10px' }}>Call Us</span>
                    <Text  ml='55px'  >45789754433</Text>
                          
               </div>
               <div style={{ display: 'block', alignItems: 'center' ,  marginLeft : '180px'  , height:'115px'  }}>
                    <i className="fas fa-envelope" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <span style={{marginLeft: '35px'   ,  marginBottom :'10px' ,fontWeight: 'Italic' , fontSize:'25px'   }}>Email</span>
                    
                  
                    <Text ml='55px' >enquiry@buildhood.com</Text>
                    <Text ml='55px' >sales@buildhood.com</Text>
                    <Text ml='55px' >careers@buildhood.com</Text>
                      
                    
                    {/* Your other components or content */}
               </div>
               <div style={{ display: 'block', alignItems: 'center'  , height:'115px' , marginLeft : '120px'  }}>
                    <i className="fas fa-map-marker" style={{ fontSize: "25px", color: 'orange' , marginLeft : '80px'  }}></i>
                    <span style={{ marginLeft: '35px'   ,  marginBottom :'10px'  ,fontWeight: 'Italic' , fontSize : '25px' }}>Location</span>
                    <Text  ml='130px' >#107, First Floor, Brigade Arcade</Text>
                    <Text  ml='130px' >building, Brigade Metropolis,</Text>
                    <Text  ml='130px'>Garudacharpalya, Whitefield Road,</Text>
                    <Text  ml='130px' >Bengaluru, Pincode- 560048</Text>
                    {/* Your other components or content */}
               </div>
          </HStack>     
          <Button color='orange'>Build</Button>
     </Box>


   </Flex>
  );
};

export default Contact_us;
