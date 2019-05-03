import React, { useRef, useEffect } from 'react';

/**
 * Box component. Renders a single canvas / piece of the puzzle
 */
const Box = ({ image, boxSize, row, col }) => {
  const canvas = useRef();
  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    var imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function() {
      ctx.drawImage(
        imageObj1,
        0 + col * boxSize,
        0 + row * boxSize,
        boxSize,
        boxSize,
        0,
        0,
        boxSize,
        boxSize
      );
    };
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
