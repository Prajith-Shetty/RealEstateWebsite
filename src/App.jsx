import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import './App.css';
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      {/* we are enclosing Header and Hero inside a div for getting the white gradient effect */}
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
    </div>
  );
}

export default App;
