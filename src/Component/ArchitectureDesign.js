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
  :  {   spacingY : '30px' , spacingX : '30px'  , columns : '2' }

  return (
 
            <Flex    width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1440px' , '2560px']}  align='center' justify='center'  minH='100vh'  >
                   <Box    width={['95%', '90%' , '90%' , '90%' , '75%' , '75%'  ]}  mt='30px' >
                       <Box   align='center' justify = 'center' >
                           <Text fontSize='30px' >Home Construction Projects </Text> 
                       </Box>
                       <Box    align = 'center' justify = 'center'   marginTop='50px'  >
                          <SimpleGrid  {...gridProps}  >
                                {
                                    projectdetail.map((item , index) =>(
                                        <Box    height='500px'   borderRadius='2%'  borderWidth='1px'     transition="transform 0.3s ease-in-out"  _hover={{ transform: 'scale(1.1)' }}  >
                                      
                                       
                                         <HStack  spacing='0px'  align = 'center' justify = 'center'  > 
                                        <Image
                                                width={['49.5%']}
                                                height='430px'
                                                objectFit='cover'
                                                src= {item}
                                                alt='Dan Abramov'
                                                borderRadius='2%'
                                        />
                                          <Image
                                                width={['49.5%']}
                                                height='430px'
                                                objectFit='cover'
                                                src= {item}
                                                alt='Dan Abramov'
                                                borderRadius='2%'
                                        />
                                        </HStack>  
                                        <Container display='flex'  mt='8px'  >
                                            <Text  >BH202303SVR</Text>
                                              <Spacer/>
                                            <Text   >Bangalore</Text>
                                        </Container>
                                        <Box borderWidth='1px' ></Box>
                                        <Container  display='flex'  mt='8px'  >
                                            <Text  >Structure:</Text>
                                              <Spacer/>
                                            <Text   >Status:</Text>
                                        </Container>
                                        </Box>
                                    ))
                                }
                          </SimpleGrid>
                       </Box>
                   </Box>
            </Flex>
           

  );
};

export default ArchitectureDesign;
