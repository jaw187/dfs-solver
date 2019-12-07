import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const getState = () => {
  const dispatch = useDispatch();

  const stacks = useSelector(state => state.stacks, shallowEqual);

  const removeStack = (i) => dispatch({ type: "REMOVE_STACK", payload: i });
  const setStackN = (i, n) => {
    dispatch({
      type: "SET_STACK_N",
      payload: { i, n }
    });
  }

  return {
    stacks,
    removeStack,
    setStackN
  };
};

const Stacks = () => {
  const {
    stacks,
    removeStack,
    setStackN
  } = getState();

  if (!stacks || stacks.length === 0) {
    return null;
  }

  const remove = (i) => {
    return () => {
      removeStack(i)
    }
  }

  const onChange = (i) => {
    return (event) => {
      event.target.value = Number(event.target.value);
      setStackN(i, event.target.value)
    }
  }

  return (
    <Card>
      <div>
        <h2 style={{ marginTop: 0 }}>Stacks</h2>
        {
          stacks.map((stack, j) => (
            <div key={j}>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                  <input type="text" onChange={onChange(j)} /> lineups of this stack
                </div>
                <button onClick={remove(j)}>Delete</button>
              </div>
              <ul>
                {
                  stack.map((player, i) => (
                    <li key={i}>{player.displayName}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </Card>
  );
};

export default Stacks;
