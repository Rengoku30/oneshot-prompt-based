import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 uppercase tracking-widest text-sm font-medium transition-none duration-100 sharp focus-visible:outline focus-visible:outline-3 focus-visible:outline-foreground focus-visible:outline-offset-3";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-background hover:text-foreground hover:border-2 hover:border-foreground",
    secondary: "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
    ghost: "bg-transparent text-foreground border-none hover:underline",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
