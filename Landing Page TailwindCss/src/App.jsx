import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";

function App() {
  return (
    <h1 className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <NavBar />
      <Slogan />
      <Content />
    </h1>
  );
}

export default App;
