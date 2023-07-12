
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
