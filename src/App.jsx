import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
    </div>
  );
}

export default App;
