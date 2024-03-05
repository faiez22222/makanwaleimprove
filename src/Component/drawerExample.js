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
    chakra , 
    useToast ,
    useRadioGroup ,
   } from '@chakra-ui/react';
   import { MinusIcon , AddIcon , CheckIcon }    from '@chakra-ui/icons'
   import essentials from './Images/essentials-desktop-1677569928-WCHBw.jpg'
   import premium from './Images/premium-desktop-1677569932-Tc87O.jpg'
   import luxury from './Images/luxe-desktop-1677569931-ZV4Be.jpg'

function DrawerExample() {
  function CustomRadio(props) {
    const { image, ...radioProps } = props
    const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
      useRadio(radioProps)

    return (
      <chakra.label {...htmlProps} cursor='pointer'>
        <input {...getInputProps({})} hidden />
        <Accordion
        allowMultiple
         width='250px'
         borderWidth='1px'
        {...getRadioProps()}  
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
         >

                                    <AccordionItem  borderColor="whitesmoke" >
                                      <h2>
                                        <AccordionButton>
                                        <Box justifyContent = "space-between" display='flex'  > 
                                          <AccordionIcon />
                                          </Box>
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel pb={4}  borderColor="whitesmoke" >
                                      <Image src={image} rounded='full' {...getLabelProps()} />
                                      </AccordionPanel>
                                    </AccordionItem>
   </Accordion>
      </chakra.label>
    )
  }

  const toast = useToast()

  const avatars = [
    { name: 'Kat', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Kevin', image: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Andy', image: 'https://randomuser.me/api/portraits/men/29.jpg' },
    { name: 'Jess', image: 'https://randomuser.me/api/portraits/women/95.jpg' },
  ]

  const handleChange = (value) => {
    toast({
      title: `The value got changed to ${value}!`,
      status: 'success',
      duration: 2000,
    })
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'Kevin',
    onChange: handleChange,
  })

  return (
    <Stack {...getRootProps()}>
      <Text>The selected radio is: {value}</Text>
      <HStack>
        {avatars.map((avatar) => {
          return (
            <CustomRadio
              key={avatar.name}
              image={avatar.image}
              {...getRadioProps({ value: avatar.name })}
            />
          )
        })}
      </HStack>
    </Stack>
  )
}

export default DrawerExample