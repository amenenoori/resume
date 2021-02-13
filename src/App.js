import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Home></Home>
        <About></About>
        <Services></Services>
        <Works></Works>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
