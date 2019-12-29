import React from 'react';
import ReactDOM from 'react-dom';
import Second from './secondDom';
import Toggle from './Toggle';
import Greeting from './swith/Greeting';
import ListItems from './list/ListItems';
import NameForm from './Form/NameForm'
import Blog from './list/Blog';
import TextForm from './Form/TextForm';
import SelectForm from './Form/SelectForm';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


function Demo(props) {
	return <h1>hello, {props.name} </h1>
}

function App() {
	return (
		<div>
			<Demo name='Job' />
			<Demo name='Tom' />
			<Demo name='Roran' />
		</div>
	)
}

function interValRun () {
	// setInterval(() => {
		ReactDOM.render(<Second date={ new Date() }/>, document.getElementById('root'));
	// },1000);
}

// setInterval(interValRun, 1000);
// <Greeting isLoggedIn={true} />
// <Blog posts={posts} />
// <NameForm />
// <TextForm />
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(<SelectForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
