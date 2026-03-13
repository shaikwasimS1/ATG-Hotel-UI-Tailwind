
const Button = ({ text, className,icon }) => {
  return (
    <button className={className}>
      {text}
     {icon && icon}
    </button>
  );
};

export default Button;