import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import './App.css';

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
    </div>
  );
}

export default App;
