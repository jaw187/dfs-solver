import Card from './card';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const getState = () => {
  const dispatch = useDispatch();

  const stacks = useSelector(state => state.stacks, shallowEqual);
  const stackCounts = useSelector(state => state.stackCounts, shallowEqual);

  return {
    stacks,
    stackCounts
  };
};

const Generator = () => {
  const { stacks, stackCounts } = getState();

  if (stacks.length === 0) {
    return null;
  }

  return (
    <Card>
      <h2>Generator</h2>
      <button>Generate</button>
      <ul>
      {
        stacks.map((stack, i) => (
          <li key={i}>Stack with {stackCounts[i]} lineups</li>
        ))
      }
      </ul>
    </Card>
  );
};

export default Generator;
