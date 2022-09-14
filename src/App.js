import "./App.css";
import SayMyName from "./Components/SayMyName";
import Pessoa from "./Components/pessoa";
import Frase from "./Components/Frase";
import List from "./Components/List";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <SayMyName nome="Emanuel" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Emanuel"
        idade="21"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <Frase />
      <Frase />
      <List />
    </div>
  );
}

export default App;
