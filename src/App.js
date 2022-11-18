import WidgetWeather from './components/widget-weather';
import './App.css';
import { useState } from 'react';

function App () {
  const [cityName, setCityName] = useState();
  const onBlur = (event) => {
    const value = event.target.value;
    console.log(value);
    setCityName(value)
  };

  return (
    <div className="App">
      <div>
        <ul id="growing-search-freebie">
          <li>
            <div class="growing-search">
              <div class="input">
                <input
                  onBlur={onBlur}
                  type="text"
                  name="search"
                  placeholder="Type your city"
                />
              </div><div class="submit">
                <button type="submit" name="go_search">
                  <span class="fa fa-search"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <WidgetWeather city={cityName} />
    </div>
  );
}

export default App;
