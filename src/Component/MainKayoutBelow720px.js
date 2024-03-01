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
} from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import './Dropdown.css'
import buiildhood from './Images/buildhood-logo.png'



const MainLayoutBelow720px = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const [isVisible, setIsVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     flexDirection="row"
     height='80px'
     width={["375px", "375px", "375px", "375px", "375px", "425px"]}
     visibility={isVisible && isBelow720px ? "visible" : "hidden"}
   >
    <Flex        >
          <Image
          boxSize='60px'
          width='150px'
          src= {buiildhood}
          alt='Dan Abramov'
        />
    </Flex> 
    <Spacer/>
    <Flex>
    <Button colorScheme='teal'   ref={btnRef}  onClick={onOpen} >
       <i className="fas fa-bars" style={{ fontSize: "45", color: 'orange' }} ></i>
    </Button>
     
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
      <button class="dropbtn"><Text fontSize='15px' fontWeight='650' >HOME</Text></button>
        <div class="dropdown-content">
        </div>
    </div>
    <Box borderWidth='1px'  ></Box>
<div class="dropdown">
  <button class="dropbtn">
  <Text fontSize='15px' fontWeight='650' >PACKAGES <i class="fas fa-angle-down"></i></Text>
 
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
       <a href="#"><Text fontSize='15px' fontWeight='550' >Construction Projects</Text></a>
       <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
       <a href="#"><Text fontSize='15px' fontWeight='550' >Architecture Portfolio</Text></a>
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
    </Flex>

   
   
   </Flex>
  );
};

export default MainLayoutBelow720px;
