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
  Link

} from '@chakra-ui/react';
import {
  useNavigate,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
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
import makanwale from './Images/MakanWale.png'


const ProjectsDetail = () => {
  // State to track active tabs
  const navigate = useNavigate();
  const location = useLocation();
  const variable = location.state;
  console.log("svs ", variable.data.area);

  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
   const projectdetail = [firstconstructionimage , secondconstructionimage , thirdconstructionimage , fourthconstructionimage , fifthconstructionimage , sixthconstructionimage, sevenconstructionimage , eightconstructionimage , ninthconstructionimage ,firstconstructionimage , secondconstructionimage , thirdconstructionimage , fourthconstructionimage , fifthconstructionimage , sixthconstructionimage, sevenconstructionimage , eightconstructionimage , ninthconstructionimage  ]
  const gridProps = isBelow720px
  ?{  spacingY : '30px'  }
  :  {   spacingY : '15px' , spacingX : '15px'  , columns : '3' }


  const getFileNameFromPath = (imagePaths) => {
    return imagePaths.map((imagePath) => {
      // Replace backslashes with forward slashes
      const normalizedPath = imagePath.replace(/\\/g, '/');
  
      // Create an absolute path and extract the filename
      const absolutePath = new URL(normalizedPath, window.location.origin);
      return absolutePath.pathname.split('/').pop();
    });
  };


  const constructionImage  =  getFileNameFromPath(variable.data.imagePath1)
  const designImage  =  getFileNameFromPath(variable.data.imagePath2)

  return (
 
            <Flex
                width={['100%' , '100%' , '100%' , '100%' , '100%' , '100%' , '100%']} 
                align='center' justify='center'    minH='100vh' 
                flexDirection='column'
                 >
                  <Box justify = 'center' align = 'center'  flexDirection='column' marginTop='180px'   >
                        <Box>
                           <Text mt='10px'    fontSize='45px' fontWeight='400' fontFamily='Georgia, serif'    >Home Construction Project</Text>
                       </Box>
                   <Box width={['90%' , '90%' , '80%' , '75%' , '75%' , '75%']} 
                     display= {isBelow720px ? 'block' : 'flex'}
                     mt='100px'
                     >
                       <Box width={['100%' , '100%' , '100%' , '33%' , '30%' , '30%']}    >
                       <Container  display='block'textAlign='left'  bgColor='orangered'   width={['100%' , '100%' , '100%' , '100%' , '100%' , '100%']}  >
                              <Text  color= 'white'  fontSize='25px' fontWeight='400' fontFamily='Georgia, serif'     >Project details</Text>
                                <Box   mt='10px' display='flex'       >
                                <i className="fas fa-user" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text fontFamily='sans-serif' fontSize='18px' fontStyle='normal'  color= 'white'  >&nbsp;Client: {variable.data.client}</Text>
            
                              </Box>
                                <Box  mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box   display='flex' >
                                <i className="fas fa-map-marker" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >&nbsp;Location: {variable.data.location}</Text>
                  
                                {/* Your other components or content */}
                               </Box>
                               <Box  mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box display='flex'   >
                                <i className="fas  fa-square" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >&nbsp;Area: {variable.data.area}</Text>

                                {/* Your other components or content */}
                               </Box>
                               <Box  mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box display='flex'   >
                                <i class="fas fa-building" aria-hidden="true" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >&nbsp;Floor: {variable.data.floors}</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box  mt='15px' mb='15px'  borderWidth='1px' ></Box>
                                <Box   display='flex'  >
                                <i class="fas fa-tags" aria-hidden="true" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >&nbsp;Package: Silver</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box mt='15px' mb='15px' borderWidth='1px' ></Box>
                                <Box  display='flex'  >
                                <i class="fas fa-check-square" aria-hidden="true" style={{ fontSize: "25px", color: 'white' }}></i>
                                <Text  fontFamily='sans-serif' fontSize='18px' fontStyle='normal' color= 'white'  >&nbsp;Status: {variable.data.status}</Text>
                                {/* Your other components or content */}
                               </Box>
                               <Box mt='15px' mb='15px' borderWidth='1px' ></Box>
                               

                        </Container>
                       </Box>
                       <Spacer/>
                       <Box w= {['100%' , '100%' , '100%' , '70%' , '75%' , '65%']}    >
                       <Tabs  isLazy 
                         
                         orientation={isBelow720px ? 'vertical' : 'horizontal'  }  
                          variant='unstyled'  
                          width={['100%' , '100%'  , '100%' ,'100%'  ,'100%' , '100%' ]}  
                          overflowY= {isBelow720px ? 'auto' : 'hidden'}
                          minH='100vh'
                     
                         //  ml={['0px' , '0px' , '0px' , '0px' , '30px' , '180px']}
                            > 
                                 <TabList   position='sticky' top='0' zIndex='1'   >
                                 <Tab  
                                  _selected={{ color:'white', backgroundColor : 'orange' }}  
                                  bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                  width={['90vw' , '90vw'  , '80vw' ,'250px'  ,'340px' , '100%' ]}  
                                 //  ml={['35px' , '47px' , '48px' , '0px' , '10px' , '10px']}  
                                  >
                                   Silver
                                   </Tab>
                                   <Tab  
                                  _selected={{ color:'white', backgroundColor : 'orange' }}  
                                  bgColor='#DCDCDC'   style={{  height : '50px'}} 
                                  width={['90vw' , '90vw'  , '80vw' ,'250px'  ,'350px' ,'100%'  ]}  
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
                                                constructionImage.map((item , index) =>(
                                                   <Box>
                                                       <Image
                                                           boxSize='100%'
                                                           objectFit='cover'
                                                           src= {`http://localhost:3001/${item}`} 
                                                           alt='Dan Abramov'
                                                           borderRadius='2%'
                                                         />
                                                   </Box>
                                   ))
                               }
                         </SimpleGrid>
                      </Box>
                                       </TabPanel>
                                       <TabPanel
                                         position= {isBelow720px ? 'absolute' : 'static'}
                                         width='100%'                                                      
                                         top = {['95px' ,'95px' , '95px' , '95px' , 'null' ,'null' ,]}
                                         left={['0px' ,'0px' ,'0px' ,'0px' ,'null' ,'null'  ]} 
                                      >
                                           <Box    align = 'center' justify = 'center'   marginTop='50px'  >
                                            <SimpleGrid  {...gridProps}  >
                                           {
                                                designImage.map((item , index) =>(
                                                   <Box>
                                                       <Image
                                                           boxSize='100%'
                                                           objectFit='cover'
                                                           src= {`http://localhost:3001/${item}`} 
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
                   <Flex
     alignItems="center"
     justifyContent="center"
     bgColor='#262626' 
     flexDirection="column"
     width='100%'
   >   

      <Box 
        width= {['100%' , '100%' , '100%' , '75%' , '75%' , '75%' , '75%']}  
        flexDirection={isBelow720px ? 'column' : 'row' } 
        display='flex'    
        justifyContent='space-between'

         >
             <Box display='block'   width=  {['80%' , '80%' , '89%' , '75%' , '30%' , '30%' , '30%']}  marginTop={isBelow720px ? '100px' : '0px' }  marginLeft='25px'    >
                <Box  width='90%'  >  
                  <Image
                     src = {makanwale} 
                     width='100%'
                     height='150px'
                  />
                </Box>
                <Box  marginTop='3px' >
                <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  marginTop='20px' marginBottom={isBelow720px ? '0px' : '10px' }   >Copyright - 2021 Buildhood All rights Reserved. </Text>
                </Box>
                <Box    >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' >Powered by Buildhood Infratech Pvt Ltd.</Text>
                </Box>
             </Box>
             <Box display='block' marginBottom={isBelow720px ? '100px' : '0px'}   marginTop={isBelow720px ? '100px' : '0px'}  marginLeft='25px' >
                     <Box   w={isBelow720px && "30%"}   marginBottom={isBelow720px ? '10px' : '0px'}  >
                     <Text  color='white'  fontSize={["20px" , "20px" , "20px" , '25px', '25px', '25px', '25px' ]}  fontWeight='700' fontFamily='serif' marginTop={isBelow720px ? '0px' : '50px' }    >Quick Links</Text>
                     <Box display='flex'  width='40%'  justifyContent='space-between'   >
                      <Box borderWidth={["2px" , "2px" , "2px" , "1px" , "1px" , "1px" ,"1px" ]}  borderColor='orangered' width='65%'  >
                          
                      </Box>
                      <Box borderWidth={["2px" , "2px" , "2px" , "1px" , "1px" , "1px" ,"1px" ]}  borderColor= 'whitesmoke' width='25%'  >
                          
                          </Box>
                     </Box>
                     </Box>
                     <Box>
                      <Link href = '/' >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]}  color='white'  fontWeight='500'  fontFamily='sans-serif'  marginTop={isBelow720px ? '0px' : '20px' }  marginBottom={isBelow720px ? '0px' : '10px' }      >Home</Text>
                     </Link>
                     </Box>
                     <Box>
                      <Link href = '/about-us' >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }   >About Us</Text>
                     </Link>
                     </Box>
                     <Box>
                      <Link href = '/cost-plus-contract-house-construction' >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }  >Cost-Plus Model</Text>
                     </Link>
                     </Box>
                     <Box>
                      <Link  href = '/construction-packages' >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]}  color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }   >Packages</Text>
                     </Link>
                     </Box>
                     <Box>
                      <Link href = '/projects' >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }   > Projects</Text>
                     </Link>
                     </Box>
                     <Box>
                      <Link href = "/" >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }   >Career</Text>
                     </Link>
                     </Box>
                     <Box>
                      <Link href = "/contact-us" >
                     <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '50px' }   >Contact Us</Text>
                     </Link>
                     </Box>
                </Box>
                <Box marginBottom={isBelow720px ? '100px' : '0px'}  marginLeft='25px' >
                    <Box  w={isBelow720px && "50%"}   marginBottom={isBelow720px ? '10px' : '0px'} >
                         <Text  color='white' fontSize={["25px" , "30px" , "30px" , '25px', '25px', '25px', '25px' ]} fontWeight='700' fontFamily='serif'   marginTop='50px'   >Contact Us</Text>
                         <Box display='flex'  width='40%'  justifyContent='space-between'  >
                      <Box borderWidth= {["2px" , "2px" , "2px" , "1px" , "1px" , "1px" ,"1px" ]}  borderColor='orangered' width='65%'  >
                          
                      </Box>
                      <Box borderWidth={["2px" , "2px" , "2px" , "1px" , "1px" , "1px" ,"1px" ]}  bgColor='orangered' width='25%'  >
                          
                          </Box>
                     </Box>
                         
                    </Box>
                    <Box>
                         <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }    >+91 7802-80-80-80</Text>
                    </Box>
                    <Box>
                        <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }    >enquiry@buildhood.com</Text>
                    </Box>
                    <Box>
                        <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }    >sales@buildhood.com</Text>
                    </Box>
                    <Box>
                        <Text fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }    >careers@buildhood.com</Text>
                    </Box>

                </Box>
                <Box marginBottom='40px'  marginLeft='25px' >
                    <Box   w={isBelow720px && "50%"}   marginBottom={isBelow720px ? '10px' : '0px'} >
                       <Text color='white'  fontSize={["20px" , "25px" , "25px" , '20px', '20px', '20px', '20px' ]}  fontWeight='700' fontFamily='serif'   marginTop='50px'  >Important Links</Text>
                       <Box display='flex'  width='40%'  justifyContent='space-between'  >
                      <Box borderWidth={["2px" , "2px" , "2px" , "1px" , "1px" , "1px" ,"1px" ]}  borderColor='orangered' width='65%'  >
                          
                      </Box>
                      <Box borderWidth={["2px" , "2px" , "2px" , "1px" , "1px" , "1px" ,"1px" ]}  bgColor='orangered' width='25%'  >
                          
                          </Box>
                     </Box>
                    </Box>
                    <Box>
                        <Link href = "/" >
                        <Text  fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif' marginTop={isBelow720px ? '0px' : '10px' }  marginBottom={isBelow720px ? '0px' : '10px' }    >Architecture</Text> 
                        </Link>
                    </Box>
                    <Box>
                         <Text  fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif'  marginTop='10px' marginBottom={isBelow720px ? '0px' : '10px' }    >Sitemap</Text>
                    </Box>
                    <Box>
                         <Text  fontSize={["20px" , "20px" , "20px" , "20px" , "20px" , "20px" ,"20px" ]} color='white'  fontWeight='500'  fontFamily='sans-serif'  marginTop='10px' marginBottom={isBelow720px ? '0px' : '10px' }    >Terms and Condition</Text>
                    </Box>
                </Box>
      </Box>
   
   </Flex>
                

            </Flex>
           

  );
};

export default ProjectsDetail;
