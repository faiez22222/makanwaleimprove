import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button , useMediaQuery , SimpleGrid , Stack ,StackDirection , } from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';
import aboutvilla from './Images/about-villa.png';


const About = () => {
  // State to track active tabs
  const [isBelow720px] = useMediaQuery("(max-width: 720px)"); 
  const commonProps = {
    mt: '70px',
    // Add any other common props here
  };
  const gridProps = isBelow720px ?{flexDirection: 'column' } : {flexDirection : 'row'}
 
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     minHeight="100vh"
     flexDirection="column"

   >
    <Box bgColor='whitesmoke'   align="center"justify="center"  paddingBottom='30px'  >
    <Box    >
     <Text  fontSize= {['40px' ,'40px' ,'40px' ,'30px' ,'30px' ,'20px']}  fontStyle='poppins'  fontWeight='500'  mb="8" mt='100px'   >
       Who we are
     </Text>
     </Box>
     <Box   width={['95%' ,'90%' ,'85%' ,'85%' ,'75%' ,'75%']}   textAlign='left'     >
       <Text fontSize={['32px' ,'32px' ,'32px' ,'30px' ,'20px' ,'20px']} mb="4"  fontFamily='serif'   >
         "The Technology-based, Promising, and Authentic construction and Interior designing service company"
       </Text>
       <Text    fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']} fontFamily='serif'  >
         Buildhood Infratech Private Limited was born to fulfill the range of your home needs like planning and architecture service, house/villa construction, interior design and execution, and home renovation or remodeling.
       </Text>
       <br/>
       <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']} fontFamily='serif' >
         We are a team with zeal, motivation, creativity, professionalism, and friendliness. We bring your visionary house into reality with our trendsetting ideas. We are renowned for the finest finishing where we choose premium materials and pay attention to minute details to bring out the state of the artwork.
       </Text>
       <br/>
       <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}  fontFamily='serif'>
         Our solid vision and uncompromising mission made us today one of the demanding and fast-growing construction and interior designing companies in Bangalore. As we are an ISO certified company, one can be guaranteed of quality work.
       </Text>
       <br/>
       <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']} fontFamily='serif' >
         Amidst COVID-19, we have adopted stringent measures at every step to assure a no-contact safety environment starting from our office premises to every area of your house. You can feel safe to visit us for the discussion and a green zone to move into your dream house.
       </Text>
     </Box>
     </Box>
     <Text  fontSize=  {['50px' ,'50px' ,'50px' ,'50px' ,'30px' ,'20px']}  fontStyle='poppins'   fontWeight='500'  mb="8" mt='100px'>
        Architecture
     </Text>
     <Box  justify = 'center' align = 'center' width='100%'   >
      <Flex  {... gridProps}     width='75%'  justify = 'center' align = 'center'     >
        <Box      textAlign='left'    width={['100%' ,'100%' ,'85%' ,'500px' ,'500px' ,'500px']}    >
          <Text fontWeight="bold"  fontFamily='serif'  fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}>
            Planning and Architecture Service
          </Text>
          <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}  fontFamily='serif'  >
            “We design for the present with the understanding of the past and prediction of the future”
          </Text>
          <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}   fontFamily='serif' >
            We are good listeners, we listen and jot down all your requirements. Our architects are professionals in carving designs by turning the concepts into images and plans. We create the overall look of the building and structure design far more than its appearance. Creativity is something a core area we focus on in the designing.
          </Text>
        </Box>
        <Spacer/>  
        <Flex  width=  {['100%' ,'90%' ,'85%' ,'500px' ,'500px' ,'500px']}    marginTop='50px'  >
        <Image
           
            borderRadius='30px'
            boxSize='100%'
            src={architectural_service}
            alt='Dan Abramov'
          />
        </Flex>
      </Flex>
    </Box>
    
    <Text  fontSize=  {['50px' ,'50px' ,'50px' ,'50px' ,'30px' ,'20px']}  fontStyle='poppins'   fontWeight='500'  mb="8" mt='100px'>
    Construction
     </Text>
    <Box  justify = 'center' align = 'center' width='100%'  >
      <Flex  {... gridProps}     width='75%'  justify = 'center' align = 'center'    justify-content= 'space-between'  spacing = '1000x'   >
      <Flex  width=  {['100%' ,'90%' ,'85%' ,'400px' ,'500px' ,'450px']}      >
        <Image
           
            borderRadius='30px'
            boxSize='100%'
            src={aboutvilla}
            alt='Dan Abramov'
          />
        </Flex>
        <Spacer/>
        <Box      textAlign='left'    width={['100%' ,'90%' ,'85%' ,'400px' ,'600px' ,'600px']}   >
          <Text fontWeight="bold" fontSize={['30px' ,'30px' ,'30px' ,'100%' ,'20px' ,'20px']} fontStyle='poppins' >
             House/Villa Construction
          </Text>
          <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}   fontFamily='serif' >
          “A transparent and outstanding construction service with 5 years of warranty”
          </Text>
          <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}   fontFamily='serif' >
          Buildhood Infratech feels proud for completing 150+ projects in its journey. We are urged to provide modernized, quality, professional, and transparent service to everyone. Our experts are specialized in turning your dream house into reality. We carefully pick and finalize the best in everything. We are recognized for our world-class finishing that made even a simple house look stylish.
          </Text>
          <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}   fontFamily='serif' >
          Every house owner is valued at Buildhood Infratech. We are satisfied and relaxed when our house owner’s expectations are met. Hence, we boldly offer service with 5 years of warranty.
          </Text>
          <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}  fontFamily='serif' >
          Through on-time completion of projects, we have earned the trust in the market. Our professional and friendly customer service made us stand out distinctively from the crowd.
          </Text>
        </Box>
        <Spacer/>  
        
      </Flex>
    </Box>
     <Text    fontSize=   {['50px' ,'50px' ,'50px' ,'50px' ,'30px' ,'20px']} fontFamily='poppins'  fontWeight='500'   mt='100px'>
        Vision
     </Text>
     <Box w='100%'  justify = 'center' align = 'center'  >
     <Box   width =  {['90%' ,'90%' ,'90%' ,'75%' ,'75%' ,'75%' ]}    textAlign='left'   >
       <Text fontWeight="normal" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif'  >
         “Focused on delivering quality, modish, affordable price, and professional service”
          </Text>
       <Text fontWeight="normal" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif' >
       Our vision is to build the house for pleasant living. Any good things we construct end up building us. We are urged to render quality and the finest finishing touch for the long-lasting durability of the house.
          </Text>
       <br/>
  
       <Text fontWeight="bold" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif' >
          Quality
          </Text>
       <Text fontWeight="mormal" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif'  >
       What goes into the construction of the house is vital for the company. When it comes to material and design we never make any other choice other than going with the quality. Our Quality work remains forever and ever as it is our habit.
          </Text>
       <br/>
       <Text fontWeight="bold" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif' >
       Unique and modern
        </Text>
       <Text fontWeight="normal" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif' >
       To deploy robust strategies in everything we do that make us look unique and modern in the competitive world. We strive to make every house construction value-added and unique in style. We solve complex problems easily and make them look simple.
        </Text>
       <br/>
       <Text fontWeight="bold" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif' >
       Affordable price
        </Text>
       <Text fontWeight="normal" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']} fontFamily='serif'  >
          To raise the standard of living in our country, we are aimed to construct a luxurious house at an affordable price even for middle-class people.
        </Text>
       <Text fontWeight="bold" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']}  fontFamily='serif' >
       Professional customer service
        </Text>
       <Text fontWeight="normal" fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,  '20px']}  fontFamily='serif' >
       We keep ourselves reachable 24/7 for any queries to solve. For every customer, we offer a construction service that comes with 5 years of warranty. We are satisfied when our customers are happy and peaceful.
        </Text>
     </Box>
     </Box>

     <Box bgColor='whitesmoke'  w='100%'       justify = 'center' align = 'center'  >
     <Text  fontSize=  {['50px' ,'50px' ,'50px' ,'50px' ,'30px' ,'20px']}  fontFamily='poppins'   fontWeight='500'  mb="8" mt='100px'>
         Mission
     </Text>
     <Box  width =  {['100%' ,'90%' ,'90%' ,'75%' ,'75%' ,'75%' ]}   textAlign='left'   >
       <Text fontSize={['30px' ,'30px' ,'30px' ,'30px' ,'20px' ,'20px']}  mb="4" fontFamily='serif'  >
         We toil to achieve the vision by hard work and friendly service. Buildhood Infratech houses a bunch of talents that bring value and change to the organization. Our experts are go-getters and never stop for anything until they achieve the goal. We go the extra mile and make things happen.
       </Text>
       <Text    fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px'] }  fontFamily='serif'   fontWeight='bold'>Friendly working environment</Text>
       <Text fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']}  fontFamily='serif'  >
       Our company is a great platform to learn and grow in a career. We create a friendly and inspired workplace for them to invent and implement unique ideas into the construction and design areas.
       </Text>
       <br/>
       <Text  fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']}   fontFamily='serif'   fontWeight='bold' >Updated with latest technology and ideas</Text>
       <Text  fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']}fontFamily='serif'   >
       We are equipped with the latest technology that makes work easy and faster. Our team is updated with the designs and construction ideas that are trending worldwide. Researching and adopting the latest things has become our daily activity.
       </Text>
       <br/>
       <Text   fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']}  fontWeight='bold' >Time Management</Text>
       <Text fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']} fontFamily='serif'   >
       As promised to our customers, we ensure the project is completed on time as per the design with the quality intact. On-time project completion builds and enhances the trust between us and customers.
       </Text>
       <br/>
       <Text   fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']}  fontWeight='bold' >Regular check</Text>
       <Text  fontSize={['30px' ,'30px' ,'30px' ,'25px' ,'20px' ,'20px']} fontFamily='serif'  >
       Our dedicated team regularly checks the construction work at every stage to make sure everything is going as per the finalized design. The regular check assure that we are moving in the right direction of project completion.
       </Text>
     </Box>
     </Box>
     <Box  width='100%'   justify = 'center' align = 'center'  >
     <Box mt='10px'  mb='100px'    w='75%'    textAlign={['center' , 'center','center','left','left','left']}     >  
          <Text   fontSize='20px'  fontWeight='500'  mb="8" mt='250px'>
                 Hire Our Trusted Service
          </Text>
          <Box justify = 'center' align = 'center'   >
          <Stack    direction=  {isBelow720px ? 'column' : 'row'}    mt='20px'   align = {isBelow720px ? 'center' : 'left'}    justify =  {isBelow720px ? 'center' : 'left'}   >
               <Box  display={isBelow720px ? 'block' : 'flex'} alignItems = 'center'   width  = {['200px' ,'200px' ,'200px' ,'200px' ,'200px' ,'200px' ]}   >
                    <i className="fas fa-home" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <Text>Quality Homes</Text>
                    {/* Your other components or content */}
               </Box>
               <Box display={isBelow720px ? 'block' : 'flex'} alignItems = 'center'   width  = {['200px' ,'200px' ,'200px' ,'200px' ,'200px' ,'200px' ]}   >
                    <i className="fas fa-eye" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <Text>Transparent Service</Text>
                    {/* Your other components or content */}
               </Box>
               <Box display={isBelow720px ? 'block' : 'flex'} alignItems = 'center'   width  = {['200px' ,'200px' ,'200px' ,'200px' ,'200px' ,'200px' ]}   >
                    <i className="fas fa-inr" style={{ fontSize: "25px", color: 'orange'  }}></i>
                    <Text>Great Value</Text>
                    {/* Your other components or content */}
               </Box>
          </Stack>     
          </Box>
          <Button width='200px'     mt='30px'  bgColor='orange'>Build</Button>
     </Box>
     </Box>
   </Flex>
  );
};

export default About;
