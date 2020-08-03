import React from 'react';
import CounterGroup from './components/counterGroup'

function App(props) {
  return (
    <div >
      <CounterGroup store = {props.store}/>
    </div>
  );
}

export default App;
