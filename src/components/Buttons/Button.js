import React from 'react';

const Button = ({ 
  text, 
  bgColor , 
  textColor , 
  icon, 
  buttonwidth,
  iconPosition = "right", 
  onClick 
}) => {
  return (
    <button 
      className={`flex  items-center justify-center gap-2 px-[24px] lg:px-[32px] py-[10px] lg:py-[14px] rounded-lg font-medium`} 
      style={{ backgroundColor: bgColor, color: textColor ,width:buttonwidth}} 
      onClick={onClick}
    >
   
      {icon && iconPosition === "left" && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}

   
      <span>{text}</span>

   
      {icon && iconPosition === "right" && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
