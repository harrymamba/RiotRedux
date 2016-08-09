import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAUFwoyiCLhzsYLJo8KDmSLeqaPZUiaPZQ';

// Create component that should produce some HTML
const App = () => {
	return <div>Hi!</div>;
}

// Generate HTML and put it on page DOM 
ReactDOM.render(<App/>, document.querySelector('.container'));
