import { Header } from "./components/Header/Header";
import { Clients } from "./components/Clients/Clients";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Clients />
      </div>
    </>
  );
}

export default App;
