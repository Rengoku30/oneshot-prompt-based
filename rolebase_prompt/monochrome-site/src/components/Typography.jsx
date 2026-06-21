import React from 'react';

const Typography = ({ 
  variant = 'body', 
  children, 
  className = '', 
  ...props 
}) => {
  const variants = {
    display9: "font-display text-9xl tracking-tighter leading-none",
    display8: "font-display text-8xl tracking-tighter leading-none",
    display7: "font-display text-7xl tracking-tighter leading-none",
    display6: "font-display text-6xl tracking-tighter leading-none",
    display5: "font-display text-5xl tracking-tight leading-none",
    display4: "font-display text-4xl tracking-tight leading-none",
    display3: "font-display text-3xl tracking-tight leading-none",
    display2: "font-display text-2xl tracking-tight leading-none",
    lead: "font-body text-xl leading-relaxed",
    body: "font-body text-lg leading-relaxed",
    small: "font-body text-sm",
    xs: "font-body text-xs",
    mono: "font-mono tracking-widest uppercase",
    italic: "font-display italic",
  };

  const Tag = variant.startsWith('display') ? 'h1' : 
             variant === 'lead' ? 'p' : 
             variant === 'body' ? 'p' : 'span';

  return (
    <Tag className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
