import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
    </div>
  );
}

export default App;
