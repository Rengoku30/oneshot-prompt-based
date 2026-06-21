import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  inverted = false, 
  texture = '', 
  ...props 
}) => {
  const baseStyles = "py-24 md:py-32 lg:py-40 border-t-thick border-foreground relative overflow-hidden";
  const invertedStyles = "bg-foreground text-background border-t-white";
  
  return (
    <section className={`${baseStyles} ${inverted ? invertedStyles : ''} ${className}`} {...props}>
      {texture && <div className={`absolute inset-0 pointer-events-none ${texture}`} />}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
