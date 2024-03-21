import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button  ,  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Input , 
  Select , 
  Checkbox , 
  useMediaQuery,
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
import iso from  './Images/iso_icon.png'
import makanwale from './Images/MakanWale.png'



const MainLayout = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
    <Flex
      bgColor='orangered'
      justifyContent='center'
      align='center'
      // width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1540px' , '2560px']} 
      width='100vw'
    >
        <Box  width='70%'  display='flex'  justifyContent='space-between'   >
             <Box  display='flex'  >
             <Image            
                    boxSize='30px'
                    //objectFit='cover'
                    src={iso}
                                  
                     />
                <Text>An ISO 9001:2015 Certified Company</Text>
             </Box>
             <Box>
             <Box    display='flex'  width='150px'   justifyContent='space-between' >
             <Image            
                    boxSize='30px'
                    //objectFit='cover'
                    src={instagram}
                                  
                     />
                <Image            
                    boxSize='30px'
                    //objectFit='cover'
                    src={facebook}
                                  
                     />
               <Image            
                    boxSize='30px'
                    //objectFit='cover'
                    src={twitter}
                                  
                     />
                <Image            
                    boxSize='30px'
                    //objectFit='cover'
                    src={youtube}
                                  
                     />                      
             </Box>
             </Box>
        </Box>
    </Flex>
     <Flex
     alignItems="center"
     justifyContent="center"
     flexDirection="row"
     mt='10px'
     mb='10px'
    
    // visibility={isVisible && isBelow720px ? "hidden" : "visible"}
   >
            <Box width='70%'  display='flex'   justify = 'center' align='center'  >
              <Box     >
              <Image
                    boxSize='60px'
                    width='250px'
                    src= {makanwale}
                    alt='Dan Abramov'
                  
                  />
              </Box> 
              <Spacer/>
              <Box flexDirection='row'    >
              <div class="dropdown">
                <button class="dropbtn"><Text fontSize='15px' fontWeight='650' ><Link href='/' >HOME</Link></Text></button>
                  <div class="dropdown-content">
                  </div>
              </div>
          <div class="dropdown">
            <button class="dropbtn">
            <Text fontSize='15px' fontWeight='650' >PACKAGES <i class="fas fa-angle-down"></i></Text>
          
            </button>
            
            <div class="dropdown-content">
                <a href="/construction-packages"><Text fontSize='15px' fontWeight='550' >Construction Packages</Text></a>
            </div>
          </div>
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
              </Box>
              </Box>
   </Flex>
   </>
  );
};

export default MainLayout;
