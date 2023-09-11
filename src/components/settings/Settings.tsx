import React, { useState } from "react";
import { IPlayers } from "../../types/GameTypes";
import "./Settings.scss";

interface ISettingsProps {
  startGame: boolean;
  cbStartListening: (numberPlayers: IPlayers[], numberCards: number) => void;
  cbStopListening: () => void;
}

const Settings = ({
  startGame,
  cbStartListening,
  cbStopListening,
}: ISettingsProps) => {
  const [players, setPlayers] = useState(2);
  const [cards, setCards] = useState(2);

  const handleStartGame = () => {
    const numberPlayers = Array(players)
      .fill(null)
      .map((_, ind) => {
        return { player: ind + 1, cardImage: [], card: [] };
      });

    cbStartListening(numberPlayers, cards);
  };

  const handleStopGame = () => {
    cbStopListening();
  };

  const handlePlayers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayers(Number(e.target.value));
  };

  const handleCards = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCards(Number(e.target.value));
  };

  return (
    <div className="containerSetting">
      {!startGame && (
        <React.Fragment>
          <div className="settingsForPlayers">
            <label htmlFor="players">Количество игроков</label>
            <select name="players" onChange={handlePlayers}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <p>Количество карт</p>
            <div className="radioContainer">
              <div>
                <label htmlFor="twocards">2</label>
                <input
                  type="radio"
                  value={2}
                  name="twocards"
                  onChange={handleCards}
                />
              </div>
              <div>
                <label htmlFor="twocards">3</label>
                <input
                  type="radio"
                  value={3}
                  name="twocards"
                  onChange={handleCards}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleStartGame}
            className="startButton"
          >
            Начать игру
          </button>
        </React.Fragment>
      )}
      {startGame && (
        <button type="button" onClick={handleStopGame} className="endButton">
          Завершить игру
        </button>
      )}
    </div>
  );
};

export default Settings;
