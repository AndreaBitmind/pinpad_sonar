import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import "./pinpad.css";

const pinpadNumbers = [7, 8, 9, 4, 5, 6, 3, 2, 1, 0];
const pin = ["8", "5", "3", "0"];
const initialState: string[] = [];
const messageOK = ["OK"];
const messageERROR = ["ERROR"];
const messageLOCKED = ["LOCKED"];
let attempt = 0;
let timeOut: NodeJS.Timeout;
let interval = 1000;

const PinPad = (): JSX.Element => {
  const [result, setResult] = useState(initialState);
  const [displayedResult, setDisplayedResult] = useState(initialState);

  const handleChange = (digit: number) => {
    if (result.length < 4) {
      setResult([...result, digit.toString()]);
      setDisplayedResult([...displayedResult, "*"]);

      if (result.length === 3) {
        setDisplayedResult([...displayedResult, digit.toString()]);
      }
    }
  };

  useEffect(() => {
    if (result.length === 4) {
      if (pin.toString() === result.toString()) {
        timeOut = setTimeout(() => setDisplayedResult(messageOK), interval);
      } else {
        attempt++;
        timeOut = setTimeout(() => setDisplayedResult(messageERROR), interval);
      }

      if (attempt === 3) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => setDisplayedResult(messageLOCKED), interval);
        attempt = 0;
        interval = 30000;
      }

      timeOut = setTimeout(() => {
        setDisplayedResult([]);
        setResult([]);
      }, interval + 1000);
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
      <div className="pinpad-container_header"></div>
      <Display result={displayedResult} />
      <ul className="pinpad">{digits}</ul>
    </div>
  );
};

export default PinPad;
