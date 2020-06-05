import React from 'react';
import ReactDOM from 'react-dom';
import { Doggy } from './doggy';
import { Kitty } from './kitty';

class Picture extends React.Component {
	constructor(props) {
		super(props);
		this.state = {display: 'Doggy'};
		this.switch = this.switch.bind(this);
	}

	switch() {
			const newDisplay = this.state.display == 'Doggy' ? 'Kitty' : 'Doggy';
			this.setState({ display: newDisplay });
	}

	render() {
		const header = <h1 style={{background: '#00FFFF', textAlign: 'center'}}>Picture Switch Demo</h1>;

		if (this.state.display == 'Doggy') {
			return (
				<div>
					{header}
					<Doggy onClick={this.switch}/>
				</div>
			);
		} else {
			return (
				<div>
					{header}
					<Kitty onClick={this.switch}/>
				</div>
			);
		}
	};
}


ReactDOM.render(<Picture />, document.getElementById('root'));
