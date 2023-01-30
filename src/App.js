import './App.css';
import Home from './pages/HomePage';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/search' element={<><SearchPage /></>}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
