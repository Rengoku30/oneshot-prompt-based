import React from 'react';

const Card = ({ 
  children, 
  variant = 'standard', 
  className = '', 
  ...props 
}) => {
  const variants = {
    standard: "bg-background border border-foreground p-6 md:p-8 sharp transition-colors duration-100 hover:bg-foreground hover:text-background",
    inverted: "bg-foreground text-background p-6 md:p-8 sharp",
    borderless: "bg-transparent p-6 md:p-8 sharp",
  };

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
