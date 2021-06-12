import { useState } from "react";

const Control = ({ addCounter, removeCounter }) => {
  const [count, setCount] = useState(0);

  return <>
    <button onClick={() => {
      addCounter({ id: count, count: 0 });
      setCount(count + 1);
    }}>create</button>
    <button onClick={removeCounter}>remove last counter</button>
  </>
};

const Counter = ({ id, count, setCount, removeCounter }) => {
  return <div>
    <div>{count}</div>
    <button onClick={() => {
      setCount(id, count + 1);
    }}>+</button>
    <button onClick={() => {
      setCount(id, count - 1);
    }}>-</button>
    <button onClick={() => {
      removeCounter(id);
    }}>remove</button>
  </div>
};

const Counters = () => {
  const [counters, setCounters] = useState([]);

  const setCount = (id, newCount) => {
    const newCounters = counters.reduce((acc, item) => {
      if (item.id === id) {
        return [...acc, {...item, count: newCount}];
      }

      return [...acc, item];
    }, []);

    setCounters(newCounters);
  };
  const removeCounter = (id) => {
    const newCounters = counters.reduce((acc, item) => {
      if (item.id === id) {
        return acc;
      }

      return [...acc, item];
    }, []);

    setCounters(newCounters);
  };

  return <>
    <div>{counters.reduce((acc, item) => acc + item.count, 0)}</div>
    <Control
      addCounter={(item) => setCounters([...counters, item])}
      removeCounter={() => {
        counters.pop();
        setCounters([...counters]);
      }}
    />
    {counters.map(({ ...props }) => {
      return <Counter {...props} key={props.id} setCount={setCount} removeCounter={removeCounter}/>
    })}
  </>
};


export default Counters;
