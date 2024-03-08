import React, { useState  , useEffect , useRef } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    VStack,
    FormControl , 
    FormLabel , 
    Select ,
    Radio , 
    RadioGroup , 
    HStack ,
    Stack ,
    useMediaQuery ,
    Button, 
    Container,
    Link,
    Image ,
    Input  ,
    FormErrorMessage,
    FormHelperText,
    Checkbox ,
    useRadio ,
    chakra , 
    useToast ,
    useRadioGroup, 
    Textarea,
   } from '@chakra-ui/react';
   import { MinusIcon , AddIcon , CheckIcon }    from '@chakra-ui/icons'
   import essentials from './Images/essentials-desktop-1677569928-WCHBw.jpg'
   import premium from './Images/premium-desktop-1677569932-Tc87O.jpg'
   import luxury from './Images/luxe-desktop-1677569931-ZV4Be.jpg'

function DrawerExample() {
   const [isBelow720px] = useMediaQuery("(max-width: 720px)");

      return (
         <Flex   direction='column' justifyContent='center' alignContent='center'  bgColor='yellow' 
    //  width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1440px' , '2560px']}  
    width='100%'
      >
          <div class="wrapper"  style={{display:'block' ,alignItems : 'center' ,  flexDirection: 'column',  marginTop :'50px', marginBottom  : '50px'   }}  >
            <h1>Home Construction Packages</h1>
            <Text fontSize='25px' > End-to-End Construction </Text>
          </div>
      <Tabs isLazy   orientation={isBelow720px ? 'vertical' : 'horizontal'  }   bgColor='red'  variant='unstyled'  width={['100%' , '100%'  , '100%' ,'100%'  ,'85%' , '75%' ]} 
      //   ml={['0px' , '0px' , '0px' , '0px' , '30px' , '180px']} 
        height='1100px'    >    
          <TabList  marginLeft={isBelow720px ? '0px' : '100px'}  >
     
      <Tab   _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='#DCDCDC'   style={{  height : '50px'}}
       width={['100%' , '280px'  , '330px' ,'250px'  ,'200px' , '330px' ]}  
      //  ml={['35px' , '47px' , '48px' , '0px' , '10px' , '10px']} 
        >
         Silver
      </Tab>
      </TabList>
      </Tabs>
      </Flex>

  )
}

export default DrawerExample