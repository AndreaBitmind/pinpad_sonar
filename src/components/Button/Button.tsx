import "./button.css";

interface ButtonProps {
  digit: number;
  handleChange: (number: number) => void;
}

const Button = ({ digit, handleChange }: ButtonProps): JSX.Element => {
  return (
    <button className="button" onClick={() => handleChange(digit)}>
      {digit}
    </button>
  );
};

export default Button;
