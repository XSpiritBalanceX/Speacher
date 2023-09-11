import { scoreCounter } from "../../utilities/scoreCounter";
import { IBoardProps } from "../../types/GameTypes";
import "./Board.scss";

const Board = ({ players, cards }: IBoardProps) => {
  return (
    <div className="boardContainer">
      {players.map((el, ind) => {
        return (
          <div key={ind} className="playersContainer">
            <div className="infoPlayers">
              <p>Игрок {el.player}</p>
              <p>{scoreCounter(el.card)}</p>
            </div>
            {el.cardImage.map((url, index) => {
              return (
                <div key={index} className="cards">
                  <img src={url} alt="card" />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
