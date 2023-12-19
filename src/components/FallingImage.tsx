import React, { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

interface FallingImageProps {
  id: number;
  x: number;
  imageIndex: number;
  removeImage: (id: number) => void;
}

const FallingImage: React.FC<FallingImageProps> = ({ id, x, imageIndex, removeImage }) => {
  const [{ y, rotate, opacity }, set] = useSpring(() => ({
    y: -500,
    rotate: 0,
    opacity: 1,
    onRest: () => {
      set({ opacity: 0 });
    },
    config: { ...config.default, duration: getRandomInt(1000, 2000) },
  }));
  const yHeight = window.innerHeight - 150;

  useEffect(() => {
    set({
      y: yHeight,
      rotate: Math.random() * 180 + 720,
      reset: true,
      onRest: () => {
        // Delay removal for 500 milliseconds after opacity transition
        setTimeout(() => {
          removeImage(id);
        }, 500);
      },
    });
  }, [id, removeImage, set, yHeight]);

  return (
    <animated.img
      src={`assets/${imageIndex}.webp`}
      alt="Falling Image"
      style={{
        position: 'absolute',
        width: '200px',
        top: y,
        left: x,
        transform: rotate.to((r) => `rotate(${r}deg)`),
        opacity: opacity.to((o) => o),
        zIndex: '999',
      }}
    />
  );
};

export default FallingImage;
