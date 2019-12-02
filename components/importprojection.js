import Card from './card';
import Joi from '@hapi/joi';

class ImportProjection extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.import = this.import.bind(this);

    this.state = {};
  }

  onChangeHandler(event) {
    this.setState({ rawProjection: event.target.value });
  }

  import() {

    if (!this.state.rawProjection) {
      return this.setState({ importErrors: [new Error('empty textarea')] });
    }

    const importErrors = [];
    this.setState({ importErrors })

    const validationSchema = Joi.object({
      player: Joi.string().required(),
      value: Joi.number().required()
    });

    // track players, they should be unique
    const players = {};

    // assumes that values will not contain commas
    const projection = this.state.rawProjection.split('\n').map((line) => {

      const [player, projection] = line.split(',');
      const result = {
        player,
        value: Number(projection)
      };

      if (players[player]) {
        importErrors.push(new Error(`Duplicate player - ${player}`));
      }

      players[player] = true;

      const validation = validationSchema.validate(result);
      if (validation.error) {
        importErrors.push(validation);
      }

      return result;
    });

    if (importErrors.length) {
      return this.setState({ importErrors });
    }

    this.setState({ projection });

    // projection needs to go into redux as it's used later
  }

  render() {
    return (
      <Card>
        <h2 style={{ marginTop: 0 }}>Import Projection</h2>
        <textarea onChange={this.onChangeHandler} />
        <div>
          <button onClick={this.import}>import</button>
        </div>
        {this.state.importErrors && !!this.state.importErrors.length && (
          <div>
            <h3>Import Has Errors</h3>
            <ul>
              {this.state.importErrors.map((err) => (
                <li>{(err.error && err.error.toString()) || err.toString()}</li>
              ))}
            </ul>
          </div>
        )}
        {
          this.state.projection && (
            <div>
              <h3>Current Projection</h3>
              <div>
                {`${this.state.projection.length} lines imported`}
                {
                  this.state.projection.map((projection) => (<li>{projection.player} - {projection.value}</li>))
                }
              </div>
            </div>
          )
        }
      </Card>
    )
  }
};

export default ImportProjection;
