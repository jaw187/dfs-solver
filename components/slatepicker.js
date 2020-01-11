import React from 'react'
import Card from './card';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const getState = () => {
  const slates = useSelector(state => state.slates, shallowEqual);
  const view = useSelector(state => state.view);
  const projection = useSelector(state => state.projection);
  const selectedSlate = useSelector(state => state.selectedSlate);

  const dispatch = useDispatch();
  const setSelectedSlate = (selected) => {
    dispatch({
      type: 'SET_SELECTED_SLATE',
      payload: selected
    });

    const nextView = projection ? 'playerpool' : 'importprojections';
    dispatch({
      type: 'SET_VIEW',
      payload: nextView
    });
  };

  return { slates, setSelectedSlate, view, selectedSlate };
};

const SlatePicker = () => {

  const { slates, setSelectedSlate, view, selectedSlate } = getState();

  const draftGroupIds = Object.keys(slates);

  let selected = draftGroupIds && draftGroupIds[0]
  const selectSlate = () => setSelectedSlate(selected);

  const onChange = (event) => {
    setSelectedSlate(event.target.value);
  }

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  }

  const componentContainer = {
    padding: 16
  };

  const buttonContainerStyle = {
    paddingTop: 16
  }

  if (view !== 'slatepicker') {
    return null;
  }

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Upcoming Slates</h2>
      <div style={cardContainer}>
        <Card>
          <div>
            <FormControl style={{ minWidth: 480,  }}>
              <InputLabel id="select-label">Select a slate</InputLabel>
              <Select onChange={onChange} labelId="select-label" value={selectedSlate}>
                {
                  draftGroupIds && draftGroupIds.map((draftGroupId) => {
                    const slate = slates[draftGroupId];
                    const startTime = new Date((slate.StartDateEdt.substring(6, slate.StartDateEdt.length - 2) - 0));
                    const lineText = `${slate.SportDisplayName} ${slate.GameType.GameStyle.Name} on ${startTime} ${slate.ContestStartTimeSuffix || ''}`;
                    return (
                      <MenuItem value={draftGroupId} key={draftGroupId}>{lineText}</MenuItem>
                    );
                  })
                }
              </Select>
            </FormControl>
          </div>

          <div style={buttonContainerStyle}>
            <Button variant="contained" onClick={selectSlate} color="primary">Select</Button>
          </div>
        </Card>
      </div>
    </div>
  )
};

export default SlatePicker
