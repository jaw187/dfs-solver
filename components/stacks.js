import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const getState = () => {
  const dispatch = useDispatch();

  const stacks = useSelector(state => state.stacks, shallowEqual);

  const removeStack = (i) => dispatch({ type: "REMOVE_STACK", payload: i });

  return {
    stacks,
    removeStack
  }
}

const Stacks = () => {
  const {
    stacks,
    removeStack
  } = getState();

  if (!stacks || stacks.length === 0) {
    return null;
  }

  const remove = (i) => {
    return () => {
      removeStack(i)
    }
  }

  return (
    <Card>
      <div>
        <h2 style={{ marginTop: 0 }}>Stacks</h2>
        {
          stacks.map((stack, j) => (
            <div key={j}>
              <button onClick={remove(j)}>Delete</button>
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
