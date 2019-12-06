import Card from './card';
import Joi from '@hapi/joi';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const getState = () => {
  const dispatch = useDispatch();

  const importErrors = useSelector(state => state.importErrors, shallowEqual);
  const rawProjection = useSelector(state => state.rawProjection, shallowEqual);
  const projection = useSelector(state => state.projection, shallowEqual);

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
      value: Joi.number().required()
    });

    // track players, they should be unique
    const players = {};

    // assumes that values will not contain commas
    let errors = false;
    const formattedProjection = rawProjection.split('\n').map((line) => {

      const [player, projection] = line.split(',');
      const result = {
        player,
        value: Number(projection)
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
    importProjection
  };
};

const ImportProjection  = () => {

  const { importErrors, projection, setRawProjection, importProjection } = getState();

  const onChange = (event) => setRawProjection(event.target.value);

  return (
    <Card>
      <h2 style={{ marginTop: 0 }}>Import Projection</h2>
      <textarea onChange={onChange} />
      <div>
        <button onClick={importProjection}>import</button>
      </div>
      {importErrors && !!importErrors.length && (
        <div>
          <h3>Import Has Errors</h3>
          <ul>
            {importErrors.map((err) => (
              <li>{(err.error && err.error.toString()) || err.toString()}</li>
            ))}
          </ul>
        </div>
      )}
      {
        projection && (
          <div>
            <h3>Current Projection</h3>
            <div>
              {`${projection.length} lines imported`}
              {
                projection.map((projection) => (<li>{projection.player} - {projection.value}</li>))
              }
            </div>
          </div>
        )
      }
    </Card>
  )
};

export default ImportProjection;
