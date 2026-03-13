// import { ArrowRight } from "lucide-react";
const Button = ({ text, className,icon }) => {
  return (
    <button className={className}>
      {text}
      {icon  && <img src={icon} alt="Arrow"/>}
    </button>
  );
};

export default Button;