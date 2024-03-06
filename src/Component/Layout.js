// src/components/Layout.js
import React, { useContext, useState, useEffect , useRef  } from "react";
import { Box, Flex, Spacer, Image, Link , Text, Center, Heading , Tab , TabList , Tabs, TabPanels, TabPanel , Menu , MenuButton , MenuList , MenuItem  , Button , MenuItemOption , MenuDivider , useDisclosure, VStack , Card, CardHeader, CardBody, CardFooter ,SimpleGrid  , Tag ,   Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  UnorderedList , 
  ListItem ,
  Container , 
  useMediaQuery , 
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack ,
  InputGroup ,
  InputLeftAddon ,
  Textarea ,
  InputRightAddon,
  FormLabel ,
  Input , 
  Select, 
  HStack, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/all.css"; // Import the FontAwesome styles
import './Card.css'
import { motion } from 'framer-motion';
import home_wallpaper from './Images/home-construction-service-lp.png'
import Construction from "./Construction";
import costplus from './Images/CostPlus.png'
import consultation from './Images/consultation.png'
import designphane from './Images/design-phane.png'
import construction from './Images/construction.png'
import movein from './Images/move-in.png'
import reviewourwork from './Images/review-our-work.png'
import constructionPlaceTheOrder from './Images/construction-place-the-order.png'
import adherence from './Images/Adherence.png'
import nosuncontractor from './Images/No Subcontractors.png'
import professional from './Images/Professional.png'
import unique from './Images/Unique.png'
import quality from './Images/Quality.png'
import process from './Images/Process.png'
import competitive from './Images/Competitive.png'
import hign from './Images/Hign.png'
import homeconstruction from  './Images/home construction.png'
import architecture   from  './Images/architecture.png'
import interiors from  './Images/interiors.png'
import management from  './Images/management.png'
import homebanner from './Images/home-banner.png'
import MainLayout from "./MainLayout";
import MainLayoutBelow720px from "./MainKayoutBelow720px";
import home_wallpaperbelow720 from './Images/home-construction-service.png'
import fullhomeinterior from './Images/full-hi-1682068037-mSqKH.png'
import kitchen from './Images/kitchen-copy-1682069840-cnYX7.jpg'
import wardrobe from './Images/wardrobe-1-1682068117-6oLvL.png'
import calculator from './Images/calculator-1682069838-tZQ4E.jpg'
import drfixit from './Images/drfixit.png'
import birlawala from './Images/birlawallcare.png'
import birla from './Images/birla.jpg'
import astral from './Images//astral.png'
import asianpaints from './Images/asianpaints.png'
import ashirwad from './Images/ashirwad.png'
import acc from './Images/acc.jpg'
import anchor from './Images/anchor.jpg'
import payment from './Images/payment.png'
import Quality from './Images/Quality.png'
import services from './Images/services.png' 
import buiildhood from './Images/buildhood-logo.png'
import "./ImageSlider.css";
import costplusshort from './Images/costplusshort.png'
import './SecondImageSlider.css'


const Layout = () => {
    const [showPackageList, setShowPackageList] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isAbove720px] = useMediaQuery("(min-width: 720px)");
    const [isBelow720px] = useMediaQuery("(max-width: 720px)");
    const [isAbove1024px] = useMediaQuery("(min-width: 1024px)");
    const [isAbove1440px] = useMediaQuery("(min-width: 1440px)");
    const [isequal720px] = useMediaQuery("(width: 720px)");
    const [isequal1024px] = useMediaQuery("(width: 1024px)");
    const [isequal1440px] = useMediaQuery("(width: 1440px)");
    const [isequal320px] = useMediaQuery("(width: 320px)");
    const [isAbove0px] = useMediaQuery("(min-width: 0px)");


    const [distance, setDistance] = useState(0); // Initialize distance with a default value
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
   


    
    const firstField = React.useRef()
    const btnRef = React.useRef()

   

  
    const handleMouseEnter = () => {
      onOpen();
    };
  
    const handleFocus = () => {
      onOpen();
    };
    const handleOptionSelect = (option) => {
        // Handle selection logic here, e.g., display a message or perform an action
        console.log('Selected option:', option);
        onClose(); // Close the dropdown after selection
      };
    
  
    const handleBlur = () => {
      onClose();
    };
   
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnterCard = (index) => {
      setHoveredCard(index);
    };
  
    const handleMouseLeaveCard = () => {
      setHoveredCard(null);
    };
  
    const getHoverStyle = (index) => ({
      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
      transition: 'transform 0.2s ease-in-out',
    });


    const [isFlipped, setFlipped] = useState(false);

    const handleCardFlip = () => {
      setFlipped(!isFlipped);
    };

    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to switch the active circular box
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) %5 );
    }, 3000); // Change the duration as needed

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  
  const variants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };
 

  const images = [
    consultation,
    reviewourwork,
    constructionPlaceTheOrder,
    designphane,
    construction,
    movein,
  ];

  const data = [
    { text1 : '1. Consultation' , text2 : 'Raise an enquiry or call us on +91 7802-80-80-80, our Technical expert will get in touch with you and take all your detailed requirements and provide you the estimation for your requiremen', image: images[0] },
    { text1 : '2. Review our work' , text2 :  'Review our work Visit our Projects and get to know about our work and quality, come to office, discuss, and close the deal', image: images[1] },
    { text1 : '3. Place the order' , text2 : ' Place the order Find your good day and sign the transparent construction contract. It helps us to proceed further with Design.', image: images[2] },
    { text1 : '4. Design' , text2 : ' Our experienced Architect will provide you the quality Designs and Architecture as per your requirements and inputs. Discuss and finalize the Design.', image: images[3] },
    { text1 : '5. Execution & Tracking' , text2 : 'construction work flow image 5. Execution & Tracking Project execution will be started. Our project management team will be updating you the daily work progress in the form of Photos and Videos.', image: images[4] },
    { text1 : '6. Move in ' , text2 :  'Move in We make sure the project completes on time without any hassles. You can Happily move into your Dream Home. ', image: images[5] },
    
  ];

  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
  const gridProps = isBelow720px
  ?{  spacingX : '100px'  }
  :  {  spacingY : '50px'  , columns : '4' }

  const gridProps1 = isBelow720px
  ? { spacingY: ["100px", "40px", "40px", "40px", "40px", "40px", "40px"] }
  : { spacingY: '50px', columns: '4' };



  const gridPropCards = isBelow720px
  ?{  spacingY : '30px'  }
  :  {   spacingY : '15px' , spacingX : '15px'  , columns : '3' }
  const [index, setIndex] = useState(0);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      ),
      delay
    );
  
    return () => {
      resetTimeout();
    };
  }, [index]);


const colors = [
  {item1 : drfixit , item2 :birlawala} , 
  {item1 :birla , item2 :astral} , 
  { item1 :asianpaints ,item2 : ashirwad} , 
  {item1 :acc ,item2 : anchor} , ];

  const delay = 3000;

  
  const timeoutRef = useRef(null);
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

 


  return (
    <Flex  flexDirection='column'   minH='100vh'    >
      
       <Image 
            boxSize='620px'
            objectFit='cover'
            src={homebanner}
            alt='Dan Abramov'
            width='100%'
          />
         <Box  bgColor='white'  >
        <Center>
        <Text  fontSize='35px' fontWeight='500'  fontFamily='sans-serif'  color='black'  mt='50px' >Our Expertise</Text>
        </Center>
        </Box>
      <Flex  mt='30px'    mb='30px'   width='100%'     justify = 'center' align='center' flexDirection='column'   >
              {isBelow720px ? (
  
                 <SimpleGrid   {...gridProps1}    marginTop='100px'   width='100%'   justifyContent='center' alignItems='center'    >
                 <Box
               className={`card ${isFlipped ? 'flipped' : ''}`}
              //  onClick={handleCardFlip}
               justify = 'center'
               align = 'center'
             >
               <Box className="card-inner"    >
                 <Box className="card-front">
                 <Image
                   boxSize=  {["180px" , "180px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                   objectFit='cover'
                   src={homeconstruction}
                   alt='Dan Abramov'
                 />
                   <Text  color='black' fontSize={["25px" , "25px" , "25px" , "20px" , "20px", "20px","20px"]}       fontWeight='400' fontFamily='sans-serif'   >Home Construction</Text>
                   {/* Add your image here */}
                 </Box>
                 <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                   <Text color='black'>
                     Independent House/Villa Constructions with High standards and Quality material
                   </Text>
                 </Box>
               </Box>
             </Box>
         
             <Box
               className={`card ${isFlipped ? 'flipped' : ''}`}
              //  onClick={handleCardFlip}
               justify = 'center'
               align = 'center'
             >
               <Box className="card-inner"  >
                 <Box className="card-front">
                 <Image
                   boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                   objectFit='cover'
                   src={architecture }
                   alt='Dan Abramov'
                 />
                   <Text  color='black'    fontSize={["25px" , "25px" , "25px" , "20px" , "20px", "20px","20px"]}       fontWeight='400' fontFamily='sans-serif' >Architecural & Structural Design</Text>
                
                 </Box>
                 <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                   <Text color='black' >  
                      Best in class Architecture includes Floor plans, 3D Elevations and Structural drawings.
                   </Text>
                 </Box>
               </Box>
             </Box>
         
         
             <Box
               className={`card ${isFlipped ? 'flipped' : ''}`}
              //  onClick={handleCardFlip}
               justify = 'center'
               align = 'center'
             >
               <Box className="card-inner"   >
                 <Box className="card-front">
                 <Image
                   boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                   objectFit='cover'
                   src={interiors}
                   alt='Dan Abramov'
                 />
                   <Text fontSize={["25px" , "25px" , "25px" , "20px" , "20px", "20px","20px"]}       fontWeight='400' fontFamily='sans-serif'  color='black' >Interior design</Text>
                  
                 </Box>
                 <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                   <Text color='black' >
                           Best in class Interior designs and Great Value.
                   </Text>
                 </Box>
               </Box>
             </Box>
         
             <Box
               className={`card ${isFlipped ? 'flipped' : ''}`}
              //  onClick={handleCardFlip}
               justify = 'center'
               align = 'center'
             >
               <Box className="card-inner"   >
                 <Box className="card-front">
                 <Image
                   boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                   objectFit='cover'
                   src={management}
                   alt='Dan Abramov'
                 />
                   <Text fontSize={["25px" , "25px" , "25px" , "20px" , "20px", "20px","20px"]}       fontWeight='400' fontFamily='sans-serif'  color='black' >Planning&Management</Text>
                 
                 </Box>
                 <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                   <Text color='black' >
                   A good construction plan is the basis for developing the budget and the schedule for work.
                   </Text>
                 </Box>
               </Box>
             </Box>
                 </SimpleGrid>
              ) : (
                <Box justify ='center'  align  = 'center'  width=  {["80%" , "80%" , "80%" , "100%" , "100%", "100%" ,"80%" ]}   >  
                <Flex   justify='center'  justifyContent='space-between'  alignSelf='center'    width=  {["80%" , "80%" , "80%" , "100%" , "100%", "80%" ,"80%" ]}   >
                <Box
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={handleCardFlip}
              align = 'center'
              justify = 'center'

            >
              <Box className="card-inner"   >
                <Box className="card-front">
                <Image
                  boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                  objectFit='cover'
                  src={homeconstruction}
                  alt='Dan Abramov'
                />
                  <Text fontSize={["25px" , "25px" , "25px" , "25px" , "22px", "25px","20px"]}       fontWeight='300' fontFamily='sans-serif'  color='black' >Home Construction</Text>
                  {/* Add your image here */}
                </Box>
                <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                  <Text color='black'>
                    Independent House/Villa Constructions with High standards and Quality material
                  </Text>
                </Box>
              </Box>
            </Box>
        
            <Box
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={handleCardFlip}
              align = 'center'
              justify = 'center'
            >
              <Box className="card-inner"   >
                <Box className="card-front">
                <Image
                  boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                  objectFit='cover'
                  src={architecture }
                  alt='Dan Abramov'
                />
                  <Text  color='black' fontSize={["25px" , "25px" , "25px" , "25px" , "22px", "25px","20px"]}       fontWeight='400' fontFamily='sans-serif'>Architecural design</Text>
                  {/* Add your image here */}
                </Box>
                <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                  <Text color='black' >  
                     Best in class Architecture includes Floor plans, 3D Elevations and Structural drawings.
                  </Text>
                </Box>
              </Box>
            </Box>
        
        
            <Box
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={handleCardFlip}
              justify = 'center'
              align = 'center'
            >
              <Box className="card-inner"   >
                <Box className="card-front">
                <Image
                  boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                  objectFit='cover'
                  src={interiors}
                  alt='Dan Abramov'
                />
                  <Text fontSize={["25px" , "25px" , "25px" , "25px" , "22px", "25px","20px"]}       fontWeight='400' fontFamily='sans-serif' color='black' >interior design</Text>
                  {/* Add your image here */}
                </Box>
                <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                  <Text color='black' >
                          Best in class Interior designs and Great Value.
                  </Text>
                </Box>
              </Box>
            </Box>
        
            <Box
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={handleCardFlip}
              justify = 'center'
              align = 'center'
            >
              <Box className="card-inner" >
                <Box className="card-front">
                <Image
                  boxSize={["180px" , "120px" , "120px" , "120px" , "100px", "100px" ,"100px" ]}
                  objectFit='cover'
                  src={management}
                  alt='Dan Abramov'
                />
                  <Text fontSize={["25px" , "25px" , "25px" , "25px" , "22px", "25px","20px"]}       fontWeight='400' fontFamily='sans-serif' color='black' >Planning Management</Text>
                  {/* Add your image here */}
                </Box>
                <Box className="card-back" backgroundColor="#ff8c00 " p={4} borderRadius="md">
                  <Text color='black' >
                  A good construction plan is the basis for developing the budget and the schedule for work.
                  </Text>
                </Box>
              </Box>
            </Box>
                </Flex>
                </Box>
              )}
         
        </Flex>

        <Link href="/contact-us" >
               <Image
                  width = '100%'
                  objectFit='cover'
                  src={isBelow720px ? home_wallpaperbelow720 : home_wallpaper}
                  alt='Dan Abramov'
                />
             </Link>    
             <Construction/>    
       
             <Link href = '/cost-plus-contract-house-construction' >
             <Image 
            boxSize='420px'
            objectFit='cover'
            src={isBelow720px ? costplusshort : costplus  }
            alt='Dan Abramov'
            width='100%'
          />
             </Link>
             <Box bgColor='white' p={8}  justify = 'center' align = 'center' >
      <Text fontSize='40px'fontWeight='500' fontFamily=  'sans-serif'  >  Get an estimate for your home interiors</Text>
      <Text fontSize='20px'fontWeight='450' fontFamily=  'sans-serif'  > Calculate the approximate cost of doing up your home with our easy-to-use tool.</Text>
        <SimpleGrid {...gridPropCards}  justifyContent='center' alignItems='center'     marginTop='40px' 
            width={['85%' , '85%' , '85%' , '100%' , '100%' ,'85%' , '75%']}
           >
          <Card
          width={["300px" , "300px" , "400px" , "300px" , "300px" , "400px" , "500px"]}
          height='300px'
        onMouseEnter={() => handleMouseEnterCard(1)}
        onMouseLeave={handleMouseLeaveCard}
        style={getHoverStyle(1)}
      >
        <CardHeader >
            <Box  display='flex'    justifyContent='space-between'  >
            <Image
                  boxSize='70px'
                  bgColor='red'
                  objectFit='cover'
                  src={fullhomeinterior}
                  alt='Dan Abramov'
                
                />
                 
                 <Image
                  boxSize='70px'
                  objectFit='cover'
                  src={calculator}
                  alt='Dan Abramov'
                />
            </Box>
        </CardHeader>
        <CardBody>
            <Box  display='block' textAlign='left' >
                <Text fontSize='18px'fontWeight='550' fontFamily=  'sans-serif'  >Full Home Interior</Text>
                <Text>Know the estimate price for your full home interiors</Text>
            </Box>
        </CardBody>
        <CardFooter>
           <Box width='100%'>
              <Button   width='100%' bgColor='#eb595f' color='white'    >Calculate</Button>
           </Box>
        </CardFooter>
      </Card>

      <Card 
          onMouseEnter={() => handleMouseEnterCard(2)}
          onMouseLeave={handleMouseLeaveCard}
          style={getHoverStyle(2)}
          width={["300px" , "300px" , "400px" , "300px" , "300px" , "400px" , "500px"]}
          height='300px'
       >  
        <CardHeader>
        <Box  display='flex'    justifyContent='space-between'  >
            <Image
                  boxSize='70px'
                  bgColor='red'
                  objectFit='cover'
                  src={kitchen}
                  alt='Dan Abramov'
                
                />
                 
                 <Image
                  boxSize='70px'
                  objectFit='cover'
                  src={calculator}
                  alt='Dan Abramov'
                />
            </Box>
        </CardHeader>
        <CardBody>
          <Box  display='block' textAlign='left' >
                <Text fontSize='18px'fontWeight='570' fontFamily=  'sans-serif'  >Kitchen</Text>
                <Text>get an approximate costing for you kitchen interior</Text>
            </Box>
        </CardBody>
        <CardFooter>
        <Box width='100%'>
              <Button   width='100%' bgColor='#eb595f' color='white'    >Calculate</Button>
        </Box>
        </CardFooter>
      </Card>

      <Card  
         onMouseEnter={() => handleMouseEnterCard(3)}
         onMouseLeave={handleMouseLeaveCard}
         style={getHoverStyle(3)}
         width = {["300px" , "300px" , "400px" , "300px" , "300px" , "400px" , "500px"]}
         height='300px'
       >
        <CardHeader>
        <Box  display='flex'    justifyContent='space-between'  >
            <Image
                  boxSize='70px'
                  bgColor='red'
                  objectFit='cover'
                  src={wardrobe}
                  alt='Dan Abramov'
                
                />
                 
                 <Image
                  boxSize='70px'
                  objectFit='cover'
                  src={calculator}
                  alt='Dan Abramov'
                />
            </Box>
        </CardHeader>
        <CardBody>
         
          <Box  display='block' textAlign='left' >
                <Text fontSize='18px'fontWeight='550' fontFamily=  'sans-serif'  >Wardrobe</Text>
                <Text>Our rough math for your wardrobe</Text>
            </Box>
        </CardBody>
        <CardFooter>
        <Box width='100%'>
              <Button   width='100%' bgColor='#eb595f' color='white'    >Calculate</Button>
           </Box>
        </CardFooter>
      </Card>
        </SimpleGrid>
      </Box>
      <Box   bgColor='#f2f2f2'   align='center' justify='center'   >
           <Box   width='75%'   >
          <Text   fontSize='40px'   fontFamily='serif' fontStyle='normal'    color='black'  paddingTop='70px' >Advantages of Cost-Plus Model</Text>
          </Box>
          <Box overflowX='auto'   width='100%'  >
        <Table  size='lg' width='70%' borderWidth="1px" borderColor="gray.300" marginTop='80px'  marginBottom='50px'  >
          <Thead>
            <Tr>
              { !isBelow720px && (
                   <Th></Th>
              )}
              <Th textAlign='center' bgColor='#f34e00' color='white'  borderTopRadius='20px'   ><Text   fontSize= {["27px","27px","20px","20px","20px","20px","20px"]}fontFamily='serif' fontStyle='normal'  >Cost-Plus</Text></Th>
              <Th textAlign='center' color='black' ><Text fontSize= {["27px","20px","20px","20px","20px","20px","20px"]}   fontFamily='serif' fontStyle='normal' >Lumpsum / Fixed-Price</Text></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              { !isBelow720px && (
                   <Td  bgColor='#f2f2f2' color='black' ><Text fontSize='40px'   fontFamily='serif' fontStyle='normal'  >Money Safety</Text></Td>
              )}
              <Td bgColor='#ffffff'color='black' >
                <UnorderedList>
                  <ListItem>
                    <Text fontSize= {["27px","27px","20px","20px","20px","20px","20px"]}   fontFamily='Open Sans' fontStyle='normal'  >Clients will be making payments only after they receive the material to their site and the specific work is completed. So, here the client's money will be safe with them, and they can pay only when required.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize = {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  > Clients will be required to make bulk advance payments upfront, irrespective of the progress or completion of specific work, posing a potential risk to their funds without a guarantee of receiving materials or completed work.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
              { !isBelow720px && (
                  <Td  bgColor='#f2f2f2' color='black'><Text  fontSize='40px'   fontFamily='serif' fontStyle='normal'  >Cost saving</Text></Td>
              )}
              <Td bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >Clients will be saving up to 10% of the overall project cost since the payments will be made directly to the vendors.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >No option to save as the project cost is Fixed, and Clients have to pay the agreed amount to the contractor.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              { !isBelow720px && (
                  <Td    fontSize='40px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>High Quality</Td>
              )}
              <Td bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' > Contractor prioritizes quality over cost-cutting since their profit isn't directly tied to minimizing expenses, potentially leading to a higher standard of workmanship and usage of quality materials.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >Here, Contractors prioritize cost-cutting over quality, as their profit is directly tied to minimizing expenses, potentially leading to a lower standard of workmanship and usage of subpar materials.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              { !isBelow720px && (
                 <Td fontSize='40px'   fontFamily='serif' fontStyle='normal'    bgColor='#f2f2f2' color='black'><Text>Client Satisfaction</Text></Td>
              )}
              <Td   fontSize='40px'   fontFamily='serif' fontStyle='normal'   bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >With the ability to adjust project details as needed, Clients are more likely to be satisfied with the final result.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >Due to the inability to modify project details as required, Clients may not be satisfied with the final result, as they have limited flexibility during the construction process.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
             
              { !isBelow720px && (
                  <Td   fontSize='40px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>Transparency</Td>
              )}
              
              <Td  fontSize='40px'   fontFamily='serif' fontStyle='normal'   bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' > Cost-plus contracts provide transparent pricing with full client visibility into project costs, including materials, labor, contractor fee, and design costs. Detailed cost breakdowns ensure transparency, allowing informed decisions without surprises or hidden expenses.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >Lack of transparency in pricing, as clients may not have full visibility into the project's costs, including detailed breakdowns of materials, labor, contractor fees, and design costs. This limited transparency may lead to uncertainties, potential surprises, and hidden costs, making it challenging for clients to make decisions.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
             
              { !isBelow720px && (
                   <Td    fontSize='40px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>Flexibility</Td>
              )}
              <Td bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                   <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >Cost-plus facilitates adjustments and customizations without the need for extensive negotiation. This is particularly advantageous for projects requiring customization, as clients have the flexibility to modify project details, materials, and features as the project progresses, accommodating their evolving preferences.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >  Lack of flexibility can be a limitation for projects that require customization, as clients may face challenges in modifying project details, materials, and features during the course of the project, limiting their ability to accommodate evolving preferences.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
              { !isBelow720px && (
                  <Td fontSize='40px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>Control over Project</Td>
              )}
              <Td bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' > Cost-plus model provides improved project control, empowering clients with active involvement in decision-making processes for every aspect of their project. This enhances their ability to influence and oversee the desired outcomes.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' > Fixed-price models limit client control over project decisions, restricting their involvement in decision-making processes for various aspects of their project. This constrains their ability to influence and oversee outcomes, reducing the level of empowerment in the project.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
             
              { !isBelow720px && (
                  <Td  fontSize='40px'   fontFamily='serif' fontStyle='normal'   bgColor='#f2f2f2' color='black'>Project Timeline</Td>
              )}
              <Td bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >In a cost-plus, projects often experience expedited progress due to the flexible nature of the contract. With the ability to make swift decisions and adjustments, clients and contractors collaborate seamlessly, promoting efficiency and ensuring timely completion.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' > Projects may encounter slower progress due to the rigid nature of the agreement. Limited flexibility in decision-making and adjustments can lead to potential delays, as clients and contractors face challenges in adapting to changing circumstances, potentially impacting efficiency and the timely completion of the project.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
             
              { !isBelow720px && (
                  <Td  fontSize='40px'   fontFamily='serif' fontStyle='normal'   bgColor='#f2f2f2' color='black'>Value Engineering</Td>
              )}
              <Td fontSize='40px'   fontFamily='serif' fontStyle='normal'   bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' > In cost-plus, contractors are free from the constraints of a fixed budget, fostering a willingness to propose innovative ideas. Unlike fixed-price contracts, this approach allows for greater flexibility and encourages creative solutions. The absence of budget restrictions enables a more dynamic and open approach to project execution.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'>  In fixed-price contracts, the predetermined budget restricts contractors from proposing innovative ideas, in contrast to the flexibility allowed by cost-plus models. The rigidity of fixed budgets can discourage creative solutions and hinder a dynamic approach to project execution.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
              { !isBelow720px && (
                 <Td  fontSize='40px'   fontFamily='serif' fontStyle='normal'   bgColor='#f2f2f2' color='black'>Manpower</Td>
              )}
              <Td bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >  Contractors can strategically allocate skilled manpower, prioritizing the delivery of high-quality work. This approach allows for a focus on expertise and professionalism, enhancing the overall quality of the project.</Text> 
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  bgColor='#f2f2f2' color='black'>
                <UnorderedList>
                  <ListItem>
                    <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >With the constraint of cost minimization, contractors may struggle to strategically allocate skilled manpower, compromising the prioritization of high-quality work. This could impact the overall project quality by limiting the focus on expertise and professionalism.</Text>
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      </Box>       
        
      <Box   bgColor='#ffefea'  justify = 'center' align = 'center'  >
        <Box   width='75%'   >
          <Text color='black'   fontSize='40px'   fontFamily='serif' fontStyle='normal'     paddingTop='70px' >The Buildhood Advantage</Text>
        </Box>  
          <Box overflowX='auto'   width='100%'  >
        <Table  size='lg' width='70%' borderWidth="1px" borderColor="gray.300"  marginTop='80px'  marginBottom='50px'  >
          <Thead>
            <Tr>
             
               { !isBelow720px && (
                  <Th></Th>
              )}
              <Th textAlign='center' bgColor='orange' color='white'    fontSize='30px' borderTopRadius='20px'   fontFamily='serif' fontStyle='normal'   >BUILDHOOD</Th>
              <Th textAlign='center' color='black'  fontSize='30px'   fontFamily='serif' fontStyle='normal'  >	TYPICAL EXPERIENCE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
             
               { !isBelow720px && (
                   <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black' >PRICE</Td>
              )}
              <Td bgColor='#ffffff'color='black'  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >
                <UnorderedList>
                  <ListItem>
                  Best price guarantee
                  </ListItem>
                  <ListItem>
                  No hidden costs
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td   fontSize ={["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  Comparatively higher prices
                  </ListItem>
                  <ListItem>
                  Price hike between first quote and final cost
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
             
                { !isBelow720px && (
                   <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>Quality</Td>
              )}
              <Td bgColor='#ffffff'color='black' fontSize = {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >
                <UnorderedList>
                  <ListItem>
                  Branded material
                  </ListItem>
                  <ListItem>
                  320+ Quality checks
                  </ListItem>
                  <ListItem>
                  ISO Quality standards
                  </ListItem>
                  <ListItem>
                  In-house project management, No sub-contractors
                  </ListItem>
                  <ListItem>
                  Quality Finishing
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  Inferior materials used to cut the costs
                  </ListItem>
                  <ListItem>
                  No quality checks
                  </ListItem>
                  <ListItem>
                  Poor standards
                  </ListItem>
                  <ListItem>
                  Outsourced to Sub-contractors
                  </ListItem>
                  <ListItem>
                  Poor finishing
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
             
                { !isBelow720px && (
                   <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>SUB-CONTRACTORS</Td>
              )}
              <Td bgColor='#ffffff'color='black'  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >
                <UnorderedList>
                  <ListItem>
                  No Sub-Contractors
                  </ListItem>
                  <ListItem>
                  In-house project management, No third-party involvement.
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  YES
                  </ListItem>
                  <ListItem>
                  Mostly outsourced to Sub-contractors
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
                { !isBelow720px && (
                   <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>TRANSPARENCY</Td>
              )}
              <Td bgColor='#ffffff'color='black 'fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' >
                <UnorderedList>
                  <ListItem>
                  Transparent at every level
                  </ListItem>
                  <ListItem>
                  Pricing, Material specification, Process and Execution
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  Limited to No transparency
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
                 { !isBelow720px && (
                    <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>CONVINIENCE</Td>
              )}
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  One-stop solution
                  </ListItem>
                  <ListItem>
                  We take care from Plan approval to handover the project without any hassles
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  Hassle experience to No support
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
                { !isBelow720px && (
                <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>DESIGN</Td>
              )}
              <Td bgColor='#ffffff'color='black 'fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  >
                <UnorderedList>
                  <ListItem>
                  Personalized Designs and Architecture
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  Cookie-cutter designs and Architecture
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
                { !isBelow720px && (
                <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>TIMELINES</Td>
              )}
              <Td bgColor='#ffffff'color='black 'fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  >
                <UnorderedList>
                  <ListItem>
                  On-Time Project Completion with appropriate Timelines
                  </ListItem>
                  <ListItem>
                  Regular updates with Project tracking
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  Delays in project completion and unreliable timelines
                  </ListItem>
                  <ListItem>
                  Poor communication on Project updates/delays
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
              { !isBelow720px && (
               <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>WARRANTY</Td>
              )}
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                  5 years warranty for the service
                  </ListItem>
                  <ListItem>
                  We provide after sales service
                  </ListItem>
                </UnorderedList>
              </Td>
              <Text fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                  No warranty or Warranty for namesake
                  </ListItem>
                  <ListItem>
                  No after sales service
                  </ListItem>
                </UnorderedList>
              </Text>
            </Tr>
            <Tr>
             
                { !isBelow720px && (
               <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>Value Engineering</Td>
              )}
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                    In cost-plus, contractors are free from the constraints of a fixed budget, fostering a willingness to propose innovative ideas. Unlike fixed-price contracts, this approach allows for greater flexibility and encourages creative solutions. The absence of budget restrictions enables a more dynamic and open approach to project execution.
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'   color='black'>
                <UnorderedList>
                  <ListItem>
                    In fixed-price contracts, the predetermined budget restricts contractors from proposing innovative ideas, in contrast to the flexibility allowed by cost-plus models. The rigidity of fixed budgets can discourage creative solutions and hinder a dynamic approach to project execution.
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
            <Tr>
              
               { !isBelow720px && (
              <Td  fontSize='30px'   fontFamily='serif' fontStyle='normal'  bgColor='#f2f2f2' color='black'>Manpower</Td>
              )}
              <Td  fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal' bgColor='#ffffff'color='black'>
                <UnorderedList>
                  <ListItem>
                    Contractors can strategically allocate skilled manpower, prioritizing the delivery of high-quality work. This approach allows for a focus on expertise and professionalism, enhancing the overall quality of the project.
                  </ListItem>
                </UnorderedList>
              </Td>
              <Td    fontSize =  {["27px","27px","20px","20px","20px","20px","20px"]}  fontFamily='Open Sans' fontStyle='normal'  color='black'>
                <UnorderedList>
                  <ListItem>
                    With the constraint of cost minimization, contractors may struggle to strategically allocate skilled manpower, compromising the prioritization of high-quality work. This could impact the overall project quality by limiting the focus on expertise and professionalism.
                  </ListItem>
                </UnorderedList>
              </Td>
            </Tr>
          </Tbody>
         
        </Table>
      </Box>
      </Box>

      <Flex
         bgColor= '#fffafa'
        direction="column"
        align="center"
        justify='center'
 
      >
        <Box   >
          <Text color='black'   fontSize='40px'   fontFamily='serif' fontStyle='normal'   >Why choose buildhood</Text>
        </Box>
        <Flex      marginTop='50px'    justify = 'center' align='center'   w= {["100%" , "100%" , "90%" , "90%", "90%" , "75%" , "50%" ]}  >
          <SimpleGrid   {...gridProps}  spacingY="8"    w= {["100%" , "100%" , "100%" , "100%", "100%" , "100%" , "100%" ]}
          
                >
            {/* Card 1 */}
              <Card
              display='flex'
              flexDirection='column' // Stack elements vertically
              justifyContent='center'
              alignItems='center'
              boxShadow="lg"
              height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
              w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}
            >
              <Flex  
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='column'
                  textAlign='center'
                >
                <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  src={nosuncontractor}
                  alt='Dan Abramov'
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                  No subcontractors
                </Text>
              </Flex>
            </Card>
  
  
            {/* Card 2 */}
            <Card
         
         display='flex'
              flexDirection='column' // Stack elements vertically
              justifyContent='center'
              alignItems='center'
              boxShadow="lg"
              bg="white"
              height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
              w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}
            
            >
           
              <Flex
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                textAlign='center'
              >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={professional}
                  alt='Dan Abramov'
      
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                  Professional Project Management
                </Text>
              </Flex>
            </Card>
  
            {/* Card 3 */}
            <Card
              
              display='flex'
              flexDirection='column' // Stack elements vertically
              justifyContent='center'
              alignItems='center'
              boxShadow="lg"
              height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
              w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}        
            >
            
              <Flex
                 justifyContent='center'
                 alignItems='center'
                 flexDirection='column'
                 textAlign='center' 
              >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={unique}
                  alt='Dan Abramov'
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                  Unique and modern designs
                </Text>
              </Flex>
            </Card>
  
            {/* Card 4 */}
            <Card
                
                display='flex'
                flexDirection='column' // Stack elements vertically
                justifyContent='center'
                alignItems='center'
                boxShadow="lg"
                height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
                w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}
            
            >
             
              <Flex
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                textAlign='center'
              >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={quality}
                  alt='Dan Abramov'
                  
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","15px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                  Quality
                </Text>
              </Flex>
            </Card>
            <Card
             
             display='flex'
             flexDirection='column' // Stack elements vertically
             justifyContent='center'
             alignItems='center'
             boxShadow="lg"
             height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
             w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}
            >
             
              <Flex
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                textAlign='center'   
              >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={process}
                  alt='Dan Abramov'
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                    Transparency
                </Text>
              </Flex>
            </Card>
  
            <Card
             display='flex'
             flexDirection='column' // Stack elements vertically
             justifyContent='center'
             alignItems='center'
             boxShadow="lg"
             height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
             w= {["100%" , "100%" , "100%" , "180px", "220px" , "260px" , "310px" ]}
            
            >
             
              <Flex
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                textAlign='center' 
               >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={adherence}
                  alt='Dan Abramov'
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                   Brand/Trustworthy
                </Text>
              </Flex>
            </Card>
  
            <Card
           display='flex'
           flexDirection='column' // Stack elements vertically
           justifyContent='center'
           alignItems='center'
           boxShadow="lg"
           height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
           w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}
            
            >
             
              <Flex
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                textAlign='center' 
              >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={competitive}
                  alt='Dan Abramov'
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                Professional Customer Service
                </Text>
              </Flex>
            </Card>
  
            <Card
             
             display='flex'
              flexDirection='column' // Stack elements vertically
              justifyContent='center'
              alignItems='center'
              boxShadow="lg"
              height= {["270px" ,"270px","270px" , "170px" ,"170px" , "170px" ,"170px"]}
              w= {["100%" , "100%" , "100%" , "180px", "220px" , "280px" , "310px" ]}
            
            >
             
              <Flex
                 justifyContent='center'
                 alignItems='center'
                 flexDirection='column'
                 textAlign='center' 
               >
              <Image
                  boxSize= {[ "130px" ,"130" ,"130px" , "50px" ,"50px" ,"50px" ,"50px" ]}
                  objectFit='cover'
                  src={hign}
                  alt='Dan Abramov'
                />
                <Text mt="4" fontSize =  {["30px","30px","30px","18px","20px","20px","20px"]}      fontFamily='serif' fontStyle='normal' textTransform="uppercase" color='black'>
                   Hassle-Free Service
                </Text>
              </Flex>
            </Card>
  
  
  
         
            {/* Repeat similar structure for other cards */}
          </SimpleGrid>
        </Flex>
      </Flex>
       

      <Flex justify='center' align='center'  flexDirection='column'   mt='40px'     >
           <Box>
              <Text  fontSize='30px' fontWeight='500' fontFamily='serif'  >Frequently Asked Questions</Text>
           </Box>
           <Box   borderRadius='45px'   bgColor='rgba(0, 0, 0, 0.7)'  width='75%' flexDirection='column'  align = 'center' justify = 'center'  marginBottom='50px'  marginTop='50px'  >
                 <Box   display='flex'   width='75%'  justifyContent='space-between'   mb='40px'mt='40px'   >
                       <Accordion allowToggle  width='50%'  _expanded={{ backgroundColor : 'rgba(0, 0, 0, 0.7)' }}    >
                          <AccordionItem>
                              <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'     fontSize='20px' fontWeight='200' fontFamily='serif'     textAlign='left' >
                                  What are services BUILDHOOD provides?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel  textAlign='left'      >
                                    Home/Villa/Building Turn-key construction, Interior design And House renovations.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                       <Accordion allowToggle  width='50%' >
                          <AccordionItem>
                          <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'  >                         
                             How do you monitor the work quality?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel textAlign='left' >
                              A dedicated and experienced civil engineer will be assigned to the project and he will me monitoring the progress and Quality of the work.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                 </Box>
                 <Box   display='flex'   width='75%'  justifyContent='space-between'  mb='40px'   >
                       <Accordion allowToggle  width='50%'    >
                          <AccordionItem>
                              <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text   color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'  >                   
                               Why should you choose BUILDHOOD?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel  textAlign='left'  >
                                    
                                 BUILDHOOD is a fast growing brand for its quality & Trustworthy services with certified professionals.
                                 <ul>
                                    <li>150+ Projects Experience </li>
                                    <li>Trustworthy, Reliable, And Secure</li>
                                    <li>Fixed package cost with customization</li>
                                    <li>Great Value For Money</li>
                                    <li>Experienced Professionals &amp; Labour</li>
                                    <li>Dedicated Civil Engineers</li>
                                    <li>Quality Assurance</li>
                                    <li>Upto 10 Years Warranty</li>
                                    <li>Verified &amp; Quality Material</li>
                                    <li>On-Time Completion Of Projects</li>
                                    <li>Flexible Payment schedules</li>
                                    <li>Transparency</li>
                                    <li>Hassle-Free Service</li>
                                    <li>100% Satisfaction Guaranteed</li>
                                    </ul>
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                       <Accordion allowToggle  width='50%' >
                          <AccordionItem>
                          <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'    textAlign='left'  >
                                  
                                How is BUILDHOOD payment process?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel textAlign='left' >
                                   
                                      We provide flexible Payment schedule. The project will be devided into several stages and the calculated payments will be defined for each stage.
                                      Client can make the payment for the stages by monitoring the progress.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                 </Box>
                 <Box   display='flex'   width='75%'  justifyContent='space-between'  mb='40px'   >
                       <Accordion allowToggle  width='50%'    >
                          <AccordionItem>
                              <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'    textAlign='left'  >
                                 
                              Do you charge separately for Designs?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel  textAlign='left'  >
                              NO, we do not charge for Designs, it is included with the package.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                       <Accordion allowToggle  width='50%' >
                          <AccordionItem>
                          <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'   >                         
                             
                                      Whom to contact during work?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel textAlign='left' >
                             
                                A dedicated Project manager and Site engineer will be assigned to each project.
                                Client can contact the Site engineer or project Manager for any queries.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                 </Box>
                 <Box   display='flex'   width='75%'  justifyContent='space-between'  mb='40px'   >
                       <Accordion allowToggle  width='50%'    >
                          <AccordionItem>
                              <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'  >
                                 
                                Do you help with governmental approvals?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel  textAlign='left'  >
                              YES, We do help our clients with all the government approvals and Temporary electric connects.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                       <Accordion allowToggle  width='50%' >
                          <AccordionItem>
                          <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'  >
                                 
                               Does the Client need to follow up the work regularly?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel textAlign='left' >
                                   
                                      NO, Clients need not followup or worry about the work. Our team will be taking care of it.
                                      Client can enjoy our hassle-free process and service and he/she visit the project only when required.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                 </Box>
                 <Box   display='flex'   width='75%'  justifyContent='space-between' mb='40px'   >
                       <Accordion allowToggle  width='50%'    >
                          <AccordionItem>
                              <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'  >
                                 
                             How do you assure on-time completion of the project?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel  textAlign='left'  >
                              We will plan and define a schedule and timeline for each stage of the project which helps us to meet the target date and we closely monitor all the stages.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                       <Accordion allowToggle  width='50%' >
                          <AccordionItem>
                          <AccordionButton>
                              <Box display='flex' >  
                              <Image
                              boxSize='20px'
                              objectFit='cover'
                              src={hign}
                              alt='Dan Abramov'
                             
                            />
                              <Text  color='white'    fontSize='20px' fontWeight='200' fontFamily='serif'   textAlign='left'  >
                                 
                              How does the Client monitor the progress of the project?
                              </Text>
                              </Box>
                              </AccordionButton>
                              <AccordionPanel textAlign='left' >
                              We will be sending the status updates through Email or Whatsapp group. Photos and Videos will be captured at site.
                              </AccordionPanel>
                          </AccordionItem>
                       </Accordion>
                 </Box>
           </Box>
      </Flex>


    </Flex>
  );
};

export default Layout;
