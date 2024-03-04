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
   } from '@chakra-ui/react';
   import { MinusIcon , AddIcon , CheckIcon }    from '@chakra-ui/icons'

const InteriorCalculator = () => {
  // State to track active tabs
  const [distance, setDistance] = useState(0); // Initialize distance with a default value
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
useEffect(() => {
    const calculateDistance = () => {
      if (circle1Ref.current && circle2Ref.current) {
        const rect1 = circle1Ref.current.getBoundingClientRect();
        const rect2 = circle2Ref.current.getBoundingClientRect();

        const centerX1 = rect1.left + rect1.width / 2;
        const centerY1 = rect1.top + rect1.height / 2;
       

        const centerX2 = rect2.left + rect2.width / 2;
        const centerY2 = rect2.top + rect2.height / 2;

        const dx = centerX2 - centerX1;
        const dy = centerY2 - centerY1;

        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        setDistance(distance);
      }
    };

   
    calculateDistance();

    // Add event listeners or any other logic that may change the positions of the circles

    // Cleanup function
    const cleanup = () => {
      // Remove event listeners or perform any cleanup
    };

    // Attach cleanup function
    return cleanup;
  }, [circle1Ref.current, circle2Ref.current]);

 



   const form = {
      bhk : "",
      rooma : "" , 
      package : "" ,
      Name  : "" ,
      Emailid : "" , 
      Checked : "" , 
      PropertyName : ""

   }

   const [index, setIndex] = useState(0);

  const handleButtonClick = () => {
    setIndex(index + 1);
  };

  return (
   

          <Flex   alignContent="center" justifyContent="center"     minH='100vh'       >
           <Box  width={isBelow720px ? '90%' : '65%' }   justify = 'center' align='center'  >  
          <Box    justify = 'center' align='center' justifyContent='space-between'  display='flex'   height='29px'  width={isBelow720px ? '90%' : '45%' }   marginTop='100px'   >
  
  <Flex
        ref={circle1Ref}
        align="center"
        justify="center"
        width= '30px'
        height="30px"
        borderRadius="50%"
        borderWidth="2px"
        borderColor='black'
        bgColor={index >= 1 ? "black" : "white"}
        boxSizing="border-box"
       
     
        >
             <CheckIcon  color='white' />
          
        </Flex>
      
        <Flex
        
        align="center"
        justify="center"
        width= '30px'
        height="30px"
        borderRadius="50%"
        borderWidth="2px"
        borderColor='black'
        bgColor={index >=2 ? "black" : "white"}
        boxSizing="border-box"
     
        >
        <CheckIcon  color='white' />
        </Flex>
        <Flex
        
        align="center"
        justify="center"
        width= '30px'
        height="30px"
        borderRadius="50%"
        borderWidth="2px"
        borderColor='black'
        bgColor={index >=3 ? "black" : "white"}
        boxSizing="border-box"
      
        >
           <CheckIcon  color='white' />
        </Flex>
        <Flex
         ref={circle2Ref}
        align="center"
        justify="center"
        width= '30px'
        height="30px"
        borderRadius="50%"
        borderWidth="2px"
        borderColor='black'
        bgColor={index >=4 ? "black" : "white"}
        boxSizing="border-box"
    
        >
                  <CheckIcon  color='white' />
                   <Box  borderWidth='1px' position='absolute'       style={{ marginLeft:`-${ distance}px`,  width: `${ distance}px` }}     borderColor='grey' zIndex='-1'   >              
                  </Box>
        </Flex>
        
       
        </Box   >
             { index=== 0 &&  ( 
              <Box width='60%'    marginTop='50px'  borderWidth='1px'    >
                  <Box   width='50%'      display='block'  justifyContent='space-between'  mt='50px'  zIndex='1000'   >
                      <RadioGroup >
                        <Stack direction='column'  spacing='15px'      >
                        <Accordion allowMultiple  width='100%'    borderWidth='1px'   >
                                    <AccordionItem  borderColor="whitesmoke"  >
                                      <h2>
                                        <AccordionButton>
                                        <Box justifyContent = "space-between" display='flex'  >
                                          

                                        <RadioGroup defaultValue='1'>
                                              <Radio colorScheme='white' value='1'>
                                                Radio
                                              </Radio>
                                        </RadioGroup>     
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                    </AccordionItem>
                                  </Accordion>
                             <Accordion allowMultiple  width='100%'     borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                        <Box justifyContent = "space-between" display='flex'  >
                                          

                                        <RadioGroup defaultValue='1'>
                                              <Radio colorScheme='white' value='1'>
                                                Radio
                                              </Radio>
                                        </RadioGroup>     
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                      <RadioGroup defaultValue='2'>
                                              <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='white' value='1'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio colorScheme='green' value='2'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                              </RadioGroup>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion allowMultiple  width='100%'    borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                        <Box justifyContent = "space-between" display='flex'  >
                                          

                                        <RadioGroup defaultValue='1'>
                                              <Radio colorScheme='white' value='1'>
                                                Radio
                                              </Radio>
                                        </RadioGroup>     
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                      <RadioGroup defaultValue='2'>
                                              <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='white' value='1'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio colorScheme='green' value='2'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                              </RadioGroup>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion allowMultiple  width='100%'    borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                        <Box justifyContent = "space-between" display='flex'  >
                                          

                                        <RadioGroup defaultValue='1'>
                                              <Radio colorScheme='white' value='1'>
                                                Radio
                                              </Radio>
                                        </RadioGroup>     
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                      <RadioGroup defaultValue='2'>
                                              <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='white' value='1'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio colorScheme='green' value='2'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                              </RadioGroup>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion allowMultiple  width='100%'    borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                        <Box justifyContent = "space-between" display='flex'  >
                                          

                                        <RadioGroup defaultValue='1'>
                                              <Radio colorScheme='white' value='1'>
                                                Radio
                                              </Radio>
                                        </RadioGroup>     
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                      <RadioGroup defaultValue='2'>
                                              <Stack spacing={5} direction='row'>
                                                <Radio  value='1'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio colorScheme='green' value='2'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                              </RadioGroup>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                        </Stack>
                      </RadioGroup>
                  </Box>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}

             { index=== 1 &&  ( 
                  <Box  justifyContent='center'  alignItems='center'  >
                       <Box justifyContent='center' alignItems='center' flexDirection='column'    >
                          <Text  fontWeight='500px' fontSize= '25px' >Select the rooms you’d like us to design</Text>
                          <Text  fontWeight='400px' fontSize= '20px' >To know more about this, <Link href='#' >click here</Link></Text>
                       </Box>
                       <Box   mt='50px'   >
                           <VStack  spacing='15px' >
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}  >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'   width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}  >
                                  <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <AddIcon color='white'  />
                                      </Flex>
                                      <Text fontSize='20px' >1</Text>
                                      <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <MinusIcon color='white'  />
                                      </Flex>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'    width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                  <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <AddIcon color='white'  />
                                      </Flex>
                                      <Text fontSize='20px' >1</Text>
                                      <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <MinusIcon color='white'  />
                                      </Flex>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'    width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                  <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <AddIcon color='white'  />
                                      </Flex>
                                      <Text fontSize='20px' >1</Text>
                                      <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <MinusIcon color='white'  />
                                      </Flex>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'   width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                  <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <AddIcon color='white'  />
                                      </Flex>
                                      <Text fontSize='20px' >1</Text>
                                      <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <MinusIcon color='white'  />
                                      </Flex>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'   width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}  >
                                  <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <AddIcon color='white'  />
                                      </Flex>
                                      <Text fontSize='20px' >1</Text>
                                      <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <MinusIcon color='white'  />
                                      </Flex>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'    width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                  <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <AddIcon color='white'  />
                                      </Flex>
                                      <Text fontSize='20px' >1</Text>
                                      <Flex
        
                                    align="center"
                                    justify="center"
                                    width= '30px'
                                    height="30px"
                                    borderRadius="50%"
                                    borderWidth="2px"
                                    borderColor='black'
                                    bgColor=  '#eb595f'
                                    boxSizing="border-box"
                                  
                                    >
                                          <MinusIcon color='white'  />
                                      </Flex>
                                  </Box>
                             </Container>
                           </VStack>  
                       </Box>
                                  
                       <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button onClick={handleButtonClick}>Next</Button>
                  </Box>                
                         
                  </Box>
             )}
             { index=== 2 &&  ( 
                  <Box>
                      <RadioGroup >
                        <Stack direction='column'>
                          <Radio size='lg'  value='1'>
                              <img
                                 
                              />
                          </Radio>
                          
                        </Stack>
                      </RadioGroup>
                      <button onClick={handleButtonClick}>Next</button>
                  </Box>
             )}
             { index=== 3 &&  ( 
                  <Box>
                      <RadioGroup >
                        <Stack direction='column'>
                          <Radio value='1'>First</Radio>
                          <Radio value='2'>Second</Radio>
                          <Radio value='3'>Third</Radio>
                          <Radio value='4'>Fourth</Radio>
                          <Radio value='5'>Fifth</Radio>
                        </Stack>
                      </RadioGroup>
                      <button onClick={handleButtonClick}>Next</button>
                  </Box>
             )}
        </Box>

          </Flex>  

  )
};


export default InteriorCalculator;
