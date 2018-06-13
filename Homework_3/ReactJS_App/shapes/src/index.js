import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShapeUI from './ShapeUI';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShapeUI />, document.getElementById('root'));
registerServiceWorker();
