import React from "react";
import { ChessType } from "../type/enum";

interface IProps {
  type: ChessType;
  onClick?: () => void;
}
export default function Chess(props: IProps) {
  let result = null;
  return <div className="chess-wrap">{result}</div>;
}
