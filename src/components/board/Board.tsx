import { scoreCounter } from "../../utilities/scoreCounter";
import "./Board.scss";

interface IBoardProps {
  players: {
    player: number;
    cardImage: string[];
    card: { name: string; suit: string }[];
  }[];
  cards: number;
}

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
