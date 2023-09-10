import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./GamePage.scss";
import Settings from "../../components/settings/Settings";

const GamePage = () => {
  const [startGame, setStartGame] = useState<boolean>(false);

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

  const startListening = () => {
    setStartGame(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setStartGame(false);
    resetTranscript();
  };

  return (
    <div>
      <div>
        <Settings
          startGame={startGame}
          cbStartListening={startListening}
          cbStopListening={stopListening}
        />
      </div>
    </div>
  );
};

export default GamePage;
