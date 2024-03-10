import React, { useState , useEffect } from 'react';
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
  TabIndicator ,
  Stack ,

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
import makanwale from './Images/MakanWale.png'
import {useNavigate , Link } from 'react-router-dom';
import team from './Images/—Pngtree—flat wind in the discussion_4594811.png'
import axios from 'axios';

const ArchitectureDesign = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/Architecture/formData');
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);
  // State to track active tabs

  const getFileNameFromPath = (imagePath) => {
    // Replace backslashes with forward slashes
    const normalizedPath = imagePath.replace(/\\/g, '/');

    // Create an absolute path and extract the filename
    const absolutePath = new URL(normalizedPath, window.location.origin);
    return absolutePath.pathname.split('/').pop();
};

const imageDataArray = formData.map((data) => {
    // Extract the first value of imagePath1 and imagePath2
    const image = data.imagePath.length > 0 ? getFileNameFromPath(data.imagePath[0]) : null;

    // Create an object with the extracted values
    return {
        projectcode: data.projectcode,
        image
    };
});

  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
   const projectdetail = [firstprojectdetail , secondprojectdetail , thirdprojectdetail , fourthprojectdetail , fifthprojectdetail , sixthprojectdetail ]
  const gridProps = isBelow720px
  ?{  spacingY : '30px'  }
  :  {   spacingY : '15px' , spacingX : '15px'  , columns : '3' }
  const [hovered, setHovered] = useState(false);


  const handleCardClick = (index) => {
    // Navigate to the overview page with user ID and contest ID
    
    const data = formData[index]
    navigate('/architecture-portfolio-details', {
      state: {
          data
      },
    });
  };

  return (
    <Flex    width={['100%' , '100%' , '100%' , '100%' , '100%' ,'100%' , '100%']}  justifyContent='center'  alignSelf='center'  minH='100vh'   flexDirection='column'  >
 
            <Flex    width={['100%' , '100%' , '100%' , '100%' , '100%' ,'100%' , '100%']}  justifyContent='center'  alignSelf='center'  marginBottom='50px'   >
                   <Box  mt='100px'  flexDirection='column'   align='center' justify='center'    >
                          <Box align='center' justify='center '    >
                          <Text mt='10px'    fontSize='45px' fontWeight='400' fontFamily='Georgia, serif'    >Architecture Portfolio</Text>
                          </Box>
                          <Box   alignItems ='center' justifyContent='center'  w='100%'  mt='100px'   >
                           
                          <Tabs    position="relative" variant="unstyled"    justify = 'center' align = 'center'    >
           <TabList>
               <SimpleGrid columns={[1, 1, 1 , 3 ,3 ,6 ,6]} spacing='20px' >
                   <Tab   _selected={{borderBottomWidth:'2px' , borderBottomColor : 'orange'  }} >
                      {/* <Box   borderBottomWidth='2px'   borderBottomColor='orange' >
                         
                      </Box> */}
                      ALL
                   </Tab>
                   <Tab  _selected={{borderBottomWidth:'2px' , borderBottomColor : 'orange'  }} >
                     RESIDENTIAL
                   </Tab>
                   <Tab  _selected={{borderBottomWidth:'2px' , borderBottomColor : 'orange'  }} >
                     VILLAS
                   </Tab>
                   <Tab  _selected={{borderBottomWidth:'2px' , borderBottomColor : 'orange'  }} >
                     APARTMENTS
                   </Tab>
                   <Tab  _selected={{borderBottomWidth:'2px' , borderBottomColor : 'orange'  }} >
                     FARMHOUSES
                   </Tab>
                   <Tab  _selected={{borderBottomWidth:'2px' , borderBottomColor : 'orange'  }} >
                      INTERIORS
                   </Tab>
               </SimpleGrid>
           </TabList>
           {/* <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    /> */}
           <TabPanels >
      <TabPanel  width={["90%" , "90%" , "90%" , "100%"]}   >
      <SimpleGrid  {...gridProps}   justifyContent='center'  alignSelf='center'  >
                                           {
                                                imageDataArray.map((item , index) =>(
                                                 
                                                  <Box
                                                  onClick={() => handleCardClick(index)}
                                                  cursor={'pointer'}
                                                    key={index}
                                                    _hover={{
                                                        filter: 'brightness(0.3)',
                                                        transition: 'filter 0.3s ease-in-out',
                                                        '.middle' : {
                                                          transform : 'translateY(20px) ',
                                                          transition: 'ease-in-out 500ms',
                                                          textDecorationColor : 'red'

                                                        } ,
                                                        // '.middle2' : {
                                                        //   borderColor : 'red' ,
                                                        //   transition : 'borderColor 1s ease-in-out'

                                                        // }
                                                       
                                                        
                                                    }}
                                                    onMouseEnter={() => setHovered(index)}
                                                    onMouseLeave={() => setHovered(null)}
                                                    backgroundImage={`http://localhost:3001/${item.image}`}
                                                    height='300px'
                                                    width={['250px' ,"300px" ,"300px" ,"220px" ,'300px' ,"400px"]}
                                                    bgSize='cover'
                                                    bgPosition='center'
                                                    // bgRepeat='no-repeat'
                                                    // width={['100%' , '300px']}
                                                    // height='100%'

                                                    // boxSize='100%'
                                                    borderRadius='2%'
                                                
                                                   bgColor='blue'
                                                   display='flex'
                                                   justifyContent='center'
                                                   alignItems='center'
                                                >
                                                   <Box  className='middle2'  width='90%' height='90%'   display='flex'
                                                   justifyContent='center'
                                                   alignItems='center' >
                                                      <Box bgColor='lightgray' className='middle' padding='7px'  width='50%'   >
                                                      <Text color={'orange'} > {hovered === index ? 'VIEW MORE' : 'RESIDENTIAL'}</Text>
                                                    </Box>
                                                   </Box>   
                                                    
                                                    {/* You can optionally add a transparent overlay if needed */}
                                                    {/* <Box bg='rgba(0, 0, 0, 0.3)' boxSize='100%' borderRadius='2%' /> */}
                                                </Box>


                                   ))
                               }
                         </SimpleGrid>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
      <TabPanel>
        <p>four!</p>
      </TabPanel>
      <TabPanel>
        <p>five</p>
      </TabPanel>
      <TabPanel>
        <p>six</p>
      </TabPanel>
    </TabPanels>
        </Tabs>
                          </Box>
                   </Box>


                   
            </Flex>

            <Box display={isBelow720px ? 'block' : 'flex' }  justifyContent= 'space-around'   justify = 'center' align = 'center'    >
              <Box    >
              <Box mt='50px'  mb='50px'    w='75%'    textAlign={['center' , 'center','center','left','left','left']}     >  
          <Text   fontSize='20px'  fontWeight='500'  mb="8" >
                 Hire Our Trusted Service
          </Text>
          <Box justify = 'center' align = 'center'   >
          <Stack     direction=  {isBelow720px ? 'column' : 'row'}    mt='20px'   align = {isBelow720px ? 'center' : 'left'}    justify =  {isBelow720px ? 'center' : 'left'}   >
               <Box  display={isBelow720px ? 'block' : 'flex'} alignItems = 'center'   width  = {['200px' ,'200px' ,'200px' ,'200px' ,'200px' ,'200px' ]}   >
                    <i className="fas fa-home" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <Text>Quality Homes</Text>
                    {/* Your other components or content */}
               </Box>
               <Box display={isBelow720px ? 'block' : 'flex'} alignItems = 'center'   width  = {['200px' ,'200px' ,'200px' ,'200px' ,'200px' ,'200px' ]}   >
                    <i className="fas fa-eye" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <Text>Transparent Service</Text>
                    {/* Your other components or content */}
               </Box>
               <Box display={isBelow720px ? 'block' : 'flex'} alignItems = 'center'   width  = {['200px' ,'200px' ,'200px' ,'200px' ,'200px' ,'200px' ]}   >
                    <i className="fas fa-inr" style={{ fontSize: "25px", color: 'orange'  }}></i>
                    <Text>Great Value</Text>
                    {/* Your other components or content */}
               </Box>
                     </Stack>     
          </Box>
          <Button width='200px'     mt='30px'  bgColor='orange'>Build</Button>
     </Box>
              </Box>
              <Box    >
                  <Image
                     src = {team}
                     width='300px'
                     height='300px'
                  />
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

export default ArchitectureDesign;
