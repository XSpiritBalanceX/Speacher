import "./Board.scss";

interface IBoardProps {
  players: {
    player: number;
    card: any[];
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
            </div>
            {el.card.map((url, index) => {
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
