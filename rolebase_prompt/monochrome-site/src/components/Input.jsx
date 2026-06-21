import React from 'react';

const Input = ({ 
  label, 
  placeholder, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-mono text-xs tracking-widest uppercase">{label}</label>}
      <input 
        className={`bg-background border-b-medium border-foreground p-2 sharp outline-none transition-all duration-100 placeholder:italic placeholder:text-mutedForeground focus:border-b-ultra ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
