import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => setDateTime('2020-11-13T22:46'), []);

  const [timeZone, setTimeZone] = useState('Europe/Prague');
  const handleTimeZoneChange = (e) => {
    setTimeZone(e.target.value);
  };

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`)
      .then((resp) => resp.json())
      .then((json) => {
        setDateTime(json.datetime);
        //setTimeZone(json.timezone) a v divu pak {timeZone}, to tam asi byt nemusi;
      });
  }, [timeZone]);

  return (
    <div>
      <div>
        {dateTime} <br />
        <br />
      </div>
      <form>
        <select onChange={handleTimeZoneChange} value={timeZone}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </form>
    </div>
  );
  //useEffect(() => alert('kolik je hodin?'), []);
  // return <div></div>;
};

render(<App />, document.querySelector('#app'));
