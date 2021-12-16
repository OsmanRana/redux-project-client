
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SevicesDetail from './components/Home/Services/ServicesDetail/SevicesDetail';
import About from './components/Home/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="servicesDetail" element={<SevicesDetail />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>,
      
    </div>
  );
}

export default App;
