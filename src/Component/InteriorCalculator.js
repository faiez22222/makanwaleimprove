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
   } from '@chakra-ui/react';
   import { MinusIcon , AddIcon , CheckIcon }    from '@chakra-ui/icons'
   import essentials from './Images/essentials-desktop-1677569928-WCHBw.jpg'
   import premium from './Images/premium-desktop-1677569932-Tc87O.jpg'
   import luxury from './Images/luxe-desktop-1677569931-ZV4Be.jpg'

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

 

  const [formData, setFormData] = useState({
    bhk : "1 BHK",
      room : "" , 
      package : "" ,
      Name  : "" ,
      Emailid : "" , 
      Checked : "" , 
      PropertyName : ""

  });

   const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


   const [index, setIndex] = useState(0);
   const [first, setFirst] = useState(0);
   const [second, setSecond] = useState(0);
   const [third, setThird] = useState(0);
   const [fourth, setFourth] = useState(0);
   const [five, setFive] = useState(0);

  const handleButtonClick = () => {
    setIndex(index + 1);
  };

  const handleFirstPlusClick = () => {
    setFirst(first + 1);
  };
  const handleFirstMinusClick = () => {
    if(first > 0 ) setFirst(first - 1);
  };

  const handleSecondPlusClick = () => {
    setSecond(second + 1);
  };
  const handleSecondMinusClick = () => {
    if(second > 0 ) setSecond(second - 1);
  };


  const handleThirdPlusClick = () => {
    setThird(third + 1);
  };
  const handleThirdMinusClick = () => {
    if(third > 0 ) setThird(third - 1);
  };


  const handleFourthPlusClick = () => {
    setFourth(fourth + 1);
  };
  const handleFourthMinusClick = () => {
    if(fourth > 0 ) setFive(fourth - 1);
  };

  const handleFivePlusClick = () => {
    setFive(five + 1);
  };
  const handleFiveMinusClick = () => {
    if(five > 0 ) setFive(five - 1);
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
              <Box width=  {["100%" ,  "100%", "100%" , '60%'  , '60%'  ,'60%'  ]}      marginTop='50px'    >
                  <Box   width= {["100%" ,  "100%", "100%" , "50%" , "50%" , "50%" ]}      display='block'  justifyContent='space-between'  mt='50px'  zIndex='1000'    borderWidth='1px'  >
                      <RadioGroup  defaultValue='0'    onChange={handleInputChange} value={formData.bhk} name="bhk"  >
                        <Stack direction='column'  spacing='15px'      >
                        <Accordion allowMultiple  width='100%'    borderWidth='1px'   >
                                    <AccordionItem  borderColor="whitesmoke"  >
                                      <h2>
                                        <AccordionButton>
                                           <Radio value = '0'  color='#eb595f'  >
                                             1 BHK
                                           </Radio>
                                        </AccordionButton>
                                      </h2>
                                    </AccordionItem>
                                  </Accordion>
                             <Accordion allowMultiple  width='100%'     borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                     
                                              <Stack spacing={5} direction='row'>
                                              <Radio color='#eb595f' value='1'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='2'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion allowMultiple  width='100%'    borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                     
                                              <Stack spacing={5} direction='row'>
                                                <Radio color='#eb595f'  value='3'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='4'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>

                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion allowMultiple  width='100%'    borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                               
                                          <AccordionIcon />
                                      
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                              <Stack spacing={5} direction='row'>
                                                <Radio color='#eb595f'  value='5'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='6'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>
                                  <Accordion allowMultiple  width='100%'    borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                          <AccordionIcon />                                 
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                              <Stack spacing={5} direction='row'>
                                                <Radio  value='7'>
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='8'>
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                              </Stack>
                                      </AccordionPanel>
                                    </AccordionItem>
                                  </Accordion>s
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
                                    <button  onClick={handleFirstPlusClick} >
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
                                      </button>
                                      <Text fontSize='20px' >{first}</Text>
                                      <button onClick={handleFirstMinusClick} >
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
                                      </button>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                        Kitchen
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'    width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                    <button onClick={handleSecondPlusClick} >
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
                                      </button  >  
                                      <Text fontSize='20px' >{second}</Text>
                                      <button   onClick={handleSecondMinusClick}  >
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
                                      </button>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                        Bedroom
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'    width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                    <button  onClick={handleThirdPlusClick}  >
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
                                      </button>
                                      <Text fontSize='20px' >{third}</Text>
                                      <button  onClick={handleThirdMinusClick}  >
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
                                      </button>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                         Bathroom
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'   width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                    <button onClick={handleFourthPlusClick}  >
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
                                      </button>
                                      <Text fontSize='20px' >{fourth}</Text>
                                      <button  onClick={handleFourthMinusClick}  >
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
                                      </button>
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                        Dining
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'   width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}  >
                                    <button onClick={handleFivePlusClick}  >
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
                                      </button>
                                      <Text fontSize='20px' >{five}</Text>
                                      <button  onClick={handleFiveMinusClick}   >
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
                                      </button> 
                                  </Box>
                             </Container>
                             <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
                                  <Box>
                                     <Text>
                                       Living Room
                                     </Text>
                                  </Box>
                                  <Box display='flex' justifyContent='space-between'    width={['30%' ,'25%' ,'25%' ,'25%','25%','25%','25%']}   >
                                    <button>
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
                                      </button>
                                      <Text fontSize='20px' >1</Text>
                                      <button>
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
                                      </button>
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
                  <Box         flexDirection='column'     marginTop='50px'      >
                      <Box    w= {[ "100%" , "100%" , "100%" ,  "100%" , "40%" ,  "40%" ]}  marginBottom='50px'  >
                      <RadioGroup       >
                        <Stack direction='column'>
                         <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio  value='1'  size='lg'   >
    
                                <Text>Essentials (₹₹)</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text>A range of essential home interior solutions that's perfect for all your needs.</Text>
                             </Container>
                             <Box   justify = 'center'  align = 'center'  marginTop='10px'  mb='15px'   >
                                < Image
                                   borderRadius='10px'
                                   src= {essentials}
                                   alt = {essentials}
                                   width='90%'
                                />
                             </Box> 
                         
                             <Container     width='100%' marginTop='10px'  >
                                 <Box display='flex'  width='50%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Affordable Pricing</Text>
                                 </Box>
                                 <Box display='flex'   width='50%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Convenient design</Text>
                                 </Box>
                                 <Box display='flex'   width='45%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Basic Accesories</Text>
                                 </Box>
                             </Container>
                          </Box>   


                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='2'  size='lg'   >
    
                                <Text>Premium (₹₹₹)</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text>Superior home interior solutions that will take your interiors to the next level.</Text>
                             </Container>
                             <Box   justify = 'center'  align = 'center'  marginTop='10px'  mb='15px'   >
                                < Image
                                   borderRadius='10px'
                                   src= {essentials}
                                   alt = {essentials}
                                   width='90%'
                                />
                             </Box> 
                         
                             <Container     width='100%' marginTop='10px'  >
                                 <Box display='flex'  width='50%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Mid-range pricing</Text>
                                 </Box>
                                 <Box display='flex'   width='50%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Premium designs</Text>
                                 </Box>
                                 <Box display='flex'   width='45%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Wide range of accessories</Text>
                                 </Box>
                             </Container>
                          </Box>   


                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='3'  size='lg'   >
    
                                <Text>Luxe (₹₹₹₹)</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text>High-end interior solutions for the ultimate home interior experience you deserve.</Text>
                             </Container>
                             <Box   justify = 'center'  align = 'center'  marginTop='10px'  mb='15px'   >
                                < Image
                                   borderRadius='10px'
                                   src= {essentials}
                                   alt = {essentials}
                                   width='90%'
                                />
                             </Box> 
                         
                             <Container     width='100%' marginTop='10px'  >
                                 <Box display='flex'  width='50%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Elite pricing</Text>
                                 </Box>
                                 <Box display='flex'   width='50%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Lavish designs</Text>
                                 </Box>
                                 <Box display='flex'   width='45%'  justifyContent='space-between'  >
                                    <CheckIcon color='green' />
                                    <Text>Extensive range of accessories</Text>
                                 </Box>
                             </Container>
                          </Box>   

                        </Stack>
                      </RadioGroup>
                      </Box>
                      <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                    <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button onClick={handleButtonClick}>Next</Button>
                  </Box>      
                  </Box>
             )}
             { index=== 3 &&  ( 
                  <Box alignItems='center' justifyContent='center'  flexDirection='column' marginTop='20px'   >
                     <Box>
                        <Text>Your estimate is almost ready</Text>
                     </Box>
                     <Box>
                     <FormControl     w = {[ "100%" , "100%" , "100%" , '40%' , '40%' ,  '40%' ]}   marginTop='30px'  >
                      <VStack spacing='20px'  >
                      <Input
                       type='name'  
                       placeholder='name' 
                       />
                        <Input
                       type='email'  
                       placeholder='email' 
                       />
                        <Input
                       type='number'  
                       placeholder='number' 
                       />
                      <Checkbox defaultChecked>Send me updates on whats app</Checkbox>

                      <Input
                       type='number'  
                       placeholder='name' 
                       />
                       </VStack>
                    </FormControl>
                     </Box>
                     <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                    <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
             )}
        </Box>

          </Flex>  

  )
};


export default InteriorCalculator;
