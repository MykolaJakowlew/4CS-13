import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import store from './store'; // => result of configureStore
import { Provider } from 'react-redux';
import Comp3 from './components/comp3';

function App () {

  return (
    <div className="App">
      <Provider store={store}>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </Provider>
    </div>
  );
}

export default App;
