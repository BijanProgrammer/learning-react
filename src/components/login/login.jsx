import React, { Component } from 'react';
import loginImage from '../../login.svg';

export class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="base-container">
				<div className="header">وارد شوید!</div>

				<div className="content">
					<div className="image">
						<img src={loginImage} alt="Login" />
					</div>

					<div className="form">
						<div className="form-group">
							<label htmlFor="username">نام کاربری</label>
							<input type="text" name="username" placeholder="نام کاربری" />
						</div>
						<div className="form-group">
							<label htmlFor="password">رمز عبور</label>
							<input type="text" name="password" placeholder="رمز عبور" />
						</div>
					</div>
				</div>

				<div className="footer">
					<button className="btn" type="button">
						ورود
					</button>
				</div>
			</div>
		);
	}
}
