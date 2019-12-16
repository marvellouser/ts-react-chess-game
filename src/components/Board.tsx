import React from "react";
import { ChessType } from "../type/enum";
import Chess from "./Chess";

interface IProps {
  chesses: ChessType[];
  onClick?: (num: number) => void;
  isGameOver: boolean;
}
export default function Board({ chesses, onClick, isGameOver }: IProps) {
  const chessList = chesses.map((chessType, index) => (
    <Chess
      type={chessType}
      key={index}
      onClick={() => {
        !isGameOver && onClick && onClick(index);
      }}
    />
  ));
  return (
    <div className="board">
      {/* <Chess type={ChessType.red} /> */}
      {chessList}
    </div>
  );
}
