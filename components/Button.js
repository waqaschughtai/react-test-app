import React from 'react';

const Button = ({ color = 'red', children }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: '0 10px',
  };

  return <button style={buttonStyle}>{children}Waqas Chughtai</button>;
};

export default Button;
