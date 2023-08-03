import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greetings';
import { FetchGreeting } from './redux/greetingSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchGreeting());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
