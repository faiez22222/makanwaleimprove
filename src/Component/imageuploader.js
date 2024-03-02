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
} from '@chakra-ui/react';

const ImageUploader = () => {
  const [formData, setFormData] = useState({
    projectcode : '' ,
    client: '',
    location: '',
    area : '' ,
    floors : '' ,
    package : '',
    status: '' ,
    image1: null,
    category : '' ,
 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image1: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform your form submission logic here, e.g., send formData to the backend
    const formDataToSend = new FormData();
    formDataToSend.append('projectcode', formData.projectcode);
    formDataToSend.append('client', formData.client);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('area', formData.area);
    formDataToSend.append('packages', formData.package);
    formDataToSend.append('status', formData.status);
    formDataToSend.append('floors', formData.floors);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('image1', formData.image1);
   

    // Example: Sending formData to a hypothetical API endpoint
    fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      body: formDataToSend,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully!', data);
        // Handle success, redirect, or perform other actions
      })
      .catch(error => {
        console.error('Error uploading image:', error);
        // Handle errors
      });
  };

  return (
    <FormControl marginTop='30px'  >
      <label>
      Project Code:
       <Input
        type="text"
        name= 'projectcode'
        value={formData.projectcode}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Client:
    <Input
        name="client"
        value={formData.client}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Location:
 <Input
        name="location"
        value={formData.location}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Area:
 <Input
        name="area"
        value={formData.area}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Floors:
 <Input
        name="floors"
        value={formData.floors}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Package:
 <Input
        name="package"
        value={formData.package}
        onChange={handleInputChange}
      />
    </label>
    <br />
    <label>
      Status:
 <Input
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      />
      </label>
      <br />
      <label>
        Upload Image1:
         <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <br />
      <Select
           width='90%'
           name = 'category'
           value = {formData.category}
           onChange={handleInputChange}
            >
        <option>Construction</option>
        <option> Design</option>
        </Select>  
        <Button type="submit" bgColor="orange" color="white"  onClick={handleSubmit} >Submit</Button>  
    </FormControl>
  );
};

export default ImageUploader;
