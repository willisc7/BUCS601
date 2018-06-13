import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selectors from './Selectors';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Selectors />, document.getElementById('root'));
registerServiceWorker();
