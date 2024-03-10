import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button , useMediaQuery , SimpleGrid , Stack ,StackDirection, Grid, GridItem ,TabIndicator } from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import aboutvilla from './Images/about-villa.png';
import team from './Images/—Pngtree—flat wind in the discussion_4594811.png'
import firstprojectdetail from './Images/1projectdetail.jpg'
import secondprojectdetail from './Images/2ndprojectdetail.jpg'
import thirdprojectdetail from './Images/3projectdetail.jpg'
import fourthprojectdetail from './Images/4projectdetail.jpg'
import fifthprojectdetail from './Images/5projectdetail.jpg'
import sixthprojectdetail from './Images/6projectdetail.jpeg'


function DrawerExample() {
  
   const [isBelow720px] = useMediaQuery("(max-width: 720px)");
   const commonProps = {
     mt: '70px',
     // Add any other common props here
   };
    const projectdetail = [firstprojectdetail , secondprojectdetail , thirdprojectdetail , fourthprojectdetail , fifthprojectdetail , sixthprojectdetail ]
   const gridProps = isBelow720px
   ?{    minChildWidth :['250px' , '300px']  , spacing : '20px'   }
   :  {   spacingY : '15px' , spacingX : '15px'  , columns : '3' }
   const gridConstructionProps = isBelow720px
   ?{ templateRows :['auto' , 'auto' ,'auto','repeat(2, 1fr 1.5fr )']  , gap:'5px'  }
   :  {  templateColumns :'repeat(2, 1fr)'  , gap:'100px'  }
  

      return (
         <Box justify = 'center' align = 'center'  mt='50px'  >
        <Text  fontSize=  {['30px' ,'30px' ,'30px' ,'30px' ,'30px' ,'30px']}  fontStyle='poppins'   fontWeight='500' >
        Construction
       </Text>
        <Tabs    position="relative" variant="unstyled"    justify = 'center' align = 'center'   >
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
      <TabPanel  width={["90%" , "90%" , "90%" , "75%"]}  >
      <SimpleGrid  {...gridProps}     >
                                           {
                                                projectdetail.map((item , index) =>(
                                                   <Box>
                                                       <Image
                                                          //  width={['250px' , '300px']}
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

    

  )
}

export default DrawerExample