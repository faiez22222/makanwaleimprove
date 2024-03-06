import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text , Flex, Container , SimpleGrid , Image, HStack , VStack ,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  useMediaQuery ,

} from '@chakra-ui/react';
import diamond from './Images/diamond.jpg'
import gold  from './Images/platinum.jpeg'
import silver from './Images/silver.jpeg'
import platinum from './Images/platinum.jpeg'
import '@fortawesome/fontawesome-free/css/all.css';

const Construction = () => {
  // State to track active tabs

  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
  const gridProps = isBelow720px
  ? {  spacingY : '50px'  , rows: 4 }
  : {  spacingX : ['10px'] , columns: 4 };


  return (
 
              <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              bgColor='#F0F0F0'
              mb='60px'
              >
              <Text textAlign='center'  mt='40px'   fontSize='35px' fontWeight='500'  fontFamily='sans-serif'  >Home Construction Packages</Text>

           <SimpleGrid  {...gridProps}    
             mt='40px'    width={["90%" , "80%" , "75%" , "" , "90%" ,"90%" ,"75%"]}       alignItems="center" justifyContent="center"   >
                <VStack   spacing={0}     width={["100%" , "100%" , "100%" , "" , "100%" , "90%" , "80%" ]}   >
                <Box bgColor='orangered'   height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                   width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]} 
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Silver</Text> 
                </Box>
                <Box   bgColor='black'  width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]} >
                <Image 
                  // width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]}
                  src={silver} alt='Dan Abramov'
                  width='100%'
                   />
                </Box>
                <Box   borderWidth='1px' borderColor='f9f9f9'  height='380px'  width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]}  >
                  <Box height='300px'   >   
                <Table variant='simple'  >
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Standard Elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Vitrified Tiles Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Modern Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Main door</span>
                              </ListItem>
                          </List>
                           
                          </Td>
                          
                        </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'  onClick={() => window.location.href = '/construction-packages'}  ><Text>View More</Text></Button>
                    </Box>
                </Box>
                </VStack>    
                <VStack   spacing={0}    width={["100%" , "100%" , "100%" , "" , "100%" , "90%" , "80%" ]} >
                <Box bgColor='orangered' w='270px'  height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                   width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]} 
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Gold</Text> 
                </Box>
                <Box width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]} > 
                <Image 
                src={gold} alt='Dan Abramov'
                width='100%'
                 />
                </Box>
                <Box width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]}   borderWidth='1px' borderColor='f9f9f9'  height='380px'  >
                  <Box height='300px'>
                <Table variant='simple'  >
                      <Thead>
                        <Tr>
                          <Th>
                              Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td height='40px' >
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Classic Elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Vitrified Tiles Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Modern Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Teak main door</span>
                              </ListItem>
                          </List>
                            </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'   onClick={() => window.location.href = '/construction-packages'}   ><Text>View More</Text></Button>
                    </Box>
                </Box>
                </VStack>    
                <VStack   spacing={0}  width={["100%" , "100%" , "100%" , "" , "100%" , "90%" , "80%" ]} >
                <Box bgColor='orangered'width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]}  height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Diamond</Text> 
                </Box>
                <Box  width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]}  >
                <Image
                 src={diamond} alt='Dan Abramov'
                 width='100%'
                  />
                </Box>
                <Box width={["100%" , "100%" , "90%" , "" , "100%" , "100%" , "100%" ]}   borderWidth='1px' borderColor='f9f9f9' height='380px'  >
                  <Box height='300px'>
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Floor plans + Structural</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Elegant elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Granite Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Teak</span>
                              </ListItem>
                          </List>
                            </Td>
                          
                        </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'  onClick={() => window.location.href = '/construction-packages'}    ><Text>View More</Text></Button>
                    </Box>
                </Box>
                </VStack>      
                <VStack   spacing={0}  width={["100%" , "90%" , "100%" , "" , "100%" , "90%" , "80%" ]}  >
                <Box bgColor='orangered'width={["100%" , "90%" , "90%" , "" , "100%" , "100%" , "100%" ]}   height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
            
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Platinum</Text> 
                </Box>
                <Box  width={["100%" , "90%" , "90%" , "" , "100%" , "100%" , "100%" ]}  >
                <Image 
                src={platinum} alt='Dan Abramov' 
                width='100%'
                />
                </Box>
                <Box width={["100%" , "90%" , "90%" , "" , "100%" , "100%" , "100%" ]}  borderWidth='1px' borderColor='f9f9f9'height='380px'  >
                  <Box height='300px' >
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural, Electrical and Plumbing</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Contemporary Elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Granite Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Burma Teak</span>
                              </ListItem>
                          </List>
                            </Td>
                          
                       </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'  onClick={() => window.location.href = '/construction-packages'}   ><Text>View More</Text></Button>
                    </Box>
                </Box>
                </VStack>    
               
           </SimpleGrid>
          
    </Flex>    
           

  );
};

export default Construction;
