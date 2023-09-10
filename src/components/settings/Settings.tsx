import React, { useState } from "react";
import "./Settings.scss";

interface ISettingsProps {
  startGame: boolean;
  cbStartListening: (numberPlayers: number, numberCards: number) => void;
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
    cbStartListening(players, cards);
  };

  const handleStopGame = () => {
    cbStopListening();
  };

  const handlePlayers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayers(Number(e.target.value));
  };

  const handleCards = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
            </select>
            <label htmlFor="cards">Количество карт</label>
            <select name="cards" onChange={handleCards}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
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
