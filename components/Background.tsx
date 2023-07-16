/* 

export default function Background() {
  return (
    <section style={{
        
        position: 'fixed',
        width: '100vw',
        height: '100vh',

}}>
        <Image
          src={background_img}
          layout='fill'
          objectFit='cover'
          alt=""
        />
    </section>
  )
}

 */




/* 
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import background_img from '../public/star-wars-bg.jpeg'


const Box = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box>
        <Image
          src={`${background_img}${width}x${height}`}
          width={width}
          height={height}
          alt=""
        />
      </Box>
    );
  }

  return null;
}

export default BGImage; */