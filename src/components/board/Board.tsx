import "./Board.scss";

interface IBoardProps {
  players: number;
  cards: number;
}

const Board = ({ players, cards }: IBoardProps) => {
  return (
    <div className="boardContainer">
      {Array(players)
        .fill(null)
        .map((_, ind) => {
          return (
            <div key={ind} className="playersContainer">
              <div className="infoPlayers">
                <p>Игрок {ind + 1}</p>
              </div>
              {Array(cards)
                .fill(null)
                .map((_, index) => {
                  return (
                    <div key={index} className="cards">
                      card {ind + 1}
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
