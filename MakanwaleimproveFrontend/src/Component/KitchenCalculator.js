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
    chakra, 
    useToast ,
    useRadioGroup, 
    SimpleGrid,
    Tag,
    useCheckbox  , 
    useCheckboxGroup ,
    Grid ,
    GridItem ,
   } from '@chakra-ui/react';
   import { MinusIcon , AddIcon , CheckIcon }    from '@chakra-ui/icons'
   import essentials from './Images/essentials-desktop-1677569928-WCHBw.jpg'
   import premium from './Images/premium-desktop-1677569932-Tc87O.jpg'
   import luxury from './Images/luxe-desktop-1677569931-ZV4Be.jpg'
   import 'react-phone-number-input/style.css'
   import PhoneInput from 'react-phone-number-input'
   import { faBullseye } from '@fortawesome/free-solid-svg-icons';
   import lshape from './Images/l-shaped-d-1623057547-t6bt7.png'
   import straight from './Images/straight-d-1623057553-UjgVM.png'
   import ushape from './Images/u-shaped-d-1623057556-rUlPG.png'
   import parellel from './Images/parallel-d-1623057550-KAv73.png'
   import lshapekitchen from './Images/l-shaped-d-1623232075-1hVm4.png'
   import { Block } from '@mui/icons-material';
   import HDFHMR from './Images/hdf-hmr-d-1623395094-l6isE.png'
   import MDF from   './Images/mdf-d-1623395097-a6qXK.png'
   import MRPlywood from './Images/mr-plywood-d-1623395105-jFzZm.png'
   import BWRPlywood from './Images/bwr-plywood-d-1623395091-vyZZT.png'
   import BWPPlywood from './Images/bwp-ply-d-1623395088-YlUPj.png'
   import acrylic from './Images/acrylic-d-1623077487-bzsaZ.png'
   import laminate from './Images/laminate-d-1623077494-zxzmi.png'
   import membrane from './Images/membrane-d-1623077497-e8w0n.png'
   import pud from './Images/pu-d-1623077500-WdHRP.png'
   import basic from './Images/basic-d-1623078700-199cJ.png'
   import intermediate from './Images/intermediate-d-1623078708-Gb66J.png'
   import premium2 from './Images/premium-d-1623078711-rVgpU.png'
   import painting from  './Images/painting-d-1623079456-XV4qs.png'
   import plumbing from './Images/plumbing-d-1623079462-uTAXF.png'
   import electrical from './Images/electrical-d-1623079453-T8hHg.png'
   import platform from './Images/platform-d-1623079459-PcO1g.png'
   import dalo from './Images/dado-d-1623079451-wiObw.png'
   import hob from './Images/hob-d-1623080398-BOdOK.png'
   import chimney from './Images/chimney-d-1623080395-ePYy6.png'
   import faucetsink from './Images/sink-and-faucet-d-1623080404-Sd2mk.png'
   import builtinmicrowave from './Images/build-in-microwave-d-1623080389-2wZ5H.png'
   import builtinoven from './Images/build-in-oven-d-1623080392-Fa6Sd.png'
   import refriator from './Images/refrigerator-d-1623080401-BDUQw.png'
   import makanwale from './Images/MakanWale.png'
   import quizinterior from './Images/quiz_confirmation_d_v1_1.png'


 const KitchenCalculator = () => {
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
  const handleButton2Click = () => {
    setIndex(index + 2);
  };

  
  const handleSubmit = async (e) => {
    setIndex(index+1)
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
  
    try {
      const response = await fetch('http://localhost:3001/api/interior-calculator/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form data successfully submitted to the backend');
       
      } else {
        console.error('Failed to submit form data to the backend');
       
      }
    } catch (error) {
      console.error('Error submitting form data:', error);

    }
  };


  function CustomRadio(props) {
    const { image, named , ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          
          {...getRadioProps()}
          borderWidth='2px'
          borderColor={state.isChecked ? '#eb595f' : 'lightgrey'}
          p={1}

        >
          <Image src={image}   width='300px'  height='200px'  {...getLabelProps()} />
          <Box>
             <Text  padding = '5px' >{named}</Text>
          </Box>
        </Box>
      </chakra.label>
    )
  }


  function CustomRadio2(props) {
    const { image ,Heading,Subheading,Price ,ProTip , ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          width={["290px" , "320px"]}
          {...getRadioProps()}
          borderWidth='2px'
          borderColor={state.isChecked ? '#eb595f' : 'lightgrey'}
          bgColor={state.isChecked ? 'f18b8f' : 'white'}
          p={1}
          textAlign='left'
          marginBottom='10px'

        >
          <VStack  >
               <HStack   alignItems="flex-start"  spacing='10px'   >
                  <Flex     borderColor={state.isChecked ? '#eb595f' : 'lightgrey'} borderWidth='5px'  borderRadius='50%'  height='20px' width='20px'  marginTop='5px'     ></Flex>
                  <Box display='block' textAlign='left'   >
                       <Text fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >{Heading}</Text>
                       <Text fontSize='0.9rem' fontFamily='Georgia, serif'  >{Subheading}</Text>
                  </Box>
               </HStack>
          
          <Image src={image}  borderRadius='5px'   width='90%'  height='200px'  {...getLabelProps()} />
         
             <HStack  width='90%'  spacing='60px'  >
                <Text fontSize='0.9rem' fontFamily='Georgia, serif'  >Price</Text>
                <Text fontSize='0.9rem' >:&nbsp;{Price}</Text>
             </HStack>
             <HStack   alignItems="flex-start"  width='90%'  spacing='50px'  >
                <Text fontSize='0.9rem' fontFamily='Georgia, serif'  >ProTip</Text>
                <Text fontSize='0.9rem'  fontFamily='Georgia, serif' >:&nbsp;{ProTip}</Text>
             </HStack>
          </VStack>
         
        </Box>
      </chakra.label>
    )
  }



  function CustomRadio3(props) {
    const { image ,Heading,Subheading,Price ,ProTip , ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          width={["290px" , "320px"]}
          {...getRadioProps()}
          borderWidth='2px'
          borderColor={state.isChecked ? '#eb595f' : 'lightgrey'}
          bgColor={state.isChecked ? 'f18b8f' : 'white'}
          p={1}
          textAlign='left'
          marginBottom='10px'

        >
          <VStack  >
               <HStack   alignItems="flex-start"  spacing='10px'   >
                  <Flex     borderColor={state.isChecked ? '#eb595f' : 'lightgrey'} borderWidth='5px'  borderRadius='50%'  height='20px' width='20px'  marginTop='5px'     ></Flex>
                  <Box display='block' textAlign='left'   >
                       <Text fontSize='1rem' >{Heading}</Text>
                       <Text fontSize='0.9rem' >{Subheading}</Text>
                  </Box>
               </HStack>
          
          <Image src={image}  borderRadius='5px'   width='90%'  height='200px'  {...getLabelProps()} />
         
             <HStack  width='90%'  spacing='60px'  >
                <Text fontSize='0.9rem' >Price</Text>
                <Text fontSize='0.9rem' >:&nbsp;{Price}</Text>
             </HStack>
             <HStack   alignItems="flex-start"  width='90%'  spacing='50px'  >
                <Text fontSize='0.9rem' >ProTip</Text>
                <Text fontSize='0.9rem' >:&nbsp;{ProTip}</Text>
             </HStack>
          </VStack>
         
        </Box>
      </chakra.label>
    )
  }


  function CustomRadio4(props) {
    const { image ,Heading,Subheading,Price ,ProTip , ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          width={["290px" , "320px"]}
          {...getRadioProps()}
          borderWidth='2px'
          borderColor={state.isChecked ? '#eb595f' : 'lightgrey'}
          bgColor={state.isChecked ? 'f18b8f' : 'white'}
          p={1}
          textAlign='left'
          marginBottom='10px'

        >
          <VStack  >
               <HStack   alignItems="flex-start"  spacing='10px'   >
                  <Flex     borderColor={state.isChecked ? '#eb595f' : 'lightgrey'} borderWidth='5px'  borderRadius='50%'  height='20px' width='20px'  marginTop='5px'     ></Flex>
                  <Box display='block' textAlign='left'   >
                       <Text fontSize='1rem' >{Heading}</Text>
                       <Text fontSize='0.9rem' >{Subheading}</Text>
                  </Box>
               </HStack>
          
          <Image src={image}  borderRadius='5px'   width='90%'  height='200px'  {...getLabelProps()} />
         
             <HStack  width='90%'  spacing='60px'  >
                <Text fontSize='0.9rem' >Price</Text>
                <Text fontSize='0.9rem' >:&nbsp;{Price}</Text>
             </HStack>
             <HStack   alignItems="flex-start"  width='90%'  spacing='50px'  >
                <Text fontSize='0.9rem' >ProTip</Text>
                <Text fontSize='0.9rem' >:&nbsp;{ProTip}</Text>
             </HStack>
          </VStack>
         
        </Box>
      </chakra.label>
    )
  }





  const toast = useToast()

  const avatars = [
    { name: 'L-shaped', image: lshape },
    { name: 'Straight', image: straight },
    { name: 'U-Shaped', image: ushape },
    { name: 'Parellel', image: parellel },
  ]
  const avatars2 = [
    {Heading: 'HDFHMR',   Subheading : "Has high strength and density, and a solid screw-holding capacity." , image: HDFHMR ,Price : '₹₹₹'  , ProTip :'Makes for a good choice as it has load-bearing capacity at a lower cost.'  },
    {Heading: 'MDF',   Subheading : "Is seamless, free of knots, and has high resistance for wear & tear." , image: MDF ,Price : '₹₹₹'  , ProTip :'Ideal for cabinets because of their smooth, seamless surface.' },
    {Heading: 'MR Plywood',   Subheading : "is moisture and termite resistant and does not wear off easily." , image: MRPlywood ,Price : '₹₹₹'  , ProTip :'Works well if you are on a budget and looking for a durable material.' },
    {Heading: 'BWR Plywood',   Subheading : "Is water resistant and works well in areas prone to water exposure." , image: BWRPlywood ,Price : '₹₹₹'  , ProTip :'Pick this if you don’t want to be worried about frequent exposure to water.'},
    {Heading: 'BWP Plywood',   Subheading : "Is waterproof and withstands prolonged exposure to water and moisture." , image: BWPPlywood ,Price : '₹₹₹'  , ProTip :'Looking for a waterproof material? Then consider this one!'},
  ]

  const avatars3= [
    {Heading: 'Matte Laminate',   Subheading : "Is a smooth, durable finish which gives a clean and rich look." , image: laminate ,Price : '₹₹₹'  , ProTip :'Going for that muted, smooth look for your kitchen? This one’s for you.'  },
    {Heading: 'HGL Laminate',   Subheading : "Is glossy with solid colours that uplifts a space with its shiny finish." , image: laminate ,Price : '₹₹₹'  , ProTip :'Always wanted magazine-like glossy kitchen cabinets? Choose this!' },
    {Heading: 'Matte Membrane',   Subheading : "Comes with a smooth surface and has better grooving ability." , image: membrane ,Price : '₹₹₹'  , ProTip :'Go for this if you want a seamless finish that sits well in any kind of kitchen.' },
    {Heading: 'HGL Membrane',   Subheading : "Has a lustrous surface that enhances your modular kitchen." , image: membrane,Price : '₹₹₹'  , ProTip :'Want those strong, shiny cabinets with a pop of colour? Consider this!'},
    {Heading: 'Anti-scratch Acrylic',   Subheading : "Is an elegant, reflective, glossy finish that is scratch resistant." , image: acrylic,Price : '₹₹₹'  , ProTip :'Dreaming of a chic kitchen with a touch of luxury? Go for this one.'},
    {Heading: 'Glossy PU',   Subheading : "Comes with a slick look, high durability, and a polished finish." , image: pud ,Price : '₹₹₹'  , ProTip :'Consider this if you want mirror-like cabinets that are easy to clean!'},
  ]

  const avatars4= [
    {Heading: 'Basic',   Subheading : "A basic range of accessories usually required to get your ideal kitchen started." , image: basic ,Price : '₹₹₹'  , ProTip :'Consider this if you need basic units within a budget for a comfortable cooking experience.'  },
    {Heading: 'Intermediate',   Subheading : "A fine range of fittings, cabinets, and more for a smooth culinary experience." , image: intermediate ,Price : '₹₹₹'  , ProTip :'Pick this if you experiment with cooking and need more units to ease your time in the kitchen.' },
    {Heading: 'Premium',   Subheading : "A showstopper kitchen with an exclusive range you were always looking for." , image: premium2 ,Price : '₹₹₹'  , ProTip :"If you are a passionate cook who needs an exclusive range of accessories, this one's for you." },
   
  ]
  const avatars5= [
    {Heading: 'Painting' ,image: painting  },
    {Heading: 'Plumbing',   image:  plumbing },
    {Heading: 'Electrical',  image: electrical },
    {Heading: 'Platform',  image: platform },
    {Heading: 'Dado',  image: dalo },
   
  ]

  const avatars6= [
    {Heading: 'Hob' ,image: hob  },
    {Heading: 'Chimney',   image:  chimney },
    {Heading: 'Faucets & Sink',  image: faucetsink },
    {Heading: 'Built-in Microwave',  image: builtinmicrowave },
    {Heading: 'Bult-in Oven',  image: builtinoven },
    {Heading: 'Refrigerator',  image: refriator },
   
  ]

  const handleChanges = (value) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: 'success',
      duration: 2000,
    })
  }

  const handleChanges2 = (value2) => {
    toast({
      title: `The value got changed to ${value2}!`,
      status: 'success',
      duration: 2000,
    })
  }

  const handleChanges3 = (value3) => {
    toast({
      title: `The value got changed to ${value3}!`,
      status: 'success',
      duration: 2000,
    })
  }
  const handleChanges4 = (value4) => {
    toast({
      title: `The value got changed to ${value4}!`,
      status: 'success',
      duration: 2000,
    })
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'L-shaped',
    onChange: handleChanges,
  })

  const { value : value2, getRadioProps: getRadioProps2 , getRootProps : getRootProps2 } = useRadioGroup({
    defaultValue: 'HDFHMR',
    onChange: handleChanges2,
  })

  const { value : value3, getRadioProps: getRadioProps3 , getRootProps : getRootProps3 } = useRadioGroup({
    defaultValue: 'Matte Laminate',
    onChange: handleChanges3
    ,
  })
  const { value : value4, getRadioProps: getRadioProps4 , getRootProps : getRootProps4 } = useRadioGroup({
    defaultValue: 'Basic',
    onChange: handleChanges4
    ,
  })

  function CustomCheckbox( props) {
    const {image , Heading} = props
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

    return (
      <chakra.label
        display='flex'
        flexDirection='column'
        alignItems='center'
        gridColumnGap={2}
        width='260px'
        border='2px solid'
        borderColor={state.isChecked ?  '#eb595f' : 'whitesmoke'  }
      
        cursor='pointer'
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex  position="relative"   {...getCheckboxProps()}  >
  <Image     {...getCheckboxProps()}   src={image}    />
  <Flex
    alignItems="center"
    justifyContent="center"
    border="2px solid"
    borderColor="red"
    position='absolute'
    height='1rem'
    width='1rem'
    top = '8px'
    right = '8px'
    bg="white"
    {...getCheckboxProps()}
  
  >
    {state.isChecked && <Box w={2} h={2} bg="green.500" />}
  </Flex>
</Flex>
     <Box    {...getCheckboxProps()} justifyContent='center' alignItems='center'  width='100%'   >
            <Text  padding='5px' >{Heading}</Text>
     </Box> 
      </chakra.label>
    )
  }
  const { value : value5, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['Painting'],
   // onChange : {handleChanges5}
  })

  const img = painting

  const avatars7= [
    { name: 'Yes'},
    { name: 'No'},
  ]

  const avatars8= [
    { name: 'Yes'},
    { name: 'No'},
  ]

  function CustomRadio7(props) {
    const { image, named , ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          
          {...getRadioProps()}
          borderWidth='2px'
          borderColor={state.isChecked ? '#eb595f' : 'lightgrey'}
          p={1}
 
          alignItems='flex-start'

        >
            <HStack width='100%'   >
               <Box    borderColor={state.isChecked ? '#eb595f' : 'lightgrey'} width='1rem' height='1rem'  borderRadius='50%'  borderWidth='.3rem'  ></Box>
               <Text>{named}</Text>
            </HStack>
            
         
        </Box>
      </chakra.label>
    )
  }

  function CustomRadio8(props) {
    const { image, named , ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Box
          
          {...getRadioProps()}
          borderWidth='2px'
          borderColor={state.isChecked ? '#eb595f' : 'lightgrey'}
          p={1}
 
          alignItems='flex-start'

        >
            <HStack width='100%'   >
               <Box    borderColor={state.isChecked ? '#eb595f' : 'lightgrey'} width='1rem' height='1rem'  borderRadius='50%'  borderWidth='.3rem'  ></Box>
               <Text>{named}</Text>
            </HStack>
            
         
        </Box>
      </chakra.label>
    )
  }


  const { value: value7, getRadioProps : getRadioProps7, getRootProps:getRootProps7 } = useRadioGroup({
    defaultValue: 'Yes',
    onChange: handleChanges,
  })

  const { value: value8, getRadioProps : getRadioProps8, getRootProps:getRootProps8 } = useRadioGroup({
    defaultValue: 'Yes',
    onChange: handleChanges,
  })

  const handleChanges7 = (value7) => {
    toast({
      title: `The value got changed to ${value7}!`,
      status: 'success',
      duration: 2000,
    })
  }
  const handleChanges8 = (value7) => {
    toast({
      title: `The value got changed to ${value7}!`,
      status: 'success',
      duration: 2000,
    })
  }


  return (
   

          <Flex    align="center" justify="center"     minH='100vh'   flexDirection='column'     >
           <Box  width={isBelow720px ? '90%' : '75%' }   justify = 'center' align='center'  mb='2rem'  >  
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
        <Box   w={`${distance+50}px`} justifyContent='space-between' display='flex' mt='.5rem'  >
          <Text fontSize={['.6rem']} >KITCHEN LAYOUT</Text>
          <Text fontSize={['.6rem']} >MEASUREMENTS</Text>
          <Text fontSize={['.6rem']} >PACKAGE</Text>
          <Text fontSize={['.6rem']} >GET QUOTE</Text>
        </Box>
             { index=== 0 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '80%'  , '100%'  ,'75%'  ]}      marginTop='50px'    >
                  <Box 
                    padding='30px' 
                    width= {["100%" ,  "100%", "100%" , "80%" , "90%" , "100%" ]}  
                    display='block'  justifyContent='space-between'  mt='50px'  zIndex='1000'    borderWidth='1px' 
                    boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      >
                          <Box  marginBottom='1rem' >
                          <Text fontSize='1.5rem'  fontWeight='400' fontFamily='Georgia, serif' >
                          Select the layout of your kitchen
                          </Text>
                       </Box>
                    <SimpleGrid minChildWidth='180px' columnGap={5} justify="center" align="center"  rowGap={5}   >
  {avatars.map((avatar, index) => {
    if (index === 3) {
      return (
        <CustomRadio
          key={avatar.name}
          named = {avatar.name}
          image={avatar.image}
          // gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
          {...getRadioProps({ value: avatar.name })}
        />
      );
    } else {
      return (
        <CustomRadio
          key={avatar.name}
          named = {avatar.name}
          image={avatar.image}
          {...getRadioProps({ value: avatar.name })}
        />
      );
    }
  })}
</SimpleGrid>
                 <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>

                  </Box>
                  
             )}

             { index=== 1 &&  ( 
                  <Box  justifyContent='center'  alignItems='center'  marginTop='20px' paddingTop = '2rem' paddingBottom='2rem'  marginBottom='2rem'    boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  >
                       <Box>
                          <Text fontSize='1.5rem'  fontWeight='400' fontFamily='Georgia, serif' >
                          Now review the measurements for accuracy
                          </Text>
                       </Box>
                       <Image
                          w='16rem'
                          src = {lshapekitchen}
                          marginTop='20px'
                       />
                       <Tag bgColor='#f9e8bd' marginTop='20px'  width='16rem'  >Standard size has been set for your convenience</Tag>
                       <Box    justifyContent='center'  alignItems='center'  marginTop='20px'  >
                           <HStack  width='16rem' >
                              <Text>A</Text>
                              <Select placeholder='Select option' >
                                        <option value='option1'>3</option>
                                        <option value='option2'>4</option>
                                        <option value='option3'>5</option>
                                        <option value='option3'>6</option>
                                        <option value='option3'>7</option>
                                        <option value='option3'>8</option>
                                        <option value='option3'>9</option>
                                        <option value='option3'>10</option>
                                        <option value='option3'>11</option>
                                        <option value='option3'>12</option>
                               </Select>
                              <Text>ft</Text>
                           </HStack>
                           <HStack  width='16rem'marginTop='20px'  >
                              <Text>B</Text>
                              <Select placeholder='Select option'  >
                              <option value='option1'>3</option>
                                        <option value='option2'>4</option>
                                        <option value='option3'>5</option>
                                        <option value='option3'>6</option>
                                        <option value='option3'>7</option>
                                        <option value='option3'>8</option>
                                        <option value='option3'>9</option>
                                        <option value='option3'>10</option>
                                        <option value='option3'>11</option>
                                        <option value='option3'>12</option>
                            </Select>
                              <Text>ft</Text>
                           </HStack>
                           <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button ml='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  mr='1rem'   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                       </Box>
                    
                  </Box>
             )}
             { index=== 2 &&  ( 
                  <Box         flexDirection='column'     marginTop='50px'   boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"    >
                       <Box paddingTop='2rem'    marginBottom='2rem' >
                          <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Pick your package</Text>
                       </Box>
                      <Box    w= {[ "100%" , "100%" , "100%" ,  "100%" , "40%" ,  "40%" ]}  marginBottom='50px'    >
                      <RadioGroup    defaultValue= {formData.package}      >
                        <Stack direction='column'>
                         <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio  value='0'  size='lg'   name="package"   onChange={handleInputChange}  >
    
                                <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Essentials (₹₹)</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text  fontSize='0.9rem' >A range of essential home interior solutions that's perfect for all your needs.</Text>
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
                                 <HStack  spacing = '1rem' width='100%'  >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Affordable Pricing</Text>
                                 </HStack>
                                 <HStack  spacing = '1rem' width='100%' >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Convenient design</Text>
                                 </HStack>
                                 <HStack  spacing = '1rem' width='100%' >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Basic Accesories</Text>
                                 </HStack>
                             </Container>
                          </Box>   


                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='1'  size='lg'    name="package"   onChange={handleInputChange}  >
    
                                <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Premium (₹₹₹)</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text  fontSize='0.9rem' >Superior home interior solutions that will take your interiors to the next level.</Text>
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
                                 <HStack spacing = '1rem' width='100%'    >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Mid-range pricing</Text>
                                 </HStack>
                                 <HStack  spacing = '1rem' width='100%' >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Premium designs</Text>
                                 </HStack>
                                 <HStack  spacing = '1rem' width='100%' >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Wide range of accessories</Text>
                                 </HStack>
                             </Container>
                          </Box>   


                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='2'  size='lg'   name="package"   onChange={handleInputChange}   >
    
                                <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Luxe (₹₹₹₹)</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text fontSize='0.9rem' >High-end interior solutions for the ultimate home interior experience you deserve.</Text>
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
                                 <HStack  spacing = '1rem' width='100%'  >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Elite pricing</Text>
                                 </HStack>
                                 <HStack  spacing = '1rem' width='100%'  >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Lavish designs</Text>
                                 </HStack>
                                 <HStack  spacing = '1rem' width='100%'  >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Extensive range of accessories</Text>
                                 </HStack>
                             </Container>
                          </Box>   

                          <Box    w = {[ "100%" , "100%" , "100%" ,  "100%" , "100%" ,  "100%" ]}    borderWidth='1px' textAlign='left'    borderRadius='10px'    >
                             <Radio   value='2'  size='lg'   name="package"   onChange={handleInputChange}   >
    
                                <Text fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Build your own package</Text>
                             </Radio>
                             <Container width='93%'  >
                             <Text  fontSize='0.9rem' >A flexible, built-to-suit option that lets you pick and choose from a collection of well-crafted finishes and accessories.</Text>
                             </Container>
                             <Container     width='100%' marginTop='10px'  >
                                 <HStack spacing = '1rem' width='100%' >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Customised pricing</Text>
                                 </HStack>
                                 <HStack spacing = '1rem' width='100%' >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Flexible designs</Text>
                                 </HStack>
                                 <HStack spacing = '1rem' width='100%'  >
                                    <CheckIcon color='green' />
                                    <Text fontSize='0.9rem' >Range of accessories to pick from</Text>
                                 </HStack>
                             </Container>
                          </Box>   


                        </Stack>
                      </RadioGroup>
                      </Box>
                      <Box width='100%' borderWidth='1px'  marginTop='20px'  ></Box>
                    <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button ml='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  mr='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButton2Click}>Next</Button>
                  </Box>      
                  </Box>
             )}

            { index=== 4 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '95%'  , '60%'  ,'75%'  ]}      marginTop='50px'   justifyContent='center'  alignItems='center'  boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"   >
                    <Box  pt='1.5rem' marginBottom='1.5rem'  >
                       <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >
                         Materials for cabinets and shutters. Take your pick.
                       </Text>
                       <Text fontSize='1rem' >
                       Want to know more. Check here
                       </Text>
                    </Box>
                    <Box  display='block' >
                    {avatars2.map((avatar, index) => {
                       return (
                         <CustomRadio2
                          key={avatar.Heading}
                          Heading = {avatar.Heading}
                          Subheading = {avatar.Subheading}
                           image={avatar.image}
                           Price = {avatar.Price}
                           ProTip = {avatar.ProTip}
                          //  gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
                          {...getRadioProps2({ value: avatar.Heading })}
                           />
                             
                           )
                        })}
                      </Box>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button ml='1rem'   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button mr='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}
              { index=== 5 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '60%'  , '60%'  ,'75%'  ]}      marginTop='50px'    >
                  <Box 
                    padding='30px' 
                    width= {["100%" ,  "100%", "100%" , "50%" , "50%" , "100%" ]}  
                    display='block'  justifyContent='space-between'  mt='50px'  zIndex='1000'    borderWidth='1px'  
                    boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
                     >
                    <SimpleGrid columns={1}justify="center" align="center"  rowGap={5}   width={["250px" , "280px" , "375px"]}  >
  {avatars7.map((avatar, index) => {
    if (index === 3) {
      return (
        <CustomRadio7
          key={avatar.name}
          named = {avatar.name}
        //   gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
          {...getRadioProps7({ value: avatar.name })}
        />
      );
    } else {
      return (
        <CustomRadio7
          key={avatar.name}
          named = {avatar.name}
 
          {...getRadioProps({ value: avatar.name })}
        />
      );
    }
  })}
</SimpleGrid>
                  </Box>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}

{ index=== 6 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '60%'  , '60%'  ,'75%'  ]}      marginTop='50px'    >
                  <Box 
                    padding='30px' 
                    width= {["100%" ,  "100%", "100%" , "50%" , "50%" , "100%" ]}  
                    display='block'  justifyContent='space-between'  mt='50px'  zIndex='1000'    borderWidth='1px'  
                    boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
                     >
                    <SimpleGrid columns={1}justify="center" align="center"  rowGap={5}   width={["250px" , "280px" , "375px"]}  >
  {avatars8.map((avatar, index) => {
    if (index === 3) {
      return (
        <CustomRadio8
          key={avatar.name}
          named = {avatar.name}
        //   gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
          {...getRadioProps7({ value: avatar.name })}
        />
      );
    } else {
      return (
        <CustomRadio8
          key={avatar.name}
          named = {avatar.name}
 
          {...getRadioProps8({ value: avatar.name })}
        />
      );
    }
  })}
</SimpleGrid>
                  </Box>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}

{ index=== 7 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '60%'  , '60%'  ,'75%'  ]}      marginTop='50px'   justifyContent='center'  alignItems='center'  boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"   >
                    <Box paddingTop='1.5rem' mb='2rem'  >
                       <Text fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Pick a finish for base & wall cabinets</Text>
                    </Box>
                    <Box  display='block' >
                    {avatars3.map((avatar, index) => {
                       return (
                         <CustomRadio3
                          key={avatar.Heading}
                          Heading = {avatar.Heading}
                          Subheading = {avatar.Subheading}
                           image={avatar.image}
                           Price = {avatar.Price}
                           ProTip = {avatar.ProTip}
                          //  gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
                          {...getRadioProps3({ value: avatar.Heading })}
                           />
                             
                           )
                        })}
                      </Box>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button ml='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  mr='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}

{ index=== 8 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '60%'  , '60%'  ,'75%'  ]}      marginTop='50px'   justifyContent='center'  alignItems='center'  boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  >
                   <Box paddingTop='1.5rem' mb='2rem' >
                     <Text fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >
                       Now choose the accessories for your kitchen.
                     </Text>
                   </Box>
                    <Box  display='block' >
                    {avatars4.map((avatar, index) => {
                       return (
                         <CustomRadio4
                          key={avatar.Heading}
                          Heading = {avatar.Heading}
                          Subheading = {avatar.Subheading}
                           image={avatar.image}
                           Price = {avatar.Price}
                           ProTip = {avatar.ProTip}
                          //  gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
                          {...getRadioProps4({ value: avatar.Heading })}
                           />
                             
                           )
                        })}
                      </Box>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  marginBottom='2rem'  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button  ml='1rem'  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  mr='1rem' bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}

{ index=== 9 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '60%'  , '80%'  ,'80%'  ]}      marginTop='50px'   justifyContent='center'  alignItems='center' boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"    >
                  
                  <Box paddingTop='1.5rem' mb='2rem' >
                     <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >
                        Select the on-site services you would require.
                     </Text>
                     <Text>
                       Want to know more. Check here
                     </Text>
                  </Box>
                  <SimpleGrid  minChildWidth='280px' rowGap='5px'    placeItems='center' >
                  {avatars5.map((avatar, index) => {
                       return (
                         <CustomCheckbox
                          key={avatar.Heading}
                          Heading = {avatar.Heading}
                           image={avatar.image}
                          //  gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
                          {...getCheckboxProps({ value: avatar.Heading })}
                           />
                             
                           )
                        })}
                  </SimpleGrid>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}
             { index=== 10 &&  ( 
              <Box width=  {["100%" ,  "100%", "100%" , '90%'  , '95%'  ,'80%'  ]}      marginTop='50px'   justifyContent='center'  alignItems='center'  boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  >
                  <Box paddingTop='1.5rem' mb='2rem' >
                     <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >
                     Here come the appliances. Your pick?
                     </Text>
                  </Box>
                
                  <SimpleGrid  minChildWidth='260px' rowGap='5px'    placeItems='center'  >
                  {avatars6.map((avatar, index) => {
                       return (
                         <CustomCheckbox
                          key={avatar.Heading}
                          Heading = {avatar.Heading}
                           image={avatar.image}
                          //  gridColumn="2 / span 1" // This will position the fourth item in the center of the second column
                          {...getCheckboxProps({ value: avatar.Heading })}
                           />
                             
                           )
                        })}
                  </SimpleGrid>
                  <Box width='100%' borderWidth='1px'  marginTop='60px'  ></Box>
                  <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='50px'   >
                      <Button   bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}  onClick={handleButtonClick} isDisabled >Back</Button>
                      <Button  bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}   onClick={handleButtonClick}>Next</Button>
                  </Box>   
                  </Box>
                  
             )}

             { index=== 11 &&  ( 
                  <Box alignItems='center' justifyContent='center'  flexDirection='column' marginTop='20px'   boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"   >
                     <Box paddingTop='1.5rem' mb='2rem' >
                        <Text  fontSize='1.3rem'  fontWeight='400' fontFamily='Georgia, serif' >Your estimate is almost ready</Text>
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
                      <Checkbox defaultChecked
  
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
                    <Box  width='100%' display='flex' justifyContent='space-between'  marginTop='30px'   >
                      <Button   bgColor=  '#eb595f'   color='white'    _hover={{bgColor : '#eb595f'}}  onClick={handleSubmit}>Back</Button>
                      <Button    bgColor=  '#eb595f'  color='white' _hover={{bgColor : '#eb595f'}}    type='submit'    onClick={handleSubmit}>Get My Estimate</Button>
                  </Box>   
                  </Box>
             )}

{ index === 12 && (
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


export default KitchenCalculator;
