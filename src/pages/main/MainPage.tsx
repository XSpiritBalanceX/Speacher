import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setError("");
  };

  const handleEnterInPlay = () => {
    if (password !== "eR,Pe5v49cCU") {
      setError("Неверный пароль");
    } else {
      navigate("/game/" + password);
    }
  };

  return (
    <div className="containerMainPage">
      <label htmlFor="password">Введите пароль</label>
      <input
        type="text"
        placeholder="Пароль"
        name="password"
        value={password}
        onChange={handlePassword}
        className="inputMainPage"
      />
      <p className="errorMainPage">{error}</p>
      <button type="button" onClick={handleEnterInPlay} className="enterButton">
        Войти
      </button>
    </div>
  );
};

export default MainPage;
