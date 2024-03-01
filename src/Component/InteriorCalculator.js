import React, { useState } from 'react';
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
   } from '@chakra-ui/react';

const InteriorCalculator = () => {
  // State to track active tabs
  

  return (
    <>

          <Flex   alignContent="center" justifyContent="center"  bgColor='yellow'   minH='100vh' width='1600px'   >
             <Flex alignContent="center" justifyContent="center"  bgColor='green'  display='block' >  
             <Flex   flexDirection='column'  textAlign='center'  bgColor='red'  >
                <Text>Select your BHK type</Text>
                <Text>To know more about this, click here</Text>
             </Flex>
             <Box bgColor='green' >
             <FormControl>
             <RadioGroup defaultValue='Itachi'>
                <Radio value='Sasuke'>Sasuke</Radio>
            </RadioGroup>
            <input></input>
            <Select>
              <option>
                 <Box display= 'flexk' >
                    <Text>hey1</Text>
                    <Text>hey2</Text>
                 </Box>
              </option>
           </Select>
        <RadioGroup  >
          <Stack direction="row">
            <Radio value="radioOption1">Radio 1</Radio>
            <Radio value="radioOption2">Radio 2</Radio>
            <Radio value="radioOption3">Radio 3</Radio>
          </Stack>
        </RadioGroup>
             </FormControl>
             <FormControl as='fieldset'>
           <FormLabel as='legend'>
            Favorite Naruto Character
            </FormLabel>
            <RadioGroup defaultValue='Itachi'>
                <HStack spacing='24px'>
                <Radio value='Sasuke'>Sasuke</Radio>
                <Radio value='Nagato'>Nagato</Radio>
                <Radio value='Itachi'>Itachi</Radio>
                <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
                </HStack>
            </RadioGroup>
            </FormControl>
             </Box>
             </Flex>
          </Flex>  

  </>
  )
};


export default InteriorCalculator;
