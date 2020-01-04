import React from "react";
import Card from "./card"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { log } from './utils';

const getState = () => {
  const dispatch = useDispatch();

  const stacks = useSelector(state => state.stacks, shallowEqual);
  const view = useSelector(state => state.view);
  const stackCounts = useSelector(state => state.stackCounts);

  const removeStack = (i) => dispatch({ type: "REMOVE_STACK", payload: i });
  const setStackN = (i, n) => {
    dispatch({
      type: "SET_STACK_N",
      payload: { i, n }
    });
  };

  const moveStack = (j, which) => {
    dispatch({
      type: "MOVE_STACK",
      payload: { j, which }
    });
  };

  return {
    stacks,
    removeStack,
    setStackN,
    view,
    stackCounts,
    moveStack
  };
};

const Stacks = () => {
  const {
    stacks,
    removeStack,
    setStackN,
    view,
    stackCounts,
    moveStack
  } = getState();

  if (view !== 'stackbuilder') {
    return null;
  }

  if (!stacks || stacks.length === 0) {
    return null;
  }

  const remove = (i) => {
    return () => {
      log('stack remove');
      removeStack(i)
    }
  };

  const onChange = (i) => {
    return (event) => {
      event.target.value = Number(event.target.value);
      setStackN(i, event.target.value)
    }
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap"
  };

  const marks = [
    {
      value: 0,
    },
    {
      value: 5
    },
    {
      value: 10
    },
    {
      value: 15
    }
  ];

  const handleSliderChange = (i) => {
    return (event, newValue) => {
      setStackN(i, newValue);
    };
  };

  const handleInputChange = (i) => {
    return event => {
      const newValue = event.target.value === '' ? '' : Number(event.target.value);
      setStackN(i, newValue)
    };
  };

  const handleBlur = (i) => {
    return () => {
      if (stackCounts[i] < 0) {
        setStackN(i, 1)
      } else if (stackCounts[i] > 20) {
        setStackN(i, 20)
      }
    };
  };

  const move = (j, which) => {
    return () => {
      moveStack(j, which);
    }
  };

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Stacks</h2>
      <div style={cardContainer}>
        {
          stacks.map((stack, j) => {
            if (!stackCounts[j]) {
              stackCounts[j] = 10;
            }

            return (
              <Card>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }} key={j}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div onClick={move(j, 'left')}>Move Left</div>
                    <div onClick={move(j, 'right')}>Move Right</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <ul>
                      {
                        stack.map((player, i) => (
                          <li key={i}>{player.displayName}</li>
                        ))
                      }
                    </ul>
                  </div>
                  <div style={{display: "flex", flexDirection: "row" }}>
                    <div style={{ minWidth: 240, marginRight: 16 }}>
                      No. of lineups
                      <Slider
                        defaultValue={stackCounts[j]}
                        value={stackCounts[j]}
                        step={1}
                        marks={marks}
                        min={1}
                        max={20}
                        onChange={handleSliderChange(j)}
                        aria-labelledby="input-slider"
                      />
                    </div>
                    <div style={{ marginTop: 4 }}>
                      <Input
                        value={stackCounts[j]}
                        margin="dense"
                        onChange={handleInputChange(j)}
                        onBlur={handleBlur(j)}
                        inputProps={{
                          step: 1,
                          min: 1,
                          max: 20,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row"}}>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Button onClick={remove(j)} variant="contained" color="secondary">
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })
        }
      </div>
    </div>
  );
};

export default Stacks;
