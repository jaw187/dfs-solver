import Link from 'next/link';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const getState = () => {
  const view = useSelector(state => state.view, shallowEqual);

  const dispatch = useDispatch();
  const setView = (selected) => {
    dispatch({
      type: 'SET_VIEW',
      payload: selected
    });
  };

  return { view, setView };
};

const Navigation = () => {

  const { view, setView } = getState();

  const clear = () => {
    if (window && window.localStorage) {
      window.localStorage.clear();
      window.location.reload(true);
    }
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
  };

  const linkContainerStyle = {
    padding: 16
  };

  const buttonStyle = {
    padding: '8px 16px 8px 16px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f6f6f6'
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f60',
    color: '#fff'
  }

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
    color: '#fff'
  }

  const set = (which) => {
    return () => setView(which);
  };

  const navigationButton = (id, display) => (
    <div style={linkContainerStyle}>
      <button style={view === id ? selectedButtonStyle : buttonStyle} onClick={set(id)} selected>{display}</button>
    </div>
  );

  return (
    <div style={containerStyle}>
      {navigationButton('slatepicker', 'Slate')}
      {navigationButton('importprojections', 'Projections')}
      {navigationButton('playerpool', 'Player Pool')}
      {navigationButton('stackbuilder', 'Stacks')}
      {navigationButton('results', 'Lineups')}
      <div style={linkContainerStyle}>
      <button style={clearButtonStyle} onClick={clear}>Clear</button>
    </div>
    </div>
  )
};

export default Navigation;
