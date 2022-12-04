import "./display.css";

interface DisplayProps {
  result: string[];
}

const Display = ({ result }: DisplayProps): JSX.Element => {
  return <div className="display">{result}</div>;
};

export default Display;
