import React from "react";
import "./Square.css";

interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, squareIdx } = props;
  return (
    <>
      <div className="square">{val}</div>
    </>
  );
};

export default Square;
