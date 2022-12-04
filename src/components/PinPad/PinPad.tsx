import { useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import "./pinpad.css";

const pinpadNumbers = [7, 8, 9, 4, 5, 6, 3, 2, 1, 0];
const initialState: string[] = [];

const PinPad = (): JSX.Element => {
  const [result, setResult] = useState(initialState);

  const handleChange = (digit: number) => {
    if (result.length < 4) {
      setResult([...result, digit.toString()]);
    }
  };

  const digits = pinpadNumbers.map((number) => {
    return (
      <li key={number}>
        <Button digit={number} handleChange={() => handleChange(number)} />
      </li>
    );
  });

  return (
    <div className="pinpad-container">
      <Display result={result} />
      <ul className="pinpad">{digits}</ul>
    </div>
  );
};

export default PinPad;
