import React from "react";
import "./Settings.scss";

interface ISettingsProps {
  startGame: boolean;
  cbStartListening: () => void;
  cbStopListening: () => void;
}

const Settings = ({
  startGame,
  cbStartListening,
  cbStopListening,
}: ISettingsProps) => {
  const handleStartGame = () => {
    cbStartListening();
  };

  const handleStopGame = () => {
    cbStopListening();
  };
  return (
    <div className="containerSetting">
      {!startGame && (
        <React.Fragment>
          <div className="settingsForPlayers">
            <label htmlFor="players">Количество игроков</label>
            <select name="players">
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
            <label htmlFor="cards">Количество карт</label>
            <select name="cards">
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
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
