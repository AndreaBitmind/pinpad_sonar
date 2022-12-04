import Button from "../Button/Button";
import Display from "../Display/Display";
import "./pinpad.css";

const pinpadNumbers = [7, 8, 9, 4, 5, 6, 3, 2, 1, 0];

const PinPad = (): JSX.Element => {
  const digits = pinpadNumbers.map((number) => {
    return (
      <li key={number}>
        <Button digit={number} />
      </li>
    );
  });

  return (
    <div className="pinpad-container">
      <Display />
      <ul className="pinpad">{digits}</ul>
    </div>
  );
};

export default PinPad;
