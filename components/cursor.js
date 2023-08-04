import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onClick = () => {
    setIsClicking(true);
    setTimeout(() => {
      setIsClicking(false);
    }, 200); // Adjust the duration of the scale effect as needed
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClicking ? 'clicking' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scale(${isClicking ? 1.5 : 1})`,
      }}
    >
      <img src="/cursor.svg" alt="Custom Cursor" />
    </div>
  );
};

export default CustomCursor;
