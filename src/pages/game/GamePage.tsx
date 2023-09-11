import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Settings from "../../components/settings/Settings";
import Board from "../../components/board/Board";
import { speechCommands } from "../../utilities/speechCommands";
import { IPlayers } from "../../types/GameTypes";
import { allCards } from "../../utilities/cardDeck";
import "./GamePage.scss";

const GamePage = () => {
  const [startGame, setStartGame] = useState<boolean>(false);
  const [players, setPlayers] = useState<IPlayers[]>([]);
  const [cards, setCards] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentCountCards, setCurrentCountCards] = useState(0);
  const [cardDeck, setCardDeck] = useState(allCards);

  const addingCard = (id: number) => {
    const newState = players.slice();
    const card = cardDeck.find((el) => el.id === id);

    newState.forEach((el, ind) => {
      if (ind === currentPlayer && cards !== el.cardImage.length && card) {
        el.cardImage.push(card.image);
        el.card.push({ name: card.name, suit: card.suit });
        setCardDeck((prevState) => {
          return prevState.filter((el) => el.id !== id);
        });
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
    setCardDeck(allCards);
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
