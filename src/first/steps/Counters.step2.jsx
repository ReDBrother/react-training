import { useState } from "react";

const Counter = ({ begin }) => {
  const [count, setCount] = useState(begin);

  return <div>
    <div>{count}</div>
    <button onClick={() => {
      setCount(count + 1);
    }}>+</button>
    <button onClick={() => {
      setCount(count - 1);
    }}>-</button>
  </div>
}

const Counters = () => {
  const [counters, setCounters] = useState([]);

  return <div>
    <button onClick={() => {
      const config = {
        id: counters.length,
        begin: 0,
      };

      setCounters([...counters, config]);
    }}>create</button>
    {counters.map(({ id, begin }) =>
      <Counter
        key={id}
        begin={begin}
      />
    )}
  </div>
};

export default Counters;
