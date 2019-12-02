import Link from 'next/link';
import Card from './card';

class SlatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      selected: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selected: event.target.value});
  }

  render() {
    const { props } = this;
    props.slates && !this.state.selected && this.setState({ selected: props.slates[0].DraftGroupId });

    return (
      <Card>
        <h2 style={{ marginTop: 0 }}>Pick a slate</h2>
        <div>
          <select value={this.state.selected} onChange={this.handleChange}>
            {props.slates && props.slates.map((slate) => {

              const startTime = new Date((slate.StartDateEdt.substring(6, slate.StartDateEdt.length - 2) - 0));
              const lineText = `${slate.SportDisplayName} ${slate.GameType.GameStyle.Name} at ${startTime} ${slate.ContestStartTimeSuffix}`;
              return (
                <option value={slate.DraftGroupId} key={slate.DraftGroupId}>{lineText}</option>
              );
            })}
          </select>
        </div>
        <div>
          <button onClick={() => console.log(this.state.selected)}>Next</button>
        </div>
      </Card>
    )
  }
}

export default SlatePicker
