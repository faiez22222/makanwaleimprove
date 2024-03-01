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
  useMediaQuery, 
  Spacer,
  TabIndicator

} from '@chakra-ui/react';
import diamond from './Images/diamond.jpg'
import gold  from './Images/platinum.jpeg'
import silver from './Images/silver.jpeg'
import platinum from './Images/platinum.jpeg'
import '@fortawesome/fontawesome-free/css/all.css';
import firstprojectdetail from './Images/1projectdetail.jpg'
import secondprojectdetail from './Images/2ndprojectdetail.jpg'
import thirdprojectdetail from './Images/3projectdetail.jpg'
import fourthprojectdetail from './Images/4projectdetail.jpg'
import fifthprojectdetail from './Images/5projectdetail.jpg'
import sixthprojectdetail from './Images/6projectdetail.jpeg'

const ArchitectureDesign = () => {
  // State to track active tabs

  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
   const projectdetail = [firstprojectdetail , secondprojectdetail , thirdprojectdetail , fourthprojectdetail , fifthprojectdetail , sixthprojectdetail ]
  const gridProps = isBelow720px
  ?{  spacingY : '30px'  }
  :  {   spacingY : '15px' , spacingX : '15px'  , columns : '3' }

  return (
 
            <Flex    width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1440px' , '2560px']}  align='center' justify='center'  minH='100vh'   >
                   <Box  mt='100px'  flexDirection='column'  width={['90%' , '90%' , '80%' , '50%' , '75%' , '75%']}  align='center' justify='center'   >
                          <Box align='center' justify='center' >
                          <Text mt='10px'    fontSize='45px' fontWeight='400' fontFamily='Georgia, serif'    >Architecture Portfolio</Text>
                          </Box>
                          <Box   align ='center' justify='center'  w='100%'  mt='100px'  >
                           
                             <Tabs     width= {['100%' ,'100%' , '100%' , '55%' , '85%' , '75%' ]}   isLazy orientation={isBelow720px ? 'vertical' : 'horizontal'}  variant='unstyled' 
                               overflowY= {isBelow720px ? 'auto' : 'hidden'}
                               minH='100vh'
                               >
                                <TabList    >
                                    <Tab 
                                        _selected={{ color:'white', backgroundColor : 'orange' }}  
                                        bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                        width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}  
                                     >
                                        ALL
                                    </Tab>
                                    <Tab
                                       _selected={{ color:'white', backgroundColor : 'orange' }}  
                                       bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                       width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}    
                                    >
                                        RESIDENTIAL
                                    </Tab>
                                    <Tab
                                       _selected={{ color:'white', backgroundColor : 'orange' }}  
                                       bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                       width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}  
                                    >
                                        VILLAS
                                    </Tab>
                                    <Tab
                                       _selected={{ color:'white', backgroundColor : 'orange' }}  
                                       bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                       width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}  
                                    >
                                        APARTMENTS
                                    </Tab>
                                    <Tab
                                      _selected={{ color:'white', backgroundColor : 'orange' }}  
                                      bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                      width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}  
                                    >
                                        FARMHOUSES
                                    </Tab>
                                    <Tab
                                       _selected={{ color:'white', backgroundColor : 'orange' }}  
                                       bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                       width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}  
                                    >
                                        INTERIOR
                                    </Tab>
                                </TabList   >
                                 <TabPanels>
                                    <TabPanel
                                     position= {isBelow720px ? 'absolute' : 'static'}
                                     width='100%'       
                                     mt='10px'                                               
                                     top = {['240px' ,'240px' , '240px' , '95px' , 'null' ,'null' ,]}
                                     left={['0px' ,'0px' ,'0px' ,'0px' ,'null' ,'null'  ]} 
                                   
                                    >
                                    <Box    align = 'center' justify = 'center'   marginTop='50px'  >
                                            <SimpleGrid  {...gridProps}  >
                                           {
                                                projectdetail.map((item , index) =>(
                                                   <Box>
                                                       <Image
                                                           boxSize= '100%'
                                                           objectFit='cover'
                                                           src= {item}
                                                           alt='Dan Abramov'
                                                           borderRadius='2%'
                                                         />
                                                   </Box>
                                   ))
                               }
                         </SimpleGrid>
                      </Box>
                                    </TabPanel>
                                 </TabPanels>
                             </Tabs>
                          </Box>
                   </Box>
            </Flex>
           

  );
};

export default ArchitectureDesign;
