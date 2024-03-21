import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button  ,  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Input , 
  Select , 
  Checkbox, 
  Stack, 
  useMediaQuery ,
  Textarea ,
  Link ,
  

} from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import makanwale from './Images/MakanWale.png'
// import '@fortawesome/fontawesome-free/css/all.css';


const Contact_us = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)"); 
  const commonProps = {
     mt: '70px',
     // Add any other common props here
   };
   const [isNameError, setIsNameError] = useState(false);
   const [isEmailError, setIsEmailError] = useState(false);
   const [isMobileError, setIsMobileError] = useState(false);
   const [isLocationError, setIsLocationError] = useState(false);
   const [isCityError, setIsCityError] = useState(false);
   const [isStateError, setIsStateError] = useState(false);
   const [isCheckError, setIsCheckError] = useState(false);
   const [isSubmit, setIsSubmit] = useState(false);
   const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location : '' ,
    city: '',
    state: '',
    category: 'Construction',
    message: '',
    acceptTerms: false,
  });
   const gridProps = isBelow720px ?{flexDirection: 'column' } : {flexDirection : 'row'}
   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if(name === 'acceptTerms'){
      setIsCheckError(value.trim() === false)
    }

    if(name ==='name'   )
    {
      setIsNameError(value.trim() === '');
    }
    if( name === 'mobile' ){
        setIsMobileError(value.trim() === '')
    }
   if( name === 'city' ){
      setIsCityError(value.trim() === '')
  }
   if( name === 'state' ){
    setIsStateError(value.trim() === '')
   }
  if( name === 'location' ){
      setIsLocationError(value.trim() === '')
    }
     if( name === 'email' ){
      setIsEmailError(value.trim() === '')
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim() === ''   || formData.mobile.trim() === '' || formData.email.trim() === '' || formData.location.trim() === '' || formData.city.trim() === '' || formData.state.trim() === ''   || formData.acceptTerms === false   ) {
      // Set error states for required fields
      setIsNameError(formData.name.trim() === ''  );
      setIsMobileError(formData.mobile.trim() === ''  );
      setIsEmailError(formData.email.trim() === ''  );
      setIsLocationError(formData.location.trim() === ''  );
      setIsCityError(formData.city.trim() === ''  );
      setIsStateError(formData.state.trim() === ''  );
      setIsCheckError(formData.acceptTerms === false)
      // Set error states for other required fields if needed
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/api/contact/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form data successfully submitted to the backend');
        setIsSubmit(true)
        // You can handle successful form submission, e.g., redirect the user or show a success message
      } else {
        console.error('Failed to submit form data to the backend');
        // You can handle failed form submission, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      // You can handle other errors, e.g., show a generic error message to the user
    }
  };


 
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     minHeight="100vh"
    //  width={['320px' , '375px' , '425px' , '768px' , '1024px' , '1530px' , '2660px']}
    width='100%'
     flexDirection="column"
   >
          <Box>
     <Text   fontSize='2.5rem' fontWeight='400' fontFamily='Georgia, serif'  >
        Contact Form
     </Text>
     </Box>
     <Box  bgColor =  '#fff1eb91'  w= {['90%' , '90%' , '90%' , '75%px' , '75%' , '75%px' , '75%']}      align="center"justify="center"  borderRadius='20px'   >
     <FormControl marginTop='30px'  >
     <VStack spacing='20px' >
          <Stack  width='90%'  direction= {isBelow720px ? 'column' : 'row'} spacing='20px'  >
          <Input
           type='Name' 
           placeholder='Name *' 
           name='name'
           value={formData.name}
           onChange={handleChange}
           isRequired={true}
           isInvalid={isNameError}
          />
          
            
          <Input 
           placeholder='Mobile *'  
           name='mobile'
           value={formData.mobile}
           onChange={handleChange}
           isRequired= {true}
           isInvalid = {isMobileError}
            />
          </Stack>
          <Stack width='90%'  direction= {isBelow720px ? 'column' : 'row' } spacing='20px' >
          <Input
           type='email'
           name = 'email'
           placeholder='email *' 
           value = {formData.email} 
           onChange={handleChange}
           isRequired= {true}
           isInvalid = {isEmailError}
             />
          <Input  
           placeholder='Location *'  
           name = 'location'
           value = {formData.location}
           onChange={handleChange}
           isRequired= {true}
           isInvalid = {isLocationError}
           />
          </Stack>
          <Stack  width='90%' direction= {isBelow720px ? 'column' : 'row'} spacing='20px' >
          <Input 
          placeholder='City *'  
          name = "city"
          value={formData.city}
          onChange={handleChange}
          isRequired= {true}
          isInvalid = {isCityError}
           />
          <Input 
          placeholder='State *' 
          name = 'state'
          value={formData.state}
          onChange={handleChange}
          isRequired= {true}
          isInvalid = {isStateError}
            />
          </Stack>
          <Select
           width='90%'
           name = 'category'
           value = {formData.category}
           onChange={handleChange}
           isRequired= {true}
            >
        <option>Construction</option>
        <option>Interior Design</option>
        <option>Renovation</option>
        <option>Architecture</option>
        </Select>
        <Textarea
               placeholder="Enter text"
               height="150px" // Set the desired height here
               width='90%'
               name='message'
                value={formData.message}
                onChange={handleChange}
               />
         {isSubmit && (
            <Box>
               <Text color='green' >Query posted successfully. Our Team will get back you shortly.</Text>
            </Box>
         )}      
         <HStack      alignItems='flex-start'   >
        <Checkbox  
          //  defaultChecked
           name='acceptTerms'
           checked={formData.acceptTerms}
           onChange={handleChange}
           isRequired= {true}
           isInvalid = {isCheckError}
         ></Checkbox>
        <Box  textAlign='left'   >
        <Text  >
              I accept the T&C of Buildhood. I am aware and understand that I will be contacted by representative of Buildhood company listed on the website via Calls, SMS OR Email with respected to marketing of its products & Services.
        </Text>
        </Box>
        </HStack>
        <Button type="submit" bgColor="orange" color="white"   _hover={{bgColor : 'orange'}} mb='1.5rem'   onClick={handleSubmit} >Submit</Button>      
           </VStack>     
     </FormControl>
     </Box>
     <Box justify = 'center' align = 'center'    w= {['90%' , '90%' , '90%' , '75%px' , '75%' , '75%px' , '75%']}  marginTop='1rem'  >
          <Stack    direction=  {isBelow720px ? 'column' : 'row'}    mt='20px'   align = {isBelow720px ? 'center' : 'left'}    justify =  {isBelow720px ? 'center' : 'left'}   >
               <Box  display={isBelow720px ? 'flex' : 'flex'}      w= {['90%' , '90%' , '90%' , '75%px' , '75%' , '75%px' , '75%']}   >
                    <Box     >
                  <i className="fas fa-phone" style={{ fontSize: "2rem", color: 'orange' }}></i>
                    </Box>
                  <Box   textAlign='left'    ml='20px'  >
                    <Text fontSize='1.5rem' >Call Us</Text>
                    <Text fontSize='1.1rem'  >+45 78 9754433</Text>
                    {/* Your other components or content */}
               </Box>     
               </Box>
               <Box display={isBelow720px ? 'flex' : 'flex'}        w= {['90%' , '90%' , '90%' , '75%px' , '75%' , '75%px' , '75%']}  >
               <Box   >     
               <i className="fas fa-envelope" style={{ fontSize: "35px", color: 'orange' }}></i>
               </Box>
                   <Box   textAlign='left' ml='20px'   >
                    <Text fontSize='1.5rem'>Email</Text>
                    <Text fontSize='1.1rem' >enquiry@buildhood.com</Text>
                    <Text fontSize='1.1rem' >sales@buildhood.com</Text>
                    <Text fontSize='1.1rem' >careers@buildhood.com</Text>
                    </Box> 
                    {/* Your other components or content */}
               </Box>
               <Box display={isBelow720px ? 'flex' : 'flex'}      w= {['90%' , '90%' , '90%' , '75%px' , '75%' , '75%px' , '75%']}  >
               <Box    >     
               <i className="fas fa-map-marker" style={{ fontSize: "35px", color: 'orange' }}></i>
               </Box>
                   <Box   textAlign='left'  ml='20px'  >
                    <Text   fontSize='1.5rem'>Location</Text>
                    <Text fontSize='1.1rem'  >#107, First Floor, Brigade Arcade</Text>
                    <Text fontSize='1.1rem' >building, Brigade Metropolis,</Text>
                    <Text fontSize='1.1rem' >Garudacharpalya, Whitefield Road,</Text>
                    <Text  fontSize='1.1rem' >Bengaluru, Pincode- 560048</Text>
                    </Box> 
                    {/* Your other components or content */}
               </Box>
          </Stack>     
          </Box>
          <Button width='200px'  mb='1rem'     mt='30px'  bgColor='orange'>Build</Button>
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
  );
};

export default Contact_us;
