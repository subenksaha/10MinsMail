
function Error(props) {

	return (
		<p>
			{props.statusCode
				? `An error ${props.statusCode} occurred on server`
				: 'An error occurred on client'}
		</p>
	);

}
Error.getInitialProps = async ({req, res, err}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : null;
	return {
		namespacesRequired: ['common'],
		statusCode,
	};
};
export default Error;
