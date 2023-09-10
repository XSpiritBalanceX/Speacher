import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import aceOfHeart from "./images/aceOfHeart.jpg";
import queenOfSpades from "./images/queenOfSpades.jpg";
import sixOfClub from "./images/sixOfClubs.jpg";
import kingOfTambourine from "./images/kingOfTambourine.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  const [images, setImages] = useState("");
  const queenPronansiation = ["Дама пик", "Пиковая дама"];
  const sixPronansiation = ["Шестерка треф", "Шестёрка треф"];
  const kingPronansiation = ["Король бубен", "Бубновый король"];

  /*  const commands = [
    {
      command: "Туз червей",
      callback: () => setImages(aceOfHeart),
      matchInterim: true,
    },
    {
      command: queenPronansiation,
      callback: () => setImages(queenOfSpades),
      matchInterim: true,
    },
    {
      command: sixPronansiation,
      callback: () => setImages(sixOfClub),
      matchInterim: true,
    },
    {
      command: kingPronansiation,
      callback: () => setImages(kingOfTambourine),
      matchInterim: true,
    },
  ]; */

  /* const { transcript, resetTranscript } = useSpeechRecognition({ commands }); */

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  /*  const stopListening = () => {
    SpeechRecognition.stopListening();
    setImages("");
    resetTranscript();
  }; */

  return (
    /* <div>
      <div>
        <p>You: {transcript ? transcript : ""}</p>
      </div>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <div>
        {images && (
          <img
            src={images}
            alt="card"
            style={{ width: "20em", height: "30em" }}
          />
        )}
      </div>
    </div> */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game/:id" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
