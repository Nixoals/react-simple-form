import { useState } from 'react';
import Result from './Result';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [submit, setSubmit] = useState(false);
	const [alert, setAlert] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (passwordCheck !== password) {
			return setAlert('Vos deux mots de pass ne sont pas identiques');
		} else setAlert('');
		return setSubmit(true);
	};
	return (
		<>
			<section className="form-wrapper">
				<div>
					<h1>{submit ? 'Result' : 'Create Account'}</h1>
				</div>

				<div>
					<form className={`form ${submit ? 'hide-form' : ''}`} onSubmit={handleSubmit}>
						<label>Name</label>
						<input
							onChange={(elem) => {
								setName(elem.target.value);
							}}
							type={'text'}
							placeholder={'name'}
							value={name}
						></input>
						<label>E-mail</label>
						<input
							onChange={(elem) => {
								setEmail(elem.target.value);
							}}
							type={'text'}
							placeholder={'e-mail'}
							value={email}
						></input>
						<label>Password</label>
						<input
							className={alert ? 'red-border' : ''}
							onChange={(elem) => {
								setPassword(elem.target.value);
							}}
							type={'password'}
							placeholder={'password'}
							value={password}
						></input>
						<label>Confirm your password</label>
						<input
							className={alert ? 'red-border' : ''}
							onChange={(elem) => {
								setPasswordCheck(elem.target.value);
							}}
							type={'password'}
							placeholder={'confirm password'}
							value={passwordCheck}
						></input>
						<div className="alert-password">
							<h2>{!submit ? alert : ''}</h2>
						</div>
						<button type="submit">Register</button>
					</form>
				</div>
			</section>
			<section>{submit && <Result name={name} email={email} password={password} setSubmit={setSubmit}></Result>}</section>
		</>
	);
};

export default Form;
