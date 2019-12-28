import Card from './card';
import Joi from '@hapi/joi';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const getState = () => {
  const dispatch = useDispatch();

  const importErrors = useSelector(state => state.importErrors, shallowEqual);
  const rawProjection = useSelector(state => state.rawProjection, shallowEqual);
  const projection = useSelector(state => state.projection, shallowEqual);
  const view = useSelector(state => state.view);

  const setRawProjection = (value) => {
    dispatch({
      type: 'SET_RAW_PROJECTION',
      payload: value
    });
  }

  const importProjection = () => {

    dispatch({ type: 'CLEAR_IMPORT_ERRORS' });

    if (!rawProjection) {
      return dispatch({
        type: 'ADD_IMPORT_ERROR',
        payload: new Error('empty textarea')
      });
    }

    const validationSchema = Joi.object({
      player: Joi.string().required(),
      value: Joi.number().required(),
      ownership: Joi.number().required()
    });

    // track players, they should be unique
    const players = {};

    // assumes that values will not contain commas
    let errors = false;
    const formattedProjection = rawProjection.split('\n').map((line) => {

      const [player, projection, ownership] = line.split(',');
      const result = {
        player,
        value: Number(projection),
        ownership: Number(ownership)
      };

      if (players[player]) {
        errors = true;
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: new Error(`Duplicate player - ${player}`)
        });
      }

      players[player] = true;

      const validation = validationSchema.validate(result);
      if (validation.error) {
        errors = true;
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: validation
        });
      }

      return result;
    });

    if (!errors) {
      dispatch({
        type: 'SET_PROJECTION',
        payload: formattedProjection
      });
    }
  };

  return {
    setRawProjection,
    projection,
    importErrors,
    importProjection,
    view
  };
};

const componentContainer = {
  padding: 16
};

const cardContainer = {
  display: 'flex',
  flexDirection: 'row'
};

const placeholder = `Copy and paste a csv file of your own projections with desired ownership percentages.  Format each line of your csv like this:

player id, projection, desired ownership
`;

const ImportProjection  = () => {

  const { importErrors, projection, setRawProjection, importProjection, view } = getState();

  if (view !== 'importprojections') {
    return null;
  }

  const onChange = (event) => setRawProjection(event.target.value);

  const textAreaStyle = {
    width: 480,
    padding: 8
  };

  const buttonContainerStyle = {
    paddingBottom: 24
  }

  const buttonStyle = {
    paddingLeft: 36,
    paddingRight: 36
  };

  const infoContainer = {
    paddingBottom: 36
  };

  return (
    <div style={componentContainer}>
      <h2 style={{ marginTop: 0 }}>Your Projections</h2>
      <div style={cardContainer}>
        <Card>
          {importErrors && !!importErrors.length && (
            <div style={infoContainer}>
              <h3 style={{ marginTop: 0 }}>Import Has Errors</h3>
              <ul>
                {importErrors.map((err) => (
                  <li>{(err.error && err.error.toString()) || err.toString()}</li>
                ))}
              </ul>
            </div>
          )}
          {
            projection && (
              <div style={infoContainer}>
                <h3 style={{ marginTop: 0 }}>Current Projection</h3>
                <div>
                  {`Projections for ${projection.length} players`}
                  {
                    //projection.map((projection) => (<li>{projection.player} - {projection.value}</li>))
                  }
                </div>
              </div>
            )
          }
          <div style={buttonContainerStyle}>
            <Button variant="contained" onClick={importProjection} color="primary" style={buttonStyle}>Import</Button>
          </div>
          <TextField
            id="standard-multiline-static"
            label="Import projections"
            multiline
            rows="28"
            placeholder={placeholder}
            variant="outlined"
            style={textAreaStyle}
            onChange={onChange}
          />
        </Card>
      </div>
    </div>
  )
};

export default ImportProjection;
