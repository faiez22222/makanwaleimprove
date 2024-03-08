import React, { useState , useEffect  , useRef} from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image, Flex , Grid, GridItem , useMediaQuery, SimpleGrid , } from '@chakra-ui/react';

import icon1 from './Images/Buildhood_Floor_plans.jpeg'
import icon2 from './Images/silver1.jpg' 
import "./ImageSlider.css";
import bathroom1 from './Images/bathroom1.jpg'
import bathroom2 from './Images/bathroom2.jpg'
import bathroom3 from './Images//bathroom3.jpg'
import batgroom4 from './Images/bathroom4.jpg'
import bathroom5 from './Images/bathroom5.jpg'
import bathroom6 from './Images/bathroom6.jpg'
import bathroom8 from './Images/bathroom8.jpg'
import bathroom9 from './Images/bathroom9.jpg'
import kitchen1 from './Images/kitchen1.jpg'
import plumbing1 from './Images/plumbing1.jpg'
import plumbing2 from './Images/plumbing2.jpg'
import plumbing3 from './Images/plumbing3.jpg'
import tiles2 from './Images/tiles2.jpg'
import tiles5 from './Images/tiles5.jpg'
import tiles7 from './Images/tiles7.jpg'


const Tabpanel11 = () => {
       const [index, setIndex] = useState(0);
       const [isBelow720px] = useMediaQuery("(max-width: 720px)");
    const imagesss = [
        icon1,
        icon2,
     
        // Add more image URLs as needed
      ];
  // State to track active tabs

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
            <Grid   {...gridProps} width='100%'    >
                <GridItem   >
                <Box   >
                     <Text  fontWeight='600' fontSize='20px' >Bathroom</Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                        Sanitaryware and CP fittings :
                     </Heading>
                     <Box ml='20px' >
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Sanitaryware and CP fittings will be used of worth upto Rs.35,000 per 1000 Square Feet of Construction.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Includes EWC, Washbasin with Pillarcock, Wallmixer/Diverter, Health Faucet, Overhead shower with Arm, Concealed stopcock, CP fittings and Accessories.
                     </Text>

                     <SimpleGrid  minChildWidth="70px" spacing="40px" >
                          <Image
                             src = {bathroom1}
                          />
                          <Image
                             src = {bathroom2}
                          />
                          <Image
                             src ={bathroom3}
                          />
                          <Image
                            src = {batgroom4}
                          />
                          <Image
                            src= {bathroom5}
                          />
                          <Image
                            src= {bathroom6}
                          />
                          <Image
                            src= {bathroom8}
                          />
                          <Image
                            src = {bathroom9}
                          />
                          <Image
                            src = {kitchen1}
                          />
                     </SimpleGrid>

                          {/* <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {"Includes EWC, Washbasin with Pillarcock, Wallmixer/Diverter, Health Faucet, Overhead shower with Arm, Concealed stopcock, CP fittings and Accessories."}
                          </Text> */}
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     {/* <Text fontWeight='700'>Building Elevation :</Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                               2D Preliminary elevation view.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            3D Elevation rendered view.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            2D elevation working drawings.
                     </Text> */}
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {"  Bathrooms will be waterproofed to remain free of leaks."}
                     </Text>
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
       
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '40px', width : '100%' , marginLeft:'10px' }} ></div>
                     <Text fontWeight='700'>Ceramic Wall and Floor Tiles :</Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Ceramic Wall tiles worth upto Rs.40/sqft and Floor tiles worth upto Rs.40/sqft will be provided.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Height of the Wall tiles will be upto 7 feet above the Floor.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Anti-Skid Ceramic Floor tiles will be provided.
                     </Text>
                      <SimpleGrid  minChildWidth='30px' spacing='0px'  >
                           <Image
                              src= {tiles2}
                           />
                           <Image
                              src = {tiles2}
                           />
                           <Image
                             src = {tiles7}
                           />
                      </SimpleGrid>
                      <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '30px', width : '100%' , marginLeft:'10px' }} ></div>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Astral brand CPVC and PVC will be used in Plumbing.
                     </Text>
                     <SimpleGrid  minChildWidth='30px' spacing='0px'  >
                           <Image
                              src= {plumbing1}
                           />
                           <Image
                              src = {plumbing2}
                           />
                           <Image
                             src = {plumbing3}
                           />
                      </SimpleGrid>
                      <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '30px', width : '100%' , marginLeft:'10px' }} ></div>
                     <Text>

                            <Text>
                            <Text display="inline" fontWeight="600" color="black">Bathroom Doors :</Text>
                            {" Waterproof Flush Doors will be provided."}
                     </Text>
                     </Text>
                     {/* <Text>
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
                </GridItem>
            </Grid>   
           </Flex>
  );
};

export default Tabpanel11;
