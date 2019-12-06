import React from 'react'
import Card from './card';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const getState = () => {
  const slates = useSelector(state => state.slates, shallowEqual);
  const dispatch = useDispatch();
  const setSelectedSlate = (selected) => {
    dispatch({
      type: 'SET_SELECTED_SLATE',
      payload: selected
    });
  };

  return { slates, setSelectedSlate };
};

const SlatePicker = () => {

  const { slates, setSelectedSlate } = getState();
  const draftGroupIds = Object.keys(slates);

  let selected = draftGroupIds && draftGroupIds[0]
  const selectSlate = () => setSelectedSlate(selected);

  const onChange = (event) => {
    selected = event.target.value
  }

  return (
    <Card>
      <h2 style={{ marginTop: 0 }}>Pick a slate</h2>
      <div>
        <select onChange={onChange}>
          {
            draftGroupIds && draftGroupIds.map((draftGroupId) => {
              const slate = slates[draftGroupId];
              const startTime = new Date((slate.StartDateEdt.substring(6, slate.StartDateEdt.length - 2) - 0));
              const lineText = `${slate.SportDisplayName} ${slate.GameType.GameStyle.Name} at ${startTime} ${slate.ContestStartTimeSuffix}`;
              return (
                <option value={draftGroupId} key={draftGroupId}>{lineText}</option>
              );
            })
          }
        </select>
      </div>
      <div>
        <button onClick={selectSlate}>Select</button>
      </div>
    </Card>
  )
}

export default SlatePicker
