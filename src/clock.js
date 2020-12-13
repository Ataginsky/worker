import { Component } from 'react';

class Clock extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		
		this.state = {
			date: new Date(),
			toggle: true,
		};
	}

	componentDidMount() {
		this.timerId = setInterval( 
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}


	tick() {
		this.setState({ date: new Date() });
	}

	handleClick() {
		this.setState(state => ({ toggle: !state.toggle }));
	}

	handleClickAutoBind() {
		this.setState(state => ({ toggle: !state.toggle }));
	}

	handleTurnOff() {
		this.setState({ toggle: false });
	}

	handleTurnOn = () => {
		console.log(this);
	}

	render() {
		return (<div>
			<p>Une horloge du {this.props.appName}</p>
			<p>Il est l'heure de faire dodo: {this.state.date.toLocaleTimeString()}</p>
			<button onClick={this.handleClick}>Toggle the toggler: {this.state.toggle ? 'ON': 'OFF'}</button>
			<button onClick={this.handleClickAutoBind.bind(this)}>Toggle avec auto bind</button>
			<button onClick={() => this.handleTurnOff()}>Forcer à OFF</button>
			<button onClick={this.handleTurnOn}>Forcer à ON</button>
		</div>);
	}
}

export default Clock;