import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', ...props }) => {
  // For anchor links (internal navigation)
  const isAnchor = href.startsWith('#');
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth',
        });
      }
    }
    
    // Execute any onClick handler passed as prop
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};