import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selectors from './Selectors';
import TextFields from './TextFields';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Selectors />, document.getElementById('root'));
registerServiceWorker();
