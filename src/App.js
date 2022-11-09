import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import PageNotFound from './components/404';
import About from './components/about';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Content type={'all'}/>} >
            <Route path='/card/:cardId' element={<Content />} />
          </Route>
          <Route path='/about' element={<About />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
