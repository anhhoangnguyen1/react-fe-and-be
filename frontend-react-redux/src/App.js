import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      hello world
      <button className='btn btn-primary'>test</button>
    </div>
  );
}

export default App;
