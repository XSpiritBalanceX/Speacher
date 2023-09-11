import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Settings from "../../components/settings/Settings";
import Board from "../../components/board/Board";
import { speechCommands } from "../../utilities/speechCommands";
import { Card, Suit, IPlayers } from "../../types/GameTypes";
import "./GamePage.scss";

const GamePage = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [players, setPlayers] = useState<IPlayers[]>([]);
  const [cards, setCards] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentCountCards, setCurrentCountCards] = useState(0);

  const addingCard = (image: string, card: { name: Card; suit: Suit }) => {
    const newState = players.slice();
    newState.forEach((el, ind) => {
      if (ind === currentPlayer && cards !== el.cardImage.length) {
        el.cardImage.push(image);
        el.card.push(card);
        setCurrentCountCards(currentCountCards + 1);
      }
    });

    setPlayers(newState);

    setCurrentPlayer(currentPlayer + 1);
  };

  useEffect(() => {
    currentPlayer === players.length && setCurrentPlayer(0);
    // eslint-disable-next-line
  }, [currentPlayer]);

  const { transcript, resetTranscript } = useSpeechRecognition({
    commands: speechCommands(addingCard),
  });
  console.log(transcript);
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
