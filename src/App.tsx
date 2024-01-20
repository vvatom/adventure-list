import "./App.scss";
import { useAuth } from "./hooks/auth";
import { TokenContext } from "./context/tokenContext";
import CharacterCreator from "./components/CharacterCreator";

function App() {
  const { token, login } = useAuth();

  return (
    <TokenContext.Provider value={token}>
      <div className="App">
        {token ? "zalogowano" : <button onClick={login}>login</button>}
      </div>
      <CharacterCreator></CharacterCreator>
    </TokenContext.Provider>
  );
}

export default App;
