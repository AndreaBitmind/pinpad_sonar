import "./button.css";

interface ButtonProps {
  digit: number;
}

const Button = ({ digit }: ButtonProps): JSX.Element => {
  return <button className="button">{digit}</button>;
};

export default Button;
