import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	const handleBack = () => {
		history.back();
	};

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpexted error has occured</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<button onClick={handleBack}>Go Back</button>
		</div>
	);
};

export default ErrorPage;
