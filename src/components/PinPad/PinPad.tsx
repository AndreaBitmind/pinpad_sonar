import Button from "../Button/Button";
import Display from "../Display/Display";
import "./PinPad.css";

const PinPad = (): JSX.Element => {
  return (
    <div className="pinpad-container">
      <Display />
      <Button />
    </div>
  );
};

export default PinPad;