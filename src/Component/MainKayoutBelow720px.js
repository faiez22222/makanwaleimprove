import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button  ,  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Input , 
  Select , 
  Checkbox , 
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure ,
  Stack ,
  InputGroup ,
  InputLeftAddon ,
  Textarea ,
  InputRightAddon,
  Link,
} from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import './Dropdown.css'
import buiildhood from './Images/buildhood-logo.png'
import instagram from './Images/icons8-instagram-50.png'
import facebook from './Images/icons8-facebook-logo-24.png'
import twitter from './Images/icons8-twitter-50.png'
import youtube from './Images/youtube.png'
import iso from './Images/iso_icon.png'
import makanwale from './Images/MakanWale.png'



const MainLayoutBelow720px = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const [isVisible, setIsVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const screenWidth = window.innerWidth;
  console.log("Screen width:", screenWidth);
  return (
    < >
     <Flex
      bgColor='orangered'
      justifyContent='center'
      align='center'
      // width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1540px' , '2560px']} 
       width='100vw'
    >
        <Box  width='100%'  display='block'  justifyContent='space-between'  justify = 'center' align = 'center'  marginBottom='15px' marginTop='15px'   >
             <Box display='flex'  justifyContent='center' alignContent='center'  >
             <Image            
                    boxSize='30px'
                    //objectFit='cover'
                    src={iso}
                                  
                     />
                <Text  color='white' fontSize='15px' fontWeight='600px'  >An ISO 9001:2015 Certified Company</Text>
             </Box>
             <Box    display='flex'  width='150px'   justifyContent='space-between' marginTop='15px'  >
             <Image            
                    boxSize='20px'
                    //objectFit='cover'
                    src={instagram}
                                  
                     />
                <Image            
                    boxSize='20px'
                    //objectFit='cover'
                    src={facebook}
                                  
                     />
               <Image            
                    boxSize='20px'
                    //objectFit='cover'
                    src={twitter}
                                  
                     />
                <Image            
                    boxSize='20px'
                    //objectFit='cover'
                    src={youtube}
                                  
                     />                      
             </Box>
        </Box>
    </Flex>
     <Flex
     alignItems="center"
     justifyContent="center"
     height='80px'
     width='100%'
     visibility={isVisible && isBelow720px ? "visible" : "hidden"}
   >
    
              <Box  align ='center' justify = 'center' display='flex'    width='95%'  >
                  <Box      >
                        <Image
                        height='50px'
                        width='150px'
                        src= { makanwale}
                        alt='Dan Abramov'
                      />
                  </Box> 
                   <Spacer/>
                      <Box   display='block'   alignItems='center'   >
                      <button   ref={btnRef}  onClick={onOpen}    >
                        <i className="fas fa-bars" style={{  fontSize  :'30px',  color : 'orangered'  }} ></i>
                      </button>
                      
                          <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                          >
                            <DrawerOverlay />
                            <DrawerContent>
                              <DrawerCloseButton />
                            
                    
                              <DrawerBody>
                              <Flex flexDirection='column'    >
                      <div class="dropdown">
                        <button class="dropbtn"><Text fontSize='15px' fontWeight='650' ><Link href='/' >HOME</Link></Text></button>
                          <div class="dropdown-content">
                          </div>
                      </div>
                      <Box borderWidth='1px'  ></Box>
                  <div class="dropdown">
                    <button class="dropbtn">
                    <Text fontSize='15px' fontWeight='650' ><Link to='./construction-package' ></Link>PACKAGES <i class="fas fa-angle-down"></i></Text>
                  
                    </button>
                    
                    <div class="dropdown-content">
                        <a href="/construction-packages"><Text fontSize='15px' fontWeight='550' >Construction Packages</Text></a>
                    </div>
                  </div>
                  <Box borderWidth='1px'  ></Box>
                  <div class="dropdown">
                  <button class="dropbtn">
                  <Text fontSize='15px' fontWeight='650' >PROJECT <i class="fas fa-angle-down"></i></Text>
                    </button>
                    <div class="dropdown-content">
                        <a href="/projects"><Text fontSize='15px' fontWeight='550' >Construction Projects</Text></a>
                        <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
                        <a href="/architecture-portfolio"><Text fontSize='15px' fontWeight='550' >Architecture Portfolio</Text></a>
                        <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
                    </div>
                  </div>
                  <Box borderWidth='1px'  ></Box>
                  <div class="dropdown">
                    <button class="dropbtn">
                    <Text fontSize='15px' fontWeight='650' >MORE  <i class="fas fa-angle-down"></i></Text>
                    </button>
                    <div class="dropdown-content">
                        <a href="/cost-plus-contract-house-construction"><Text fontSize='15px' fontWeight='550' >Cost-Plus Model</Text></a>
                        <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
                        <a href="/about-us"><Text fontSize='15px' fontWeight='550' >About Us</Text></a>
                        <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
                        <a href="#"><Text fontSize='15px' fontWeight='550' >Careers</Text></a>
                        <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
                        <a href="/contact-us"><Text fontSize='15px' fontWeight='550' >Contact-us</Text></a>
                    </div>
                  </div>
                      </Flex>
                              </DrawerBody>
                    
                            </DrawerContent>
                          </Drawer>
                      </Box>

              </Box>
   
   </Flex>
  
   
   </>
  );
};

export default MainLayoutBelow720px;
