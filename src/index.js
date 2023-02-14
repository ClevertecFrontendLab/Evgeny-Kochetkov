import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';

import { App } from './components/app';
import { reduser } from './reduser';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reduser/* , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */); // eslint-disable-line

root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);