const Result = ({ name, email, password, setSubmit }) => {
	return (
		<>
			<div className="result-form-container">
				<div className="result-form-wrapper">
					<h2>name: {name}</h2>
					<h2>Email: {email}</h2>
					<h2>Password: {password}</h2>
				</div>
				<button
					onClick={() => {
						setSubmit(false);
					}}
				>
					Edit your information
				</button>
			</div>
		</>
	);
};

export default Result;
