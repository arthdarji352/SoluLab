import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <NavBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
