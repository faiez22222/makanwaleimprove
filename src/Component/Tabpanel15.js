import React, { useState , useEffect  , useRef} from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image, Flex , Grid, GridItem , useMediaQuery } from '@chakra-ui/react';

import icon1 from './Images/Buildhood_Floor_plans.jpeg'
import icon2 from './Images/silver1.jpg' 
import "./ImageSlider.css";
import Kamdhenu from './Images/Kamdhenu.jpg' 
import IndiaGold from './Images/IndiaGold.jpg' 
import Priya from './Images/Priya.jpg' 
import Maha from './Images/Maha.jpg' 
import Sand from './Images/sand.jpg' 
import Bricks1 from './Images/bricks1.jpg' 
import Bricks2 from './Images/bricks2.jpg' 
import Bricks3 from './Images/bricks3.jpg' 
import truck from './Images/Truck.jpg' 
import aggregates1 from './Images/aggregates1.jpg' 
import aggregates2 from './Images/aggregates2.jpg' 
import Waterproofing from './Images/water-proofing.jpg' 


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
            <Grid  {...gridProps}   width='100%'    >
                <GridItem   >
                <Box   >
                     <Text  fontWeight='400' fontSize='20px' >Woodwork</Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Box ml='20px' marginTop='30px'  >
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                        Main door and Frame :
                     </Heading>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Main door will be provided worth of Rs.15000 including frame and fixtures.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Height and width of the Main door frame will be 7 feet X3 feet 6 inches.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Thickness of the wood section will be 5 inches X3 inches.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Standard Door designs will be provided.
                     </Text>
                    
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                    <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='15px' >
                    Windows :
                    </Heading>
                     <Text mt='5px'>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            2-track Aluminium sliding windows with 5mm clear glass will be provided.

                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            MS grill with 10mm square rods for windows will be provided.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Height and Width of the Windows and Grill design will be as per company standards.
                     </Text>

                     
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                     </Box>
                      
                </Box>
                </GridItem>
                <GridItem>
                <Box    >
                <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '40px', width : '100%'}} ></div>
                     <Box ml='20px' marginTop='30px'  >
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                     Internal Doors and Frames :
                     </Heading>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Doors for internal rooms will be provided worth of Rs.8000 including frame and fixtures.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            SAL wood will be provided for Internal Door Frames.
                           
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< Concrete: '}</Text>
                            Flush Doors will be provided for Internal Rooms.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< Concrete: '}</Text>
                            Height and width of the internal door frame will be 7 feet X 3 feet.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< Concrete: '}</Text>
                            Thickness of the wood section will be 5 inches X 3 inches.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< Concrete: '}</Text>
                            Plain Doors will be provided.
                     </Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '40px', width : '100%'}} ></div>
                     </Box>
                </Box> 
                </GridItem>
            </Grid>   
           </Flex>
  );
};

export default Tabpanel11;
