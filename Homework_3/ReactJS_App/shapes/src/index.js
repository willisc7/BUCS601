import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shapes from './Shapes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Shapes />, document.getElementById('root'));
registerServiceWorker();
