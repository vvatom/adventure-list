import "./App.scss";
import { useAuth } from "./hooks/auth";
import { TokenContext } from "./context/tokenContext";

function App() {
  const { token, login } = useAuth();

  return (
    <TokenContext.Provider value={token}>
      <div className="App">
        <button onClick={login}>login</button>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
