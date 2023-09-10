import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Settings from "../../components/settings/Settings";
import Board from "../../components/board/Board";
import "./GamePage.scss";

const GamePage = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [players, setPlayers] = useState(0);
  const [cards, setCards] = useState(0);

  const commands = [
    {
      command: "Туз червей",
      callback: () => console.log(transcript),
      matchInterim: true,
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  const startListening = (numberPlayers: number, numberCards: number) => {
    setPlayers(numberPlayers);
    setCards(numberCards);
    setStartGame(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setStartGame(false);
    setPlayers(0);
    setCards(0);
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
