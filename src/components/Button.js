import React from 'react';

const Button = ({ color = 'Green', children }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: '20px 10px',
  };

  return <button style={buttonStyle}>{children}Hello World</button>;
};

export default Button;
