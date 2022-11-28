import './App.css';
import LoginPage from './components/login';
import MainPage from './components/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
