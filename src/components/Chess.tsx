import React from "react";
import { ChessType } from "../type/enum";
import "./chess-game.css";
interface IProps {
  type: ChessType;
  onClick?: () => void;
}
export default function Chess({ type, onClick }: IProps) {
  let result = null;
  if (type === ChessType.red) {
    result = <div className="chess chess-red"></div>;
  }
  if (type === ChessType.black) {
    result = <div className="chess chess-black"></div>;
  }
  return (
    <div
      className="chess-wrap"
      onClick={() => {
        if (type === ChessType.none) {
          onClick && onClick();
        }
      }}
    >
      {result}
    </div>
  );
}
