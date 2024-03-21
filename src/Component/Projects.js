import React, { useState  , useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text , Flex, Container , SimpleGrid , Image, HStack , VStack ,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  useMediaQuery, 
  Spacer,
  Link

} from '@chakra-ui/react';
import diamond from './Images/diamond.jpg'
import gold  from './Images/platinum.jpeg'
import silver from './Images/silver.jpeg'
import platinum from './Images/platinum.jpeg'
import '@fortawesome/fontawesome-free/css/all.css';
import firstprojectdetail from './Images/1projectdetail.jpg'
import secondprojectdetail from './Images/2ndprojectdetail.jpg'
import thirdprojectdetail from './Images/3projectdetail.jpg'
import fourthprojectdetail from './Images/4projectdetail.jpg'
import fifthprojectdetail from './Images/5projectdetail.jpg'
import sixthprojectdetail from './Images/6projectdetail.jpeg'
import axios from 'axios';



const Projects = () => {
  // State to track active tabs
    

  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/formData');
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts
  

  const getFileNameFromPath = (imagePath) => {
    // Replace backslashes with forward slashes
    const normalizedPath = imagePath.replace(/\\/g, '/');

    // Create an absolute path and extract the filename
    const absolutePath = new URL(normalizedPath, window.location.origin);
    return absolutePath.pathname.split('/').pop();
};

const imageDataArray = formData.map((data) => {
    // Extract the first value of imagePath1 and imagePath2
    const image1 = data.imagePath1.length > 0 ? getFileNameFromPath(data.imagePath1[0]) : null;
    const image2 = data.imagePath2.length > 0 ? getFileNameFromPath(data.imagePath2[0]) : null;

    // Create an object with the extracted values
    return {
        projectcode: data.projectcode,
        image1,
        image2,
    };
});

console.log("hey" ,  imageDataArray)
  const [isBelow720px] = useMediaQuery("(max-width: 720px)");
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
  const gridProps = isBelow720px
  ?{  spacingY : '30px'  }
  :  {   spacingY : '30px' , spacingX : '30px'  , columns : '2' }

  const projectdetail = [firstprojectdetail , secondprojectdetail , thirdprojectdetail , fourthprojectdetail , fifthprojectdetail , sixthprojectdetail ]



  const handleCardClick = (index) => {
    // Navigate to the overview page with user ID and contest ID
    
    const data = formData[index]
    navigate('/projectsdetails', {
      state: {
          data
      },
    });
  };

  return (
 
            <Flex    width={['100%' , '100%' , '100%' , '100%' , '100%' ,'100%' ,'100%']}   align='center' justify='center'  minH='100vh'     flexDirection='column' >
                   <Box    width={['95%', '90%' , '90%' , '90%' , '75%' , '75%'  ]}  mt='30px' >
                       <Box   align='center' justify = 'center' >
                           <Text fontSize='30px' >Home Construction Projects </Text> 
                       </Box>
                       <Box    align = 'center' justify = 'center'   marginTop='50px'  >
                       {/* <Image
                                                width={['49.5%']}
                                                height='430px'
                                                objectFit='cover'
                                                src= {'http://localhost:3001/1709319199327-2design.jpg'} 
                                                alt='Dan Abramov'
                                                borderRadius='2%'
                                        /> */}
                          <SimpleGrid  {...gridProps}  >
                                {
                                    imageDataArray.map((item , index) =>(
                                        <Box    height='500px'   borderRadius='2%'  borderWidth='1px'     transition="transform 0.3s ease-in-out"  _hover={{ transform: 'scale(1.1)' }}  >
                                      
                                         <Link 
                                           onClick={() => handleCardClick(index)} 
                                          >
                                         <HStack  spacing='0px'  align = 'center' justify = 'center'  > 
                                        <Image
                                                width={['49.5%']}
                                                height='430px'
                                                objectFit='cover'
                                                src= {`http://localhost:3001/${item.image1}`} 
                                                alt='Dan Abramov'
                                                borderRadius='2%'
                                        />
                                          <Image
                                                width={['49.5%']}
                                                height='430px'
                                                objectFit='cover'
                                                src= {`http://localhost:3001/${item.image2}`} 
                                                alt='Dan Abramov'
                                                borderRadius='2%'
                                        />
                                        </HStack>  
                                        </Link>
                                        <Container display='flex'  mt='8px'  >
                                            <Text  >{item.projectcode}</Text>
                                              <Spacer/>
                                            <Text   >Bangalore</Text>
                                        </Container>
                                        <Box borderWidth='1px' ></Box>
                                        <Container  display='flex'  mt='8px'  >
                                            <Text  >Structure:</Text>
                                              <Spacer/>
                                            <Text   >Status:</Text>
                                        </Container>
                                        </Box>
                                    ))
                                }
                          </SimpleGrid>
                       </Box>
                   </Box>
            </Flex>
           

  );
};

export default Projects;
