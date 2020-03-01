import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Login, Register } from './components/login/index';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogginActive : true
		};
	}

	render() {
		const { isLogginActive } = this.state;
		const current = isLogginActive ? 'ثبت نام' : 'ورود';
		const currentActive = isLogginActive ? 'ورود' : 'ثبت نام';

		return (
			<div className='App'>
				<div className='login'>
					<div className='container'>
						{isLogginActive && <Login containerRef={(ref) => (this.current = ref)} />}
						{!isLogginActive && <Register containerRef={(ref) => (this.current = ref)} />}
					</div>

					<Side
						current={current}
						containerRef={(ref) => (this.side = ref)}
						onClick={this.changeState.bind(this)}
					/>
				</div>
			</div>
		);
	}

	changeState() {
		const { isLogginActive } = this.state;

		if (isLogginActive) {
			this.side.classList.remove('right');
			this.side.classList.add('left');
		} else {
			this.side.classList.remove('left');
			this.side.classList.add('right');
		}

		this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive }));
	}
}

const Side = (props) => {
	return (
		<div className='side' ref={props.containerRef} onClick={props.onClick}>
			<div className='inner-container'>
				<div className='text'>{props.current}</div>
			</div>
		</div>
	);
};

export default App;
