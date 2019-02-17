import React, { useState } from 'react';
import dayjs from 'dayjs';

function App(props) {
  const [day, setDay] = useState(dayjs());
  const dispDay = day.format('YYYY/MM/DD');
  return (
    <React.Fragment>
      <h1>Counter bundled by Metro Bundler!</h1>
      <p>{dispDay}</p>
      <div>
        <button
          type="button"
          name="increment"
          onClick={() => {
            setDay(day.add(1, 'day'));
          }}
        >
          increment
        </button>
        <button
          type="button"
          name="decrement"
          onClick={() => {
            setDay(day.subtract(1, 'day'));
          }}
        >
          decrement
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
