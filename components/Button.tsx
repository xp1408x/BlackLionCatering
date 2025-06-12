
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-white' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const baseStyle = 'font-semibold py-2 px-6 rounded transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-brand-accent text-brand-dark hover:bg-yellow-500 focus:ring-brand-accent';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-700';
      break;
    case 'outline-white':
      variantStyle = 'bg-transparent text-white border border-white hover:bg-white hover:text-black focus:ring-white';
      break;
    case 'outline-dark':
      variantStyle = 'bg-transparent text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-800';
      break;
  }

  let sizeStyle = '';
  switch(size) {
    case 'sm':
      sizeStyle = 'text-sm py-1 px-3';
      break;
    case 'md':
      sizeStyle = 'text-base py-2 px-6';
      break;
    case 'lg':
      sizeStyle = 'text-lg py-3 px-8';
      break;
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
