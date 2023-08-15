// Greetings.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const {
    greeting, isLoading, isError,
  } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  } if (isError) {
    return (
      <h3>Something went wrong...</h3>
    );
  }
  return (
    <div>
      {greeting.map((greet) => (
        <p key={greet.id}>{greet.content}</p>
      ))}
    </div>
  );
};

export default Greeting;
