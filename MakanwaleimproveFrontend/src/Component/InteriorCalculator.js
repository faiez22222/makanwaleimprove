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
    Checkbox, 
    Card,
    Grid,
    GridItem,
   } from '@chakra-ui/react';
   import { MinusIcon , AddIcon , CheckIcon }    from '@chakra-ui/icons'
   import essentials from './Images/essentials-desktop-1677569928-WCHBw.jpg'
   import premium from './Images/premium-desktop-1677569932-Tc87O.jpg'
   import luxury from './Images/luxe-desktop-1677569931-ZV4Be.jpg'
   import 'react-phone-number-input/style.css'
   import PhoneInput from 'react-phone-number-input'
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
   import makanwale from './Images/MakanWale.png'
   import quizinterior from './Images/quiz_confirmation_d_v1_1.png'

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
       bhk : '0' ,
      room : {
        livingRoom : 0,
        kitchen : 0 ,
        Bedroom : 0 ,
        Bathroom : 0 ,
        Dining : 0 ,
      }, 
      package : "0" ,
      Name  : "" ,
      Emailid : "" , 
      Checked : false , 
      PropertyName : "" ,
      Number : ""

  });


  const [isNameError, setIsNameError] = useState(false);
  const [isEmailidError, setIsEmailidError] = useState(false);
  const [isNumberError, setIsNumberError] = useState(false);
  const [isPropertyName, setIsPropertyNameError] = useState(false);
  const [isCheckedError, setIsCheckedError] = useState(false);

  const handleRoomCountChange = (roomName, increment) => {
    console.log(typeof(roomName ))
    setFormData(prevFormData => {
      const currentCount = prevFormData.room[roomName];
      console.log('currentCount' , currentCount)
      const newValue = currentCount + increment;
      return {
        ...prevFormData,
        room: {
          ...prevFormData.room,
          [roomName]: newValue
        }
      };
    });
    console.log('formdata' , formData)
  };

   const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if(name ==='name'   )
    {
      setIsNameError(value.trim() === '');
    }
    if( name === 'Number' ){
        setIsNumberError(value.trim() === '')
    }
   if( name === 'PropertyName' ){
      setIsPropertyNameError(value.trim() === '')
  }
   if( name === 'Checked' ){
    setIsCheckedError(value === false)
   }
     if( name === 'Emailid' ){
      setIsEmailidError(value.trim() === '')
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

   const [index, setIndex] = useState(0);
  

  const handleButtonClick = () => {
    setIndex(index + 1);
  };

  
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    if (formData.Name.trim() === ''   || formData.Number.trim() === '' || formData.Emailid.trim() === '' || formData.Checked === false || formData.PropertyName.trim() === ''  ) {
      // Set error states for required fields
      setIsNameError(formData.Name.trim() === ''  );
      setIsNumberError(formData.Number.trim() === ''  );
      setIsEmailidError(formData.Emailid.trim() === ''  );
      setIsPropertyNameError(formData.PropertyName.trim() === ''  );
      setIsCheckedError(formData.Checked === false  );
      // Set error states for other required fields if needed
      return;
    }
    console.log(formData)
  
    try {
      const response = await fetch('http://localhost:3001/api/interior-calculator/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setIndex(index + 1);
        console.log('Form data successfully submitted to the backend');
       
      } else {
        console.error('Failed to submit form data to the backend');
       
      }
    } catch (error) {
      console.error('Error submitting form data:', error);

    }
  };
  const [isFirstClicked, setFirstIsClicked] = useState(false);

  const handleFirstClick = () => {
    setFirstIsClicked(!isFirstClicked);
    setSecondIsClicked(false);
    setThirdIsClicked(false);
    setFourthIsClicked(false);
  };
  const [isSecondClicked, setSecondIsClicked] = useState(false);

  const handleSecondClick = () => {
    setSecondIsClicked(!isSecondClicked);
    setFirstIsClicked(false);
    setThirdIsClicked(false);
    setFourthIsClicked(false);
  };
  const [isThirdClicked, setThirdIsClicked] = useState(false);

  const handleThirdClick = () => {
    setThirdIsClicked(!isThirdClicked);
    setSecondIsClicked(false);
    setFirstIsClicked(false);
    setFourthIsClicked(false);
  };
  const [isFourthClicked, setFourthIsClicked] = useState(false);
  const handleFourthClick = () => {
    setFourthIsClicked(!isFourthClicked);
    setSecondIsClicked(false);
    setThirdIsClicked(false);
    setFirstIsClicked(false);
  };

 



  return (
   

          <Flex   align="center" justify="center"   flexDirection='column'    minH='100vh'       >
           <Box  width={isBelow720px ? '90%' : '65%' }   justify = 'center' align='center' mb='2rem'   >  
          <Box    justify = 'center' align='center' justifyContent='space-between'  display='flex'   height='29px'  width={isBelow720px ? '90%' : '45%' }   marginTop='100px'    >
  
  <Flex
        ref={circle1Ref}
        align="center"
        justify="center"
        width= '1.5rem'
        height="1.5rem"
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
        width= '1.5rem'
        height="1.5rem"
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
        width= '1.5rem'
        height="1.5rem"
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
        width= '1.5rem'
        height="1.5rem"
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
        </Box    >
        <Box   w={`${distance+50}px`} justifyContent='space-between' display='flex' mt='.5rem'  >
          <Text fontSize={['.6rem']} >BHK TYPE</Text>
          <Text fontSize={['.6rem']} >ROOMS TO DESIGN</Text>
          <Text fontSize={['.6rem']} >PACKAGE</Text>
          <Text fontSize={['.6rem']} >GET QUOTE</Text>
        </Box>

             { index=== 0 &&  ( 
              <Card width=  {["100%" ,  "100%", "100%" , '60%'  , '60%'  ,'60%'  ]}     justifyContent='center'  alignItems='center'   marginTop='50px'   boxShadow='0 0 10px rgba(0, 0, 0, 0.2)'  >
                   
                    <Box paddingTop='2rem' >
                         <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >
                             Select your BHK type
                         </Text>
                    </Box>
                  <Box   width= {["100%" ,  "100%", "100%" , "50%" , "50%" , "50%" ]}      display='block'  justifyContent='space-between'  mt='50px'  zIndex='1000'    borderWidth='1px'  >
                      <RadioGroup  defaultValue= {formData.bhk}        >
                        <Stack direction='column'  spacing='15px'      >
                        <Accordion allowMultiple  width='100%'    borderWidth='1px'   >
                                    <AccordionItem  borderColor="whitesmoke"  >
                                      <h2>
                                        <AccordionButton  >  
                                           <Radio value = '0'  color='#eb595f'   name="bhk"   onChange={handleInputChange}  >
                                             1 BHK
                                           </Radio>
                                        </AccordionButton>
                                      </h2>
                                    </AccordionItem>
                                  </Accordion>
                             <Accordion allowMultiple  width='100%'     borderWidth='1px'    >
                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton   onClick={handleFirstClick} >
                                          <Box  width='100%' display='flex'  justifyContent='space-between'  >
                                            <HStack>
                                           <Box height='1rem' width='1rem' borderRadius='50%'   borderWidth='4px'   borderColor={isFirstClicked && '#eb595f'}  ></Box>
                                           <Text>2 BHK</Text>
                                           </HStack>
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                     
                                              <Stack spacing={5} direction='row'>
                                              <Radio color='#eb595f' value='1' name="bhk"  onChange={handleInputChange}  >
                                                <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='2' name="bhk"  onChange={handleInputChange}  >
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
                                        <AccordionButton onClick={handleSecondClick}  >
                                        <Box  width='100%' display='flex'  justifyContent='space-between'  >
                                            <HStack>
                                           <Box height='1rem' width='1rem' borderRadius='50%'   borderWidth='4px'  borderColor={isSecondClicked && '#eb595f'}  ></Box>
                                           <Text>3 BHK</Text>
                                           </HStack>
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                     
                                              <Stack spacing={5} direction='row'>
                                                <Radio color='#eb595f'  value='3'  name="bhk"  onChange={handleInputChange}  >
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='4' name="bhk"  onChange={handleInputChange}  >
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
                                        <AccordionButton  onClick={handleThirdClick}  >
                                               
                                        <Box  width='100%' display='flex'  justifyContent='space-between'  >
                                            <HStack>
                                           <Box height='1rem' width='1rem' borderRadius='50%'   borderWidth='4px'   borderColor={isThirdClicked && '#eb595f'}   ></Box>
                                           <Text>4 BHK</Text>
                                           </HStack>
                                          <AccordionIcon />
                                          </Box>
                                      
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                              <Stack spacing={5} direction='row'>
                                                <Radio color='#eb595f'  value='5' name="bhk"  onChange={handleInputChange}  >
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='6' name="bhk"  onChange={handleInputChange}  >
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
                                        <AccordionButton  onClick={handleFourthClick} >
                                        <Box  width='100%' display='flex'  justifyContent='space-between'    >
                                            <HStack>
                                           <Box height='1rem' width='1rem' borderRadius='50%'   borderWidth='4px'   borderColor={isFourthClicked && '#eb595f'} ></Box>
                                           <Text>5 BHK</Text>
                                           </HStack>
                                          <AccordionIcon />
                                          </Box>                                 
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                              <Stack spacing={5} direction='row'>
                                                <Radio  value='7' name="bhk"   onChange={handleInputChange} >
                                                      <Box width='100%'  >
                                                          <Text>Small Values</Text>
                                                          <Text>800 sq ft</Text>
                                                      </Box>
                                                </Radio>
                                                <Radio color='#eb595f' value='8' name="bhk"  onChange={handleInputChange}  >
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
                      <Button  mb='1rem' ml='1rem'   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  bgColor=  '#eb595f'  mr='1rem'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Card>
                  
             )}

             { index=== 1 &&  ( 
                  <Box  justifyContent='center'  alignItems='center'  mt='2rem'   boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" >
                       <Box justifyContent='center' alignItems='center' flexDirection='column'    >
                          <Text  fontWeight='500px' fontSize= '25px'  fontFamily='Georgia, serif' >Select the rooms you’d like us to design</Text>
                          <Text  fontWeight='400px' fontSize= '20px'fontFamily='Georgia, serif'  >To know more about this, <Link href='#' >click here</Link></Text>
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
                                    <button  onClick={() => handleRoomCountChange('livingRoom', 1)} >
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
                                      <Text fontSize='20px' >{formData.room.livingRoom}</Text>
                                      <button onClick={() => handleRoomCountChange('livingRoom', -1)} >
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
                                    <button onClick={() => handleRoomCountChange('kitchen', 1)} >
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
                                      <Text fontSize='20px' >{formData.room.kitchen}</Text>
                                      <button  onClick={() => handleRoomCountChange('kitchen',-1)}  >
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
                                    <button onClick={() => handleRoomCountChange('Bedroom', 1)}  >
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
                                      <Text fontSize='20px' >{formData.room.Bedroom}</Text>
                                      <button  onClick={() => handleRoomCountChange('Bedroom', -1)}  >
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
                                    <button onClick={() => handleRoomCountChange('Bathroom', 1)}  >
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
                                      <Text fontSize='20px' >{formData.room.Bathroom}</Text>
                                      <button onClick={() => handleRoomCountChange('Bathroom', -1)}  >
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
                                    <button onClick={() => handleRoomCountChange('Dining', 1)}  >
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
                                      <Text  color='black' fontSize='20px' >{formData.room.Dining}</Text>
                                      <button onClick={() => handleRoomCountChange('Dining',-1)}   >
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
                             {/* <Container  display='flex' justifyContent='space-between'  borderWidth='1px' borderRadius='10px'  paddingTop='10px' paddingBottom='10px'  width={['100%' ,'100%' ,'100%' ,'40%','40%','40%','40%']}    >
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
                             </Container> */}
                           </VStack>  
                       </Box>
                                  
                       <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                  <Box   width='90%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button  mb='1rem'   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick}>Next</Button>
                  </Box>                
                         
                  </Box>
             )}
             { index=== 2 &&  ( 
                  <Box         flexDirection='column'     marginTop='50px'   boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"    >
                       <Box pt='3rem' mb = '3rem'  >
                         <Text fontSize='1.5rem'  fontWeight='400' fontFamily='Georgia, serif' >Pick your package</Text>
                       </Box>
                      <Box    w= {[ "100%" , "100%" , "100%" ,  "100%" , "40%" ,  "40%" ]}  marginBottom='50px'  >
                      <RadioGroup    defaultValue= {formData.package}      >
                        <Stack direction='column'>
                         <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio  value='0'  size='lg'   name="package"   onChange={handleInputChange}  >
    
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
                         
                             <Container     width='100%' marginTop='10px'   >
                                 <HStack spacing='5rem'  >
                                    <CheckIcon color='green' />
                                    <Text>Affordable Pricing</Text>
                                 </HStack>
                                 <HStack spacing = '5rem' >
                                    <CheckIcon color='green' />
                                    <Text>Convenient design</Text>
                                 </HStack>
                                 <HStack spacing='5rem' >
                                    <CheckIcon color='green' />
                                    <Text>Basic Accesories</Text>
                                 </HStack>
                             </Container>
                          </Box>   


                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='1'  size='lg'    name="package"   onChange={handleInputChange}  >
    
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
                         
                             <Container     width='100%' marginTop='10px'     >
                                 <HStack spacing = '5rem'  >
                                    <CheckIcon color='green' />
                                    <Text>Mid-range pricing</Text>
                                 </HStack>
                                 <HStack spacing = '5rem'  >
                                    <CheckIcon color='green' />
                                    <Text>Premium designs</Text>
                                 </HStack>
                                 <HStack    spacing='5rem'  >
                                    <CheckIcon color='green' />
                                    <Text>Wide range of accessories</Text>
                                 </HStack>
                             </Container>
                          </Box>   


                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='2'  size='lg'   name="package"   onChange={handleInputChange}   >
    
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
                                 <HStack spacing='5rem'  >
                                    <CheckIcon color='green' />
                                    <Text>Elite pricing</Text>
                                 </HStack>
                                 <HStack spacing = '5rem' >
                                    <CheckIcon color='green' />
                                    <Text>Lavish designs</Text>
                                 </HStack>
                                 <HStack  spacing = '5rem' >
                                    <CheckIcon color='green' />
                                    <Text>Extensive range of accessories</Text>
                                 </HStack>
                             </Container>
                          </Box>   

                        </Stack>
                      </RadioGroup>
                      </Box>
                      <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                    <Box  width='90%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button mb='2rem'   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick}>Next</Button>
                  </Box>      
                  </Box>
             )}
             { index=== 3 &&  ( 
                  <Box alignItems='center' justifyContent='center'  flexDirection='column' marginTop='20px' boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"   >
                     <Box>
                        <Text  fontSize='1.5rem'  fontWeight='400' fontFamily='Georgia, serif' >Your estimate is almost ready</Text>
                     </Box>
                     <Box>
                     <FormControl     w = {[ "100%" , "100%" , "100%" , '40%' , '40%' ,  '30%' ]}   marginTop='30px'  >
                      <VStack spacing='20px'  >
                      <Input
                       type='name'  
                       placeholder='Name' 
                       name = 'Name'
                       value={formData.Name}
                       isRequired = {true}
                       isInvalid = {isNameError}
                       onChange={handleChange}
                       />
                        <Input
                       type='email'  
                       placeholder='Email' 
                       name = 'Emailid'
                       isRequired = {true}
                       value={formData.Emailid}
                       isInvalid = {isEmailidError}
                       onChange={handleChange}
                       />
                      <Input
                       type='tel'  
                       placeholder='Phone Number' 
                       name = 'Number'
                       value={formData.Number}
                       isRequired = {true}
                       isInvalid = {isNumberError}
                       onChange={handleChange}
                       />
                      <Checkbox 
  
                          name='Checked'
                          checked={formData.Checked}
                          onChange={handleChange}
                          isRequired= {true}
                          isInvalid = {isCheckedError}
                      >
                        Send me updates on whats app
                        </Checkbox>

                      <Input
                       type='name'  
                       placeholder='Property Name' 
                       name  =  'PropertyName'
                       value={formData.PropertyName}
                       isRequired = {true}
                       isInvalid = {isPropertyName}
                       onChange={handleInputChange}
                       />
                       </VStack>
                    </FormControl>
                     </Box>
                     <Box display='block' alignContent='space-between'    w = {[ "100%" , "100%" , "100%" , '40%' , '40%' ,  '30%' ]} textAlign='left' marginTop='30px'     >
                       <Text>
                          By submitting this form, you agree to the <Link    style={{ textDecoration: 'none', color: 'red' }} >privacy policy</Link> & <Link style={{ textDecoration: 'none', color: 'red' }}  >terms and conditions</Link>
                       </Text>
                       <Text marginTop='5px' >
                       This site is protected by reCAPTCHA and the Google <Link    style={{ textDecoration: 'none', color: 'red' }} >Google Privacy</Link> and  <Link    style={{ textDecoration: 'none', color: 'red' }} >Terms of Service</Link>apply.
                       </Text>
                     </Box>
                     <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                    <Box  width='90%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button  mb='1rem'  bgColor=  '#eb595f'   color='white'    _hover={{bgColor : '#eb595f'}}  onClick={handleSubmit}>Back</Button>
                      <Button    bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}    type='submit'    onClick={handleSubmit}>Get My Estimate</Button>
                  </Box>   
                  </Box>
             )}

             { index === 4 && (
                   <Box>
                        <Box width='75%'  boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"    pt='2rem' pb='1rem'  >  
                             <Image
                               width='80%'
                               src = {quizinterior}
                             />
                             <Box width='75%' >
                                  <Text  fontSize='1.5rem'  fontWeight='400' fontFamily='Georgia, serif' >
                                  Here's your estimate! Sounds like the start of a lovely home.
                                  </Text>
                                  <Text fontFamily='Georgia, serif' >
                                     We'd love to discuss it with you. We'll get in touch soon.
                                  </Text>
                             </Box>
                        </Box>
                        <Box  width='75%'  boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  >
                             <Box  pt='2rem' pb='1rem'  >   
                               <Text fontFamily='Georgia, serif' >
                                  Your estimated home interiors cost for
                               </Text>
                               <Box width='80%' >
                                  <VStack>
                                      <Image
                                        src= {essentials}
                                        rounded={"lg"}
                                      />
                                      <Grid   templateColumns  ='repeat(2, 1fr)'    width='100%'   >
                                          <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Essentials</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text color='green' fontWeight='500'  >₹9.53L*</Text>
                                         </GridItem>
                                      </Grid>
                                      <Box width='100%' fontFamily='Georgia, serif'  textAlign='left' >
                                        <Text fontFamily='Georgia, serif'  >
                                        A range of essential home interior solutions that's perfect for all your needs.
                                        </Text>
                                      </Box>
                                      <Grid   templateColumns  ='repeat(2, 1fr)'    width='100%'  rowGap='1rem'   >
                                          <GridItem textAlign='left' >
                                          <Text  fontFamily='Georgia, serif' >Type</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text    fontFamily='Georgia, serif' >1 BHK</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Rooms</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Living Room, Kitchen, Bedroom, Bathroom, Dining</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'   fontFamily='Georgia, serif' >Modular</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'   fontFamily='Georgia, serif' >
                                                  Modular Kitchen (MDF material, Matt Finish, Basic Accessories), Modular Wardrobe (2-Door Swing, MDF Material, Laminate finish, Basic Accessories), Basic Vanity Unit
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'  fontFamily='Georgia, serif' >
                                         Furniture
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'     fontFamily='Georgia, serif' >
                                         Basic Bed, Basic Mattress, Basic Side Table, Basic Crockery Unit, Basic Dining Table + Chairs
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'     fontFamily='Georgia, serif' >
                                         Services
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'    fontFamily='Georgia, serif' >
                                        
                                            Basic False Ceiling, Basic Wallpaper, Basic Curtains, Basic Painting, Basic Pooja Unit, Basic Wooden Flooring, Basic Tiling, Basic Shower Cubicle
                                        </Text>
                                         </GridItem>
                                      </Grid>
                                  </VStack>
                               </Box>
                             </Box>
                            
                        </Box>
                        <Box width='75%' textAlign='left'  >
                                     <Text>
                                     *This is only an indicative price based on our clients' average spends. The final price can be higher or lower depending on factors like finish material, number of furniture, civil work required (painting, flooring, plumbing, etc.), design elements, and wood type. Don't worry, our designers can help you understand this better.
                                     </Text>
                         </Box>
                         <Box  borderWidth='1px'  mt='1rem'  mb='1rem'  width='75%'  ></Box>
                         <Box width='75%' >
                            <Text  fontFamily='Georgia, serif' >
                            Compare the pricing with other packages
                            </Text>
                         </Box>

                         <Box width='80%'  mb='2rem'  >
                                  <VStack>
                                      <Image
                                        src= {essentials}
                                        rounded={"lg"}
                                      />
                                      <Grid   templateColumns  ='repeat(2, 1fr)'    width='100%'   >
                                          <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Essentials</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text color='green' fontWeight='500'  >₹9.53L*</Text>
                                         </GridItem>
                                      </Grid>
                                      <Box width='100%' fontFamily='Georgia, serif'  textAlign='left' >
                                        <Text fontFamily='Georgia, serif'  >
                                        A range of essential home interior solutions that's perfect for all your needs.
                                        </Text>
                                      </Box>
                                      <Grid   templateColumns  ='repeat(2, 1fr)'    width='100%'  rowGap='1rem'   >
                                          <GridItem textAlign='left' >
                                          <Text  fontFamily='Georgia, serif' >Type</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text    fontFamily='Georgia, serif' >1 BHK</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Rooms</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Living Room, Kitchen, Bedroom, Bathroom, Dining</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'   fontFamily='Georgia, serif' >Modular</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'   fontFamily='Georgia, serif' >
                                                  Modular Kitchen (MDF material, Matt Finish, Basic Accessories), Modular Wardrobe (2-Door Swing, MDF Material, Laminate finish, Basic Accessories), Basic Vanity Unit
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'  fontFamily='Georgia, serif' >
                                         Furniture
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'     fontFamily='Georgia, serif' >
                                         Basic Bed, Basic Mattress, Basic Side Table, Basic Crockery Unit, Basic Dining Table + Chairs
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'     fontFamily='Georgia, serif' >
                                         Services
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'    fontFamily='Georgia, serif' >
                                        
                                            Basic False Ceiling, Basic Wallpaper, Basic Curtains, Basic Painting, Basic Pooja Unit, Basic Wooden Flooring, Basic Tiling, Basic Shower Cubicle
                                        </Text>
                                         </GridItem>
                                      </Grid>
                                  </VStack>
                               </Box>
                               <Box width='80%' >
                                  <VStack>
                                      <Image
                                        src= {essentials}
                                        rounded={"lg"}
                                      />
                                      <Grid   templateColumns  ='repeat(2, 1fr)'    width='100%'   >
                                          <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Essentials</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text color='green' fontWeight='500'  >₹9.53L*</Text>
                                         </GridItem>
                                      </Grid>
                                      <Box width='100%' fontFamily='Georgia, serif'  textAlign='left' >
                                        <Text fontFamily='Georgia, serif'  >
                                        A range of essential home interior solutions that's perfect for all your needs.
                                        </Text>
                                      </Box>
                                      <Grid   templateColumns  ='repeat(2, 1fr)'    width='100%'  rowGap='1rem'   >
                                          <GridItem textAlign='left' >
                                          <Text  fontFamily='Georgia, serif' >Type</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text    fontFamily='Georgia, serif' >1 BHK</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Rooms</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  fontFamily='Georgia, serif' >Living Room, Kitchen, Bedroom, Bathroom, Dining</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'   fontFamily='Georgia, serif' >Modular</Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'   fontFamily='Georgia, serif' >
                                                  Modular Kitchen (MDF material, Matt Finish, Basic Accessories), Modular Wardrobe (2-Door Swing, MDF Material, Laminate finish, Basic Accessories), Basic Vanity Unit
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'  fontFamily='Georgia, serif' >
                                         Furniture
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'     fontFamily='Georgia, serif' >
                                         Basic Bed, Basic Mattress, Basic Side Table, Basic Crockery Unit, Basic Dining Table + Chairs
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'     fontFamily='Georgia, serif' >
                                         Services
                                        </Text>
                                         </GridItem>
                                         <GridItem textAlign='left' >
                                         <Text  textAlign='left'    fontFamily='Georgia, serif' >
                                        
                                            Basic False Ceiling, Basic Wallpaper, Basic Curtains, Basic Painting, Basic Pooja Unit, Basic Wooden Flooring, Basic Tiling, Basic Shower Cubicle
                                        </Text>
                                         </GridItem>
                                      </Grid>
                                  </VStack>
                               </Box>
                               <Box mt='2rem' >
                                 <Text fontFamily='Georgia, serif'>
                                 *This is only an indicative price based on our clients' average spends. The final price can be higher or lower depending on factors like finish material, number of furniture, civil work required (painting, flooring, plumbing, etc.), design elements, and wood type. Don't worry, our designers can help you understand this better.
                                 </Text>
                               </Box>
                   </Box>
             )}
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

  )
};


export default InteriorCalculator;
