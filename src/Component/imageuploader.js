import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
     
      const formData = new FormData();
      
      formData.append('image', image);
      console.log("hey")
      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div className="App">
      <Box
        height='200px'
        width='200px'
        borderRadius='8px'
        borderWidth='1px'
        textAlign='center'
        p={4}
        m={4}
        position='relative'
        _hover={{
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background on hover
            borderRadius: 'inherit',
            zIndex: -1, // Place it behind the box
          },
          '&::after': {
            content: '"Hovered!"',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            opacity: 1, // Make the text visible on hover
            zIndex: 1, // Place it above the box
          },
        }}
      >
        Hover me!
      </Box>
    </div>
  );
}

export default ImageUploader;
