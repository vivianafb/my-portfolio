import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner'
import { About } from "./components/About/About";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    window.localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  }

  useEffect(() => {
    const savedMode = window.localStorage.getItem('isDarkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  return (
    <div className="App">
      <Header handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />

    </div>
  );
}

export default App;
