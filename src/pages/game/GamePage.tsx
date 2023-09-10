import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Settings from "../../components/settings/Settings";
import Board from "../../components/board/Board";
import "./GamePage.scss";

export interface IPlayers {
  player: number;
  card: string[];
}

const GamePage = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [players, setPlayers] = useState<IPlayers[]>([]);
  const [cards, setCards] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentCountCards, setCurrentCountCards] = useState(0);

  const addingCard = (card: string) => {
    const newState = players.slice();
    newState.forEach((el, ind) => {
      if (ind === currentPlayer && cards !== el.card.length) {
        el.card.push(card);
        setCurrentCountCards(currentCountCards + 1);
      }
    });
    setPlayers(newState);
    currentPlayer === players.length
      ? setCurrentPlayer(0)
      : setCurrentPlayer(currentPlayer + 1);
  };

  const commands = [
    {
      command: "Туз червей",
      callback: () => addingCard(require("../../images/aceofhearts.jpg")),
    },
    {
      command: "Дама пик",
      callback: () => addingCard(require("../../images/queenofspades.jpg")),
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  const startListening = (numberPlayers: IPlayers[], numberCards: number) => {
    setPlayers(numberPlayers);
    setCards(numberCards);
    setStartGame(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setStartGame(false);
    setPlayers([]);
    setCurrentPlayer(0);
    setCards(0);
    setCurrentCountCards(0);
    resetTranscript();
  };

  return (
    <div>
      <Settings
        startGame={startGame}
        cbStartListening={startListening}
        cbStopListening={stopListening}
      />
      {startGame && <Board players={players} cards={cards} />}
    </div>
  );
};

export default GamePage;
