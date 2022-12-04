import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import "./pinpad.css";

const pinpadNumbers = [7, 8, 9, 4, 5, 6, 3, 2, 1, 0];
const pin = ["8", "5", "3", "0"];
const initialState: string[] = [];
const messageOK = ["OK"];
const messageERROR = ["ERROR"];

const PinPad = (): JSX.Element => {
  const [result, setResult] = useState(initialState);

  const handleChange = (digit: number) => {
    if (result.length < 4) {
      setResult([...result, digit.toString()]);
    }
  };

  useEffect(() => {
    if (result.length === 4) {
      if (pin.toString() === result.toString()) {
        setTimeout(() => setResult(messageOK), 1000);
      } else {
        setTimeout(() => setResult(messageERROR), 1000);
      }

      setTimeout(() => setResult([]), 2000);
    }
  }, [result]);

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
