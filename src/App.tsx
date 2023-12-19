import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import FallingImage from './components/FallingImage';
import Footer from './components/Footer';

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

const App: React.FC = () => {
  const [images, setImages] = useState<{ id: number; x: number; imageIndex: number }[]>([]);

  const handleButtonClick = () => {
    // Get a random image index
    const imageIndex = getRandomInt(0, 5);

    setTimeout(() => {
      // Play audio based on the imageIndex
      const audio = new Audio(`assets/${imageIndex}.mp3`);
      audio.play();
    }, 500);

    // Add logic to create new images
    const newImages = Array.from({ length: 1 }).map((_, index) => ({
      id: Date.now() + index,
      x: Math.random() * (window.innerWidth - 100),
      imageIndex: imageIndex,
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (id: number) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  return (
    <>
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh', marginTop: '2rem' }}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '2rem', textAlign: 'center', borderRadius: '10px', background: 'teal' }}>
              <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                Click to Wonderhoy!
              </Typography>

              <Button variant="contained" color="success" onClick={handleButtonClick}>
                <b>わんだほーい!☆</b>
              </Button>
              {images.map(({ id, x, imageIndex }) => (
                <FallingImage key={id} id={id} x={x} imageIndex={imageIndex} removeImage={removeImage} />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default App;
