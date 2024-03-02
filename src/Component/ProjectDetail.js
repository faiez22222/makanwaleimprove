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

} from '@chakra-ui/react';
import diamond from './Images/diamond.jpg'
import gold  from './Images/platinum.jpeg'
import silver from './Images/silver.jpeg'
import platinum from './Images/platinum.jpeg'
import '@fortawesome/fontawesome-free/css/all.css';
import firstconstructionimage from './Images/1stconstructionimage.jpg'
import secondconstructionimage from './Images/2ndconstructionimage.jpg'
import thirdconstructionimage from './Images/3rdconstructionimage.jpg'
import fourthconstructionimage from './Images/4constructionimage.jpg'
import fifthconstructionimage from './Images/5constructionimage.jpg'
import sixthconstructionimage from './Images/6constructionimage.jpg'
import sevenconstructionimage from './Images/7constructionimage.jpg'
import eightconstructionimage from './Images/8constructionimage.jpg'
import ninthconstructionimage from  './Images/9constructionimage.jpg'


const ProjectsDetail = () => {
  // State to track active tabs

  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
   const projectdetail = [firstconstructionimage , secondconstructionimage , thirdconstructionimage , fourthconstructionimage , fifthconstructionimage , sixthconstructionimage, sevenconstructionimage , eightconstructionimage , ninthconstructionimage ,firstconstructionimage , secondconstructionimage , thirdconstructionimage , fourthconstructionimage , fifthconstructionimage , sixthconstructionimage, sevenconstructionimage , eightconstructionimage , ninthconstructionimage  ]
  const gridProps = isBelow720px
  ?{  spacingY : '30px'  }
  :  {   spacingY : '15px' , spacingX : '15px'  , columns : '3' }

  return (
 
            <Flex
                width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1540px' , '2560px']} 
                align='center' justify='center'    minH='100vh' 
                 >
                  <Box justify = 'center' align = 'center'  flexDirection='column' marginTop='180px'  >
                        <Box>
                           <Text mt='10px'    fontSize='45px' fontWeight='400' fontFamily='Georgia, serif'    >Home Construction Project</Text>
                       </Box>
                   <Box width={['90%' , '90%' , '80%' , '50%' , '75%' , '75%']} 
                     display= {isBelow720px ? 'block' : 'flex'}
                     mt='100px'
                     >
                       <Box width={['100%' , '100%' , '100%' , '50%' , '30%' , '30%']} >
                       <Container  display='block'textAlign='left'  bgColor='orangered'   width={['100%' , '100%' , '100%' , '30%' , '100%' , '100%']}  >
                              <Text mt='10px'  color= 'white'  fontSize='25px' fontWeight='400' fontFamily='Georgia, serif'     >Project details</Text>
                                <Box   mt='10px' display='flex'   justifyContent='space-between'    width={['55%' ,'45% ' , '45%' ,  '63%' , '73%' , '50%']}      >
                                <i className="fas fa-user" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text fontFamily='sans-serif' fontSize='18px' fontStyle='normal'  color= 'white'  >Client :</Text>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal'  color= 'white'  >Vishal</Text>
                                {/* Your other components or content */}
                              </Box>
                                <Box  mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box   display='flex' justifyContent='space-between'    width={['75%' , '63%' , '63%' , '63%' , '95%' , '67%']}     >
                                <i className="fas fa-map-marker" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Location:</Text>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Bangalore</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box  mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box display='flex'  justifyContent='space-between'    width={['65%' , '55%' ,'55%' ,'63%' , '85%' , '55%']}    >
                                <i className="fas  fa-square" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Area:</Text>
                                <Text fontFamily='sans-serif' fontSize='18px' fontStyle='normal'  color= 'white'  >1800 sq ft.</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box  mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box display='flex'  justifyContent='space-between'    width={['45%' , '40%' , '40%' , '63%' , '63%' , '40%']}   >
                                <i class="fas fa-building" aria-hidden="true" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Floor:</Text>
                                <Text fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >G+1</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box  mt='15px' mb='15px'  borderWidth='1px' ></Box>
                                <Box   display='flex' justifyContent='space-between'    width={['65%' , '53%' , '53%' ,'63%' , '83%' , '53%']}   >
                                <i class="fas fa-tags" aria-hidden="true" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Package:</Text>
                                <Text fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Silver</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box  display='flex' justifyContent='space-between'    width={['65%' , '55%' , '55%' , '63%' , '85%' , '55%']}   >
                                <i class="fas fa-check-square" aria-hidden="true" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Status:</Text>
                                <Text fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >Progress</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box mt='15px' mb='15px' borderWidth='1px' ></Box>
                               

                        </Container>
                       </Box>
                       <Spacer/>
                       <Box w= {['100%' , '100%' , '100%' , '50%' , '75%' , '65%']}    >
                       <Tabs  isLazy 
                         
                         orientation={isBelow720px ? 'vertical' : 'horizontal'  }  
                          variant='unstyled'  
                          width={['100%' , '100%'  , '100%' ,'100%'  ,'90%' , '100%' ]}  
                          overflowY= {isBelow720px ? 'auto' : 'hidden'}
                          minH='100vh'
                         //  ml={['0px' , '0px' , '0px' , '0px' , '30px' , '180px']}
                            > 
                                 <TabList  top='0'        position='sticky' zIndex='sticky' >
                                 <Tab  
                                  _selected={{ color:'white', backgroundColor : 'orange' }}  
                                  bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                  width={['310px' , '350px'  , '350px' ,'250px'  ,'340px' , '500px' ]}  
                                 //  ml={['35px' , '47px' , '48px' , '0px' , '10px' , '10px']}  
                                  >
                                   Silver
                                   </Tab>
                                   <Tab  
                                  _selected={{ color:'white', backgroundColor : 'orange' }}  
                                  bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                  width={['310px' , '350px'  , '350px' ,'250px'  ,'350px' , '500px' ]}  
                                 //  ml={['35px' , '47px' , '48px' , '0px' , '10px' , '10px']}  
                                  >
                                   Gold
                                   </Tab>
                                 </TabList>
                                 <TabPanels>
                                      <TabPanel
                                         position= {isBelow720px ? 'absolute' : 'static'}
                                         width='100%'                                                      
                                         top = {['95px' ,'95px' , '95px' , '95px' , 'null' ,'null' ,]}
                                         left={['0px' ,'0px' ,'0px' ,'0px' ,'null' ,'null'  ]} 
                                      >
                                           <Box    align = 'center' justify = 'center'   marginTop='50px'  >
                                            <SimpleGrid  {...gridProps}  >
                                           {
                                                projectdetail.map((item , index) =>(
                                                   <Box>
                                                       <Image
                                                           boxSize='100%'
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
                   </Box>
            </Flex>
           

  );
};

export default ProjectsDetail;
