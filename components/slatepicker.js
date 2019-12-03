import Link from 'next/link';
import Card from './card';
import fetch from 'isomorphic-unfetch';


class SlatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      slates: {},
      players: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const draftGroupId = event.target.value;
    this.setState({selected: draftGroupId});
  }

  render() {
    let { props: { slates }, state: { selected } } = this;
    const draftGroupIds = Object.keys(slates).map((key) => key);
    if (!selected) {
      selected = draftGroupIds[0];
      this.setState({ selected });
    }

    const slate = selected && slates[selected];
    console.log(slates)
    return (
      <Card>
        <h2 style={{ marginTop: 0 }}>Pick a slate</h2>
        <div>
          <select value={this.state.selected} onChange={this.handleChange}>
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
          <button onClick={() => console.log(this.state.selected)}>Next</button>
        </div>
        {
          slate && (
            <div>
              <h3>Slate Info</h3>
              <p>{slate.Sport} - {slate.GameType.Name}</p>
              <h4>Players</h4>
              <ul>
                <li>{slate.players && slate.players.draftables && `${slate.players.draftables[0].displayName} - ${slate.players.draftables[0].salary}`}</li>
              </ul>
            </div>
          )
        }
      </Card>
    )
  }
}

export default SlatePicker
