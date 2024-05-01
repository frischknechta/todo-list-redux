import "./App.css";

// Components
import Header from "./components/Header";
import Todos from "./components/Todos";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <>
      <main>
        <Header />
        <Todos />
        <ToolBar />
      </main>
    </>
  );
}

export default App;
