import React from 'react';

const Counter = ({ initialCounter }) => {
  const [counter, setCounter] = React.useState(initialCounter);

  const onIncrement = () => {
    setCounter(c => c + 1);
  };

  const onDecrement = () => {
    setCounter(c => c - 1);
  };

  return (
    <div>
      {counter}

      <div>
        <button onClick={onIncrement} type="button">
          Increment
        </button>
        <button onClick={onDecrement} type="button">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
