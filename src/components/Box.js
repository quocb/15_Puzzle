import React, { useRef, useEffect } from 'react';

const Box = ({ image, boxSize, row, col }) => {
  console.log('TCL: Box -> image', image);
  const canvas = useRef();
  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    console.log('TCL: Box -> image in effect', image);
    ctx.drawImage(
      image,
      0 + col * boxSize,
      0 + row * boxSize,
      boxSize,
      boxSize,
      0,
      0,
      boxSize,
      boxSize
    );
  }, []);

  return (
    <>
      <canvas
        id={`${row}${col}`}
        ref={canvas}
        width={boxSize}
        height={boxSize}
      />
    </>
  );
};

export default Box;
