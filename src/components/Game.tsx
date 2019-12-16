import React from "react";
import Board from "./Board";
import { ChessType, GameStatus } from "../type/enum";
import Chess from "./Chess";

interface IState {
  chesses: ChessType[];
  isGameOver: boolean;
  gameStatus: GameStatus;
  nextChess: ChessType.red | ChessType.black;
}
export default class Game extends React.PureComponent<{}, IState> {
  state: IState = {
    chesses: [],
    isGameOver: false,
    gameStatus: GameStatus.gaming,
    nextChess: ChessType.red
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { chesses, isGameOver } = this.state;
    return (
      <Board
        chesses={chesses}
        onClick={this.handleClick}
        isGameOver={isGameOver}
      />
    );
  }
  init = () => {
    const chesses = [];
    for (let i = 0; i < 9; i++) {
      chesses.push(ChessType.none);
    }
    this.setState({
      chesses
    });
  };

  handleClick = (num: number) => {
    const { chesses, isGameOver, nextChess } = this.state;
    const newChesses = [...chesses];
    newChesses[num] = nextChess;
    const newNextChess =
      nextChess === ChessType.red ? ChessType.black : ChessType.red;
    const gameStatus = this.getGameStatus(num, newChesses, nextChess);
    console.log(gameStatus);
    this.setState({
      chesses: newChesses,
      nextChess: newNextChess,
      gameStatus: gameStatus,
      isGameOver: gameStatus !== GameStatus.gaming
    });
  };

  getGameStatus = (
    num: number,
    chesses: ChessType[],
    nextChess: ChessType
  ): GameStatus => {
    const horIndex = Math.floor(num / 3) * 3;
    const verIndex = num % 3;
    let status;
    if (
      (chesses[horIndex] === chesses[horIndex + 1] &&
        chesses[horIndex] === chesses[horIndex + 2]) ||
      (chesses[verIndex] === chesses[verIndex + 3] &&
        chesses[verIndex] === chesses[verIndex + 6]) ||
      (chesses[4] !== ChessType.none &&
        ((chesses[0] === chesses[4] && chesses[0] === chesses[8]) ||
          (chesses[2] === chesses[4] && chesses[2] === chesses[6])))
    ) {
      status =
        nextChess === ChessType.black ? GameStatus.blackWin : GameStatus.redWin;
    } else if (!chesses.includes(ChessType.none)) {
      status = GameStatus.equal;
    } else {
      status = GameStatus.gaming;
    }
    return status;
  };
}
