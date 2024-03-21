import React, { useState , useEffect  , useRef} from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image, Flex , Grid, GridItem ,useMediaQuery  } from '@chakra-ui/react';

import icon1 from './Images/Buildhood_Floor_plans.jpeg'
import icon2 from './Images/silver1.jpg' 
import "./ImageSlider.css";
import kitchen1 from './Images/kitchen1.jpg'

const Tabpanel11 = () => {
       const [index, setIndex] = useState(0);
    const imagesss = [
        icon1,
        icon2,
     
        // Add more image URLs as needed
      ];
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
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
     const colors = [icon1,
       icon2,];
     const delay = 3000;

     
     const timeoutRef = useRef(null);
     
     function resetTimeout() {
       if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
       }
     }

     const gridProps = isBelow720px
     ?{  templateRows : '2'  }
     :  { templateColumns : 'repeat(2, 1fr)'  }
   

  return (
      
           <Flex  width='100%'     >
            <Grid  {...gridProps}  width='100%'    >
                <GridItem   >
                <Box   >
                     <Text  fontWeight='600' fontSize='20px' >Kitchen</Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                       Kitchen Granite Platform :
                     </Heading>
                     <Box ml='20px' >
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Cost of the Granite platform will be upto Rs.100/sqft.
                     </Text>
                          {/* <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {" This Floor plan is just for your reference only, Floor plan for each project will be designed as per client’s requirements."}
                     </Text> */}
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Text fontWeight='700'>Ceramic Wall Tiles :</Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Ceramic Wall tiles worth upto Rs.40/sqft will be provided.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Height of the Wall tiles will be up to 2 feet above the Granite platform.
                     </Text>
                     {/* <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            2D elevation working drawings.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {" This elevation image is just for your reference only, Elevation for each project will be designed as per client’s taste and requirement."}
                     </Text> */}
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     
                     {/* <Text fontWeight='700'>Structural Drawings :</Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Center line marking drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Excavation drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Sump drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Footings and Columns drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Plinth beam drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Roof slab shuttering drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Roof slab reinforcement drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Roof slab and Beam drawings for each level
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Staircase drawings
                     </Text> */}
                     </Box>
                      
                </Box>
                </GridItem>
                <GridItem>
                <Box    >
                    {/* <Text fontWeight='600' fontSize='20px' ml='10px'  >Sample Design</Text> */}
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '40px', width : '100%' , marginLeft:'10px' }} ></div>
                    
                    <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                           Kitchen Sink, Faucets and Accessories :
                     </Heading>
                     <Box ml='20px' >
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Stainless Steel Single Bowl sink of worth upto Rs.3000 will be provided.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Sink Faucet and Accessories worth upto Rs.1300 will be provided.
                     </Text>
                     </Box>
                     <img
                                   width='100px'
                                   key={index}
                                   src={kitchen1}
                                   alt={`Slide ${index + 1}`}
                                   
                     />

                    {/* <div className="slideshow" style={{marginTop: '20px'}} >
                      <div
                         className="slideshowSlider"
                         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                       >
                     {colors.map((backgroundColor, index) => (
                     <div className="slide" key={index} >
                                  <img
                                   key={index}
                                   src={backgroundColor}
                                   alt={`Slide ${index + 1}`}
                                   
                                   />
                     </div>
                      ))}
                      </div>
                    
                   </div> */}

                </Box> 
                </GridItem>
            </Grid>   
           </Flex>
  );
};

export default Tabpanel11;
